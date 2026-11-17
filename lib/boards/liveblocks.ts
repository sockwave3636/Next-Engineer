import type { LiveList, LiveMap, LiveObject } from '@liveblocks/client';
import type { Color, Layer, Point } from './types';

// What Liveblocks keeps for a board room. Typed once here for every Liveblocks hook.
declare global {
  interface Liveblocks {
    // Each person's live state, seen by everyone else in the room
    Presence: {
      cursor: Point | null;
      selection: string[];
      // The stroke being drawn right now, as [x, y, pressure] points
      pencilDraft: number[][] | null;
      penColor: Color | null;
    };
    // The board itself: shapes by id, and their order from back to front
    Storage: {
      layers: LiveMap<string, LiveObject<Layer>>;
      layerIds: LiveList<string>;
    };
    // Set by the server when someone joins (app/api/boards/live-auth)
    UserMeta: {
      id: string;
      info: { name: string };
    };
  }
}

export {};
