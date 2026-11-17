// Study boards: shared whiteboards students draw on together. The board list lives in Firestore
// (boards/{id}, written only by the server); what's drawn on a board lives in Liveblocks, in a
// room named after the board.

export const BOARD_TITLE_MAX = 60;
export const MAX_BOARDS_PER_OWNER = 20;
// People who can join one board through its link
export const MAX_BOARD_MEMBERS = 50;
// Shapes, notes and pen strokes on one board
export const MAX_LAYERS = 500;

export const roomIdFor = (boardId: string) => `board-${boardId}`;
export const boardIdFromRoom = (room: string) => (room.startsWith('board-') ? room.slice('board-'.length) : null);

// One board as the signed-in student sees it
export interface BoardSummary {
  id: string;
  title: string;
  ownerName: string;
  isOwner: boolean;
  // Anyone signed in with the link can open and draw on it
  shared: boolean;
  // Milliseconds; last time anyone opened it
  lastOpenedAt: number;
}

// ---- Drawing ----------------------------------------------------------------

export type Color = { r: number; g: number; b: number };
export type Point = { x: number; y: number };
export type Camera = { x: number; y: number };
export type XYWH = { x: number; y: number; width: number; height: number };

export enum LayerType {
  Rectangle,
  Ellipse,
  Path,
  Text,
  Note,
}

type Box = { x: number; y: number; width: number; height: number; fill: Color };

export type RectangleLayer = Box & { type: LayerType.Rectangle };
export type EllipseLayer = Box & { type: LayerType.Ellipse };
// A pen stroke; points are [x, y, pressure] relative to the layer's x and y
export type PathLayer = Box & { type: LayerType.Path; points: number[][] };
// Text and sticky notes hold plain text only, never HTML
export type TextLayer = Box & { type: LayerType.Text; value?: string };
export type NoteLayer = Box & { type: LayerType.Note; value?: string };

export type Layer = RectangleLayer | EllipseLayer | PathLayer | TextLayer | NoteLayer;
export type InsertableLayer = LayerType.Rectangle | LayerType.Ellipse | LayerType.Text | LayerType.Note;

// Corners and edges of the selection box, combined as bit flags
export enum Side {
  Top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8,
}

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
  Hand,
}

export type CanvasState =
  | { mode: CanvasMode.None }
  | { mode: CanvasMode.Pressing; origin: Point }
  | { mode: CanvasMode.SelectionNet; origin: Point; current?: Point }
  | { mode: CanvasMode.Translating; current: Point }
  | { mode: CanvasMode.Inserting; layerType: InsertableLayer }
  | { mode: CanvasMode.Resizing; initialBounds: XYWH; corner: Side }
  | { mode: CanvasMode.Pencil }
  // `from` is the screen point where the current drag started
  | { mode: CanvasMode.Hand; from?: Point };

// Longest text in one note or text box
export const MAX_TEXT = 2000;
