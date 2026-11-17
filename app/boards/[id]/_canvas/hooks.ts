'use client';

import { useEffect } from 'react';
import { shallow, useMutation, useSelf, useStorage } from '@liveblocks/react/suspense';
import { boundingBox } from '@/lib/boards/geometry';
import type { XYWH } from '@/lib/boards/types';

// The box around everything I have selected, or null
export function useSelectionBounds(): XYWH | null {
  const selection = useSelf((me) => me.presence.selection);
  return useStorage((root) => {
    const selected = selection.map((id) => root.layers[id]).filter((layer) => layer !== undefined);
    return boundingBox(selected);
  }, shallow);
}

export function useDeleteLayers() {
  const selection = useSelf((me) => me.presence.selection);
  return useMutation(
    ({ storage, setMyPresence }) => {
      const layers = storage.get('layers');
      const layerIds = storage.get('layerIds');
      for (const id of selection) {
        layers.delete(id);
        const index = layerIds.indexOf(id);
        if (index !== -1) layerIds.delete(index);
      }
      setMyPresence({ selection: [] }, { addToHistory: true });
    },
    [selection]
  );
}

// The board fills the window, so the page behind it mustn't scroll or bounce
export function useNoPageScroll() {
  useEffect(() => {
    const { overflow, overscrollBehavior } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.overscrollBehavior = overscrollBehavior;
    };
  }, []);
}
