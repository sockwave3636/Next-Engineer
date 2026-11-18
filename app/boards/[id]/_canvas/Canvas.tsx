'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { LiveObject } from '@liveblocks/client';
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useMutation,
  useOthersMapped,
  useSelf,
  useStorage,
} from '@liveblocks/react/suspense';
import {
  colorToCss,
  connectionIdToColor,
  findIntersectingLayersWithRectangle,
  penPointsToPathLayer,
  pointerEventToCanvasPoint,
  resizeBounds,
} from '@/lib/boards/geometry';
import {
  BoardSummary,
  Camera,
  CanvasMode,
  CanvasState,
  Color,
  InsertableLayer,
  Layer,
  LayerType,
  MAX_LAYERS,
  Point,
  Side,
  XYWH,
} from '@/lib/boards/types';
import { useDeleteLayers, useNoPageScroll } from './hooks';
import { LayerPreview, Path } from './Layers';
import { OthersPresence } from './Cursors';
import { PALETTE, SelectionBox, SelectionTools } from './Selection';
import Toolbar from './Toolbar';
import BoardTour, { useBoardTour } from './BoardTour';
import TopBar from './TopBar';

const BLACK = PALETTE[0];
const NOTE_YELLOW = PALETTE[2];

// Starting size of each new shape, centred where you click
const NEW_SIZE: Record<InsertableLayer, { width: number; height: number }> = {
  [LayerType.Rectangle]: { width: 140, height: 100 },
  [LayerType.Ellipse]: { width: 140, height: 100 },
  [LayerType.Text]: { width: 200, height: 60 },
  [LayerType.Note]: { width: 160, height: 160 },
};

const isTyping = (target: EventTarget | null) => {
  const el = target as HTMLElement | null;
  return !!el && (el.isContentEditable || el.tagName === 'INPUT' || el.tagName === 'TEXTAREA');
};

