'use client';

import { memo } from 'react';
import { Kalam } from 'next/font/google';
import { getStroke } from 'perfect-freehand';
import { useMutation, useStorage } from '@liveblocks/react/suspense';
import { colorToCss, contrastingTextColor, svgPathFromStroke } from '@/lib/boards/geometry';
import { Color, LayerType } from '@/lib/boards/types';
import EditableText from './EditableText';

// Handwriting font for text and sticky notes
const kalam = Kalam({ subsets: ['latin'], weight: ['400'] });

type Box = { readonly x: number; readonly y: number; readonly width: number; readonly height: number; readonly fill: Readonly<Color> };

interface LayerProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  // Set when someone else has this layer selected: their colour
  selectionColor?: string;
}

// One shape, note, text or stroke on the board, read live from the room's storage
export const LayerPreview = memo(function LayerPreview({ id, onLayerPointerDown, selectionColor }: LayerProps) {
  const layer = useStorage((root) => root.layers[id]);
  if (!layer) return null;
  const down = (e: React.PointerEvent) => onLayerPointerDown(e, id);

  switch (layer.type) {
    case LayerType.Path:
      return (
        <Path
          x={layer.x}
          y={layer.y}
          points={layer.points}
          fill={colorToCss(layer.fill)}
          stroke={selectionColor}
          onPointerDown={down}
        />
      );
    case LayerType.Rectangle:
      return (
        <rect
          className="drop-shadow-sm"
          onPointerDown={down}
          style={{ transform: `translate(${layer.x}px, ${layer.y}px)` }}
          x={0}
          y={0}
          width={layer.width}
          height={layer.height}
          rx={6}
          strokeWidth={2}
          fill={colorToCss(layer.fill)}
          stroke={selectionColor || 'transparent'}
        />
      );
    case LayerType.Ellipse:
      return (
        <ellipse
          className="drop-shadow-sm"
          onPointerDown={down}
          style={{ transform: `translate(${layer.x}px, ${layer.y}px)` }}
          cx={layer.width / 2}
          cy={layer.height / 2}
          rx={layer.width / 2}
          ry={layer.height / 2}
          strokeWidth={2}
          fill={colorToCss(layer.fill)}
          stroke={selectionColor || 'transparent'}
        />
      );
    case LayerType.Text:
    case LayerType.Note:
      return <Writing id={id} layer={layer} note={layer.type === LayerType.Note} onPointerDown={down} selectionColor={selectionColor} />;
    default:
      return null;
  }
});

interface WritingProps {
  id: string;
  layer: Box & { readonly value?: string };
  note: boolean;
  onPointerDown: (e: React.PointerEvent) => void;
  selectionColor?: string;
}

// Free text in the chosen colour, or a sticky note with text that contrasts with its colour
function Writing({ id, layer, note, onPointerDown, selectionColor }: WritingProps) {
  const { x, y, width, height, fill, value } = layer;
  const setValue = useMutation(({ storage }, text: string) => storage.get('layers').get(id)?.update({ value: text }), [id]);
  const fontSize = Math.min(height * (note ? 0.15 : 0.5), width * (note ? 0.15 : 0.5), 96);

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={onPointerDown}
      className={note ? 'drop-shadow-md' : undefined}
      style={{
        outline: selectionColor ? `2px solid ${selectionColor}` : 'none',
        backgroundColor: note ? colorToCss(fill) : 'transparent',
      }}
    >
      <EditableText
        value={value ?? ''}
        onChange={setValue}
        placeholder={note ? 'Note' : 'Text'}
        className={`flex h-full w-full items-center justify-center overflow-hidden p-1 text-center leading-tight ${kalam.className}`}
        style={{ fontSize, color: note ? contrastingTextColor(fill) : colorToCss(fill) }}
      />
    </foreignObject>
  );
}

interface PathProps {
  x: number;
  y: number;
  points: readonly (readonly number[])[];
  fill: string;
  stroke?: string;
  onPointerDown?: (e: React.PointerEvent) => void;
}

// A pen stroke, smoothed by perfect-freehand
export function Path({ x, y, points, fill, stroke, onPointerDown }: PathProps) {
  const outline = getStroke(
    points.map((p) => [...p]),
    { size: 12, thinning: 0.5, smoothing: 0.5, streamline: 0.5 }
  );
  return (
    <path
      onPointerDown={onPointerDown}
      d={svgPathFromStroke(outline)}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      fill={fill}
      stroke={stroke}
      strokeWidth={stroke ? 2 : 0}
    />
  );
}
