import { Camera, Color, LayerType, PathLayer, Point, Side, XYWH } from './types';

// Cursor and selection colours for other people on the board
const PEOPLE_COLORS = ['#DC2626', '#D97706', '#059669', '#7C3AED', '#DB2777', '#0891B2'];

export function connectionIdToColor(connectionId: number): string {
  return PEOPLE_COLORS[connectionId % PEOPLE_COLORS.length];
}

// The canvas fills the window from its top-left corner, so screen points map straight onto it
export function pointerEventToCanvasPoint(e: { clientX: number; clientY: number }, camera: Camera): Point {
  return { x: Math.round(e.clientX) - camera.x, y: Math.round(e.clientY) - camera.y };
}

export function colorToCss(color: Color): string {
  const hex = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
  return `#${hex(color.r)}${hex(color.g)}${hex(color.b)}`;
}

// Black or white, whichever reads better on the colour
export function contrastingTextColor(color: Color): string {
  return 0.299 * color.r + 0.587 * color.g + 0.114 * color.b > 182 ? '#111827' : '#ffffff';
}

export function resizeBounds(bounds: XYWH, corner: Side, point: Point): XYWH {
  const result = { ...bounds };
  if ((corner & Side.Left) === Side.Left) {
    result.x = Math.min(point.x, bounds.x + bounds.width);
    result.width = Math.abs(bounds.x + bounds.width - point.x);
  }
  if ((corner & Side.Right) === Side.Right) {
    result.x = Math.min(point.x, bounds.x);
    result.width = Math.abs(point.x - bounds.x);
  }
  if ((corner & Side.Top) === Side.Top) {
    result.y = Math.min(point.y, bounds.y + bounds.height);
    result.height = Math.abs(bounds.y + bounds.height - point.y);
  }
  if ((corner & Side.Bottom) === Side.Bottom) {
    result.y = Math.min(point.y, bounds.y);
    result.height = Math.abs(point.y - bounds.y);
  }
  return result;
}

export function findIntersectingLayersWithRectangle(
  layerIds: readonly string[],
  layers: Readonly<Record<string, Readonly<XYWH> | undefined>>,
  a: Point,
  b: Point
): string[] {
  const rect = { x: Math.min(a.x, b.x), y: Math.min(a.y, b.y), width: Math.abs(a.x - b.x), height: Math.abs(a.y - b.y) };
  return layerIds.filter((id) => {
    const layer = layers[id];
    return (
      !!layer &&
      rect.x + rect.width > layer.x &&
      rect.x < layer.x + layer.width &&
      rect.y + rect.height > layer.y &&
      rect.y < layer.y + layer.height
    );
  });
}

export function boundingBox(layers: readonly Readonly<XYWH>[]): XYWH | null {
  if (layers.length === 0) return null;
  let left = Infinity;
  let top = Infinity;
  let right = -Infinity;
  let bottom = -Infinity;
  for (const { x, y, width, height } of layers) {
    left = Math.min(left, x);
    top = Math.min(top, y);
    right = Math.max(right, x + width);
    bottom = Math.max(bottom, y + height);
  }
  return { x: left, y: top, width: right - left, height: bottom - top };
}

// A finished pen stroke as a layer, with its points made relative to its own corner
export function penPointsToPathLayer(points: number[][], color: Color): PathLayer {
  let left = Infinity;
  let top = Infinity;
  let right = -Infinity;
  let bottom = -Infinity;
  for (const [x, y] of points) {
    left = Math.min(left, x);
    top = Math.min(top, y);
    right = Math.max(right, x);
    bottom = Math.max(bottom, y);
  }
  return {
    type: LayerType.Path,
    x: left,
    y: top,
    width: right - left,
    height: bottom - top,
    fill: color,
    points: points.map(([x, y, pressure]) => [x - left, y - top, pressure]),
  };
}

// perfect-freehand's outline as an SVG path
export function svgPathFromStroke(stroke: number[][]): string {
  if (!stroke.length) return '';
  const d: (string | number)[] = ['M', ...stroke[0], 'Q'];
  stroke.forEach(([x0, y0], i) => {
    const [x1, y1] = stroke[(i + 1) % stroke.length];
    d.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
  });
  d.push('Z');
  return d.join(' ');
}