// The whiteboard: an endless canvas everyone in the room edits together. Ported from VEL
// (github.com/sockwave3636/vel) onto Next Engineer's sign-in and styles.
export default function Canvas({ board, onBoardChange }: { board: BoardSummary; onBoardChange: (board: BoardSummary) => void }) {
  const layerIds = useStorage((root) => root.layerIds);
  const pencilDraft = useSelf((me) => me.presence.pencilDraft);
  const [canvasState, setCanvasState] = useState<CanvasState>({ mode: CanvasMode.None });
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
  const [lastUsedColor, setLastUsedColor] = useState<Color>(BLACK);
  const [full, setFull] = useState(false);
  const tour = useBoardTour();
  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();
  useNoPageScroll();

  const insertLayer = useMutation(
    ({ storage, setMyPresence }, layerType: InsertableLayer, position: Point) => {
      const layers = storage.get('layers');
      if (layers.size >= MAX_LAYERS) {
        setFull(true);
        return;
      }
      const { width, height } = NEW_SIZE[layerType];
      const fill = layerType === LayerType.Note && lastUsedColor === BLACK ? NOTE_YELLOW : lastUsedColor;
      const box = { x: Math.round(position.x - width / 2), y: Math.round(position.y - height / 2), width, height, fill };
      const layer: Layer =
        layerType === LayerType.Text || layerType === LayerType.Note ? { type: layerType, ...box, value: '' } : { type: layerType, ...box };
      const id = crypto.randomUUID();
      layers.set(id, new LiveObject(layer));
      storage.get('layerIds').push(id);
      setMyPresence({ selection: [id] }, { addToHistory: true });
      setCanvasState({ mode: CanvasMode.None });
    },
    [lastUsedColor]
  );

  const translateSelectedLayers = useMutation(
    ({ storage, self }, point: Point) => {
      if (canvasState.mode !== CanvasMode.Translating) return;
      const offset = { x: point.x - canvasState.current.x, y: point.y - canvasState.current.y };
      const layers = storage.get('layers');
      for (const id of self.presence.selection) {
        const layer = layers.get(id);
        if (layer) layer.update({ x: layer.get('x') + offset.x, y: layer.get('y') + offset.y });
      }
      setCanvasState({ mode: CanvasMode.Translating, current: point });
    },
    [canvasState]
  );

  const unselectLayers = useMutation(({ self, setMyPresence }) => {
    if (self.presence.selection.length > 0) setMyPresence({ selection: [] }, { addToHistory: true });
  }, []);

  const updateSelectionNet = useMutation(
    ({ storage, setMyPresence }, current: Point, origin: Point) => {
      setCanvasState({ mode: CanvasMode.SelectionNet, origin, current });
      setMyPresence({ selection: findIntersectingLayersWithRectangle(layerIds, storage.get('layers').toJSON(), origin, current) });
    },
    [layerIds]
  );

  const startMultiSelection = useCallback((current: Point, origin: Point) => {
    if (Math.abs(current.x - origin.x) + Math.abs(current.y - origin.y) > 5) {
      setCanvasState({ mode: CanvasMode.SelectionNet, origin, current });
    }
  }, []);

  const startDrawing = useMutation(
    ({ setMyPresence }, point: Point, pressure: number) => {
      setMyPresence({ pencilDraft: [[point.x, point.y, pressure]], penColor: lastUsedColor });
    },
    [lastUsedColor]
  );

  const continueDrawing = useMutation(
    ({ self, setMyPresence }, point: Point, e: React.PointerEvent) => {
      const draft = self.presence.pencilDraft;
      if (canvasState.mode !== CanvasMode.Pencil || e.buttons !== 1 || draft == null) return;
      const [lastX, lastY] = draft[draft.length - 1];
      if (lastX === point.x && lastY === point.y) return;
      setMyPresence({ cursor: point, pencilDraft: [...draft, [point.x, point.y, e.pressure]] });
    },
    [canvasState.mode]
  );

  const insertPath = useMutation(
    ({ storage, self, setMyPresence }) => {
      const layers = storage.get('layers');
      const draft = self.presence.pencilDraft;
      if (draft == null || draft.length < 2 || layers.size >= MAX_LAYERS) {
        if (draft && layers.size >= MAX_LAYERS) setFull(true);
        setMyPresence({ pencilDraft: null });
        return;
      }
      const id = crypto.randomUUID();
      layers.set(id, new LiveObject<Layer>(penPointsToPathLayer(draft, lastUsedColor)));
      storage.get('layerIds').push(id);
      setMyPresence({ pencilDraft: null });
    },
    [lastUsedColor]
  );

  const resizeSelectedLayer = useMutation(
    ({ storage, self }, point: Point) => {
      if (canvasState.mode !== CanvasMode.Resizing) return;
      const bounds = resizeBounds(canvasState.initialBounds, canvasState.corner, point);
      storage.get('layers').get(self.presence.selection[0])?.update(bounds);
    },
    [canvasState]
  );

  const onResizeHandlePointerDown = useCallback(
    (corner: Side, initialBounds: XYWH) => {
      history.pause();
      setCanvasState({ mode: CanvasMode.Resizing, initialBounds, corner });
    },
    [history]
  );

  // Mouse wheel or trackpad moves the view
  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((c) => ({ x: c.x - e.deltaX, y: c.y - e.deltaY }));
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (canvasState.mode === CanvasMode.Hand) {
        setCanvasState({ mode: CanvasMode.Hand, from: { x: e.clientX, y: e.clientY } });
        return;
      }
      if (canvasState.mode === CanvasMode.Inserting) return;
      const point = pointerEventToCanvasPoint(e, camera);
      if (canvasState.mode === CanvasMode.Pencil) {
        startDrawing(point, e.pressure);
        return;
      }
      setCanvasState({ mode: CanvasMode.Pressing, origin: point });
    },
    [camera, canvasState.mode, startDrawing]
  );

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();
      if (canvasState.mode === CanvasMode.Hand) {
        if (canvasState.from && e.buttons) {
          const from = canvasState.from;
          setCamera((c) => ({ x: c.x + e.clientX - from.x, y: c.y + e.clientY - from.y }));
          setCanvasState({ mode: CanvasMode.Hand, from: { x: e.clientX, y: e.clientY } });
        }
        return;
      }
      const current = pointerEventToCanvasPoint(e, camera);
      if (canvasState.mode === CanvasMode.Pressing) startMultiSelection(current, canvasState.origin);
      else if (canvasState.mode === CanvasMode.SelectionNet) updateSelectionNet(current, canvasState.origin);
      else if (canvasState.mode === CanvasMode.Translating) translateSelectedLayers(current);
      else if (canvasState.mode === CanvasMode.Resizing) resizeSelectedLayer(current);
      else if (canvasState.mode === CanvasMode.Pencil) continueDrawing(current, e);
      setMyPresence({ cursor: current });
    },
    [camera, canvasState, continueDrawing, resizeSelectedLayer, startMultiSelection, translateSelectedLayers, updateSelectionNet]
  );

  const onPointerLeave = useMutation(({ setMyPresence }) => setMyPresence({ cursor: null }), []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      const point = pointerEventToCanvasPoint(e, camera);
      // Letting go inside a note or text box you're typing in keeps it selected
      if (canvasState.mode === CanvasMode.None && isTyping(e.target)) {
        history.resume();
        return;
      }
      if (canvasState.mode === CanvasMode.Hand) {
        setCanvasState({ mode: CanvasMode.Hand });
      } else if (canvasState.mode === CanvasMode.None || canvasState.mode === CanvasMode.Pressing) {
        unselectLayers();
        setCanvasState({ mode: CanvasMode.None });
      } else if (canvasState.mode === CanvasMode.Pencil) {
        insertPath();
      } else if (canvasState.mode === CanvasMode.Inserting) {
        insertLayer(canvasState.layerType, point);
      } else {
        setCanvasState({ mode: CanvasMode.None });
      }
      history.resume();
    },
    [camera, canvasState, history, insertLayer, insertPath, unselectLayers]
  );

  const onLayerPointerDown = useMutation(
    ({ self, setMyPresence }, e: React.PointerEvent, layerId: string) => {
      if (canvasState.mode === CanvasMode.Pencil || canvasState.mode === CanvasMode.Inserting || canvasState.mode === CanvasMode.Hand) return;
      e.stopPropagation();
      // Clicking into the text of a selected note or text box edits it instead of dragging it
      if (isTyping(e.target) && self.presence.selection.includes(layerId)) return;
      history.pause();
      if (!self.presence.selection.includes(layerId)) setMyPresence({ selection: [layerId] }, { addToHistory: true });
      setCanvasState({ mode: CanvasMode.Translating, current: pointerEventToCanvasPoint(e, camera) });
    },
    [camera, history, canvasState.mode]
  );

  // Layers other people have selected get an outline in their colour
  const selections = useOthersMapped((other) => other.presence.selection);
  const selectionColors = useMemo(() => {
    const colors: Record<string, string> = {};
    for (const [connectionId, selection] of selections) {
      for (const layerId of selection) colors[layerId] = connectionIdToColor(connectionId);
    }
    return colors;
  }, [selections]);

  const deleteLayers = useDeleteLayers();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (isTyping(e.target)) return;
      const mod = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();
      if (mod && key === 'z') {
        e.preventDefault();
        if (e.shiftKey) history.redo();
        else history.undo();
      } else if (mod && key === 'y') {
        e.preventDefault();
        history.redo();
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        deleteLayers();
      } else if (e.key === 'Escape') {
        unselectLayers();
        setCanvasState({ mode: CanvasMode.None });
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [deleteLayers, history, unselectLayers]);

  const cursor =
    canvasState.mode === CanvasMode.Hand
      ? canvasState.from
        ? 'grabbing'
        : 'grab'
      : canvasState.mode === CanvasMode.Pencil || canvasState.mode === CanvasMode.Inserting
        ? 'crosshair'
        : 'default';

  return (
    <main
      className="fixed inset-0 touch-none select-none bg-[#f8fafc]"
      style={{
        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        backgroundPosition: `${camera.x}px ${camera.y}px`,
      }}
    >
      <TopBar board={board} onBoardChange={onBoardChange} onHelp={tour.start} />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canUndo={canUndo}
        canRedo={canRedo}
        undo={history.undo}
        redo={history.redo}
      />
      <SelectionTools camera={camera} setLastUsedColor={setLastUsedColor} />
      {tour.open && <BoardTour onFinish={tour.finish} />}

      {full && (
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-lg bg-sun-soft px-4 py-2 text-sm font-semibold text-sun-ink shadow-lift" role="status">
          This board is full ({MAX_LAYERS} items). Delete something to add more.
          <button type="button" onClick={() => setFull(false)} className="ml-3 underline">
            OK
          </button>
        </div>
      )}

      <svg
        className="h-screen w-screen"
        style={{ cursor }}
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <g style={{ transform: `translate(${camera.x}px, ${camera.y}px)` }}>
          {layerIds.map((layerId) => (
            <LayerPreview key={layerId} id={layerId} onLayerPointerDown={onLayerPointerDown} selectionColor={selectionColors[layerId]} />
          ))}
          <SelectionBox onResizeHandlePointerDown={onResizeHandlePointerDown} />
          {canvasState.mode === CanvasMode.SelectionNet && canvasState.current && (
            <rect
              fill="rgb(37 99 235 / 0.06)"
              stroke="#2563eb"
              strokeWidth={1}
              x={Math.min(canvasState.origin.x, canvasState.current.x)}
              y={Math.min(canvasState.origin.y, canvasState.current.y)}
              width={Math.abs(canvasState.origin.x - canvasState.current.x)}
              height={Math.abs(canvasState.origin.y - canvasState.current.y)}
            />
          )}
          <OthersPresence />
          {pencilDraft && pencilDraft.length > 0 && <Path points={pencilDraft} fill={colorToCss(lastUsedColor)} x={0} y={0} />}
        </g>
      </svg>
    </main>
  );
}
