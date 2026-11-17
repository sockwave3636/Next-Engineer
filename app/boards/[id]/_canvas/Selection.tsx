'use client';

import { memo } from 'react';
import { useMutation, useSelf, useStorage } from '@liveblocks/react/suspense';
import { colorToCss } from '@/lib/boards/geometry';
import { Camera, Color, LayerType, Side, XYWH } from '@/lib/boards/types';
import Icon from '@/app/components/Icon';
import { useDeleteLayers, useSelectionBounds } from './hooks';

const HANDLE = 10;

// The eight resize handles: which edges each one moves, its cursor, and where it sits (0 to 1)
const HANDLES: { corner: Side; cursor: string; fx: number; fy: number }[] = [
  { corner: Side.Top + Side.Left, cursor: 'nwse-resize', fx: 0, fy: 0 },
  { corner: Side.Top, cursor: 'ns-resize', fx: 0.5, fy: 0 },
  { corner: Side.Top + Side.Right, cursor: 'nesw-resize', fx: 1, fy: 0 },
  { corner: Side.Right, cursor: 'ew-resize', fx: 1, fy: 0.5 },
  { corner: Side.Bottom + Side.Right, cursor: 'nwse-resize', fx: 1, fy: 1 },
  { corner: Side.Bottom, cursor: 'ns-resize', fx: 0.5, fy: 1 },
  { corner: Side.Bottom + Side.Left, cursor: 'nesw-resize', fx: 0, fy: 1 },
  { corner: Side.Left, cursor: 'ew-resize', fx: 0, fy: 0.5 },
];

// Outline around my selection, with resize handles when one shape (not a pen stroke) is selected
export const SelectionBox = memo(function SelectionBox({
  onResizeHandlePointerDown,
}: {
  onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
}) {
  const soleLayerId = useSelf((me) => (me.presence.selection.length === 1 ? me.presence.selection[0] : null));
  const resizable = useStorage((root) => !!soleLayerId && root.layers[soleLayerId]?.type !== LayerType.Path);
  const bounds = useSelectionBounds();
  if (!bounds) return null;

  return (
    <>
      <rect
        className="pointer-events-none fill-transparent"
        stroke="#2563eb"
        strokeWidth={1.5}
        style={{ transform: `translate(${bounds.x}px, ${bounds.y}px)` }}
        width={bounds.width}
        height={bounds.height}
      />
      {resizable &&
        HANDLES.map(({ corner, cursor, fx, fy }) => (
          <rect
            key={corner}
            fill="#ffffff"
            stroke="#2563eb"
            strokeWidth={1.5}
            width={HANDLE}
            height={HANDLE}
            rx={2}
            style={{
              cursor,
              transform: `translate(${bounds.x + bounds.width * fx - HANDLE / 2}px, ${bounds.y + bounds.height * fy - HANDLE / 2}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePointerDown(corner, bounds);
            }}
          />
        ))}
    </>
  );
});

export const PALETTE: Color[] = [
  { r: 17, g: 24, b: 39 },
  { r: 255, g: 255, b: 255 },
  { r: 255, g: 249, b: 177 },
  { r: 252, g: 142, b: 42 },
  { r: 243, g: 82, b: 35 },
  { r: 68, g: 202, b: 99 },
  { r: 39, g: 142, b: 237 },
  { r: 155, g: 105, b: 245 },
];

// Floating bar above my selection: colour, bring to front, send to back, delete
export const SelectionTools = memo(function SelectionTools({
  camera,
  setLastUsedColor,
}: {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}) {
  const selection = useSelf((me) => me.presence.selection);

  const moveToFront = useMutation(
    ({ storage }) => {
      const layerIds = storage.get('layerIds');
      const all = layerIds.toJSON();
      const indices = all.flatMap((id, i) => (selection.includes(id) ? [i] : []));
      for (let i = indices.length - 1; i >= 0; i--) {
        layerIds.move(indices[i], all.length - 1 - (indices.length - 1 - i));
      }
    },
    [selection]
  );

  const moveToBack = useMutation(
    ({ storage }) => {
      const layerIds = storage.get('layerIds');
      const indices = layerIds.toJSON().flatMap((id, i) => (selection.includes(id) ? [i] : []));
      indices.forEach((index, i) => layerIds.move(index, i));
    },
    [selection]
  );

  const setFill = useMutation(
    ({ storage }, fill: Color) => {
      setLastUsedColor(fill);
      const layers = storage.get('layers');
      selection.forEach((id) => layers.get(id)?.set('fill', fill));
    },
    [selection, setLastUsedColor]
  );

  const deleteLayers = useDeleteLayers();
  const bounds = useSelectionBounds();
  if (!bounds) return null;

  const x = bounds.x + bounds.width / 2 + camera.x;
  const y = Math.max(bounds.y + camera.y, 132);

  return (
    <div
      className="absolute left-0 top-0 z-10 flex select-none items-center gap-2 rounded-xl border border-line bg-surface p-2 shadow-lift"
      style={{ transform: `translate(calc(${x}px - 50%), calc(${y - 12}px - 100%))` }}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-4 gap-1.5 border-r border-line pr-2" role="group" aria-label="Colour">
        {PALETTE.map((color) => (
          <button
            key={colorToCss(color)}
            type="button"
            onClick={() => setFill(color)}
            className="h-6 w-6 rounded-md border border-black/15 transition hover:scale-110"
            style={{ background: colorToCss(color) }}
            aria-label={`Colour ${colorToCss(color)}`}
          />
        ))}
      </div>
      <BarButton label="Bring to front" icon="flip_to_front" onClick={moveToFront} />
      <BarButton label="Send to back" icon="flip_to_back" onClick={moveToBack} />
      <BarButton label="Delete" icon="delete" onClick={deleteLayers} danger />
    </div>
  );
});

function BarButton({ label, icon, onClick, danger = false }: { label: string; icon: 'flip_to_front' | 'flip_to_back' | 'delete'; onClick: () => void; danger?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`grid h-9 w-9 place-items-center rounded-lg transition hover:bg-surface-muted ${danger ? 'text-danger-ink' : 'text-ink'}`}
    >
      <Icon name={icon} size={20} />
    </button>
  );
}
