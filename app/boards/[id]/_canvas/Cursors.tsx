'use client';

import { memo } from 'react';
import { shallow, useOther, useOthersConnectionIds, useOthersMapped } from '@liveblocks/react/suspense';
import { colorToCss, connectionIdToColor } from '@/lib/boards/geometry';
import { Path } from './Layers';

// Everyone else's cursor with their name, and the strokes they're drawing right now
export const OthersPresence = memo(function OthersPresence() {
  const ids = useOthersConnectionIds();
  const drafts = useOthersMapped((other) => ({ pencilDraft: other.presence.pencilDraft, penColor: other.presence.penColor }), shallow);

  return (
    <>
      {drafts.map(([connectionId, { pencilDraft, penColor }]) =>
        pencilDraft && pencilDraft.length > 0 ? (
          <Path key={connectionId} x={0} y={0} points={pencilDraft} fill={penColor ? colorToCss(penColor) : '#111827'} />
        ) : null
      )}
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
});

const Cursor = memo(function Cursor({ connectionId }: { connectionId: number }) {
  const name = useOther(connectionId, (user) => user.info?.name) || 'Student';
  const cursor = useOther(connectionId, (user) => user.presence.cursor);
  if (!cursor) return null;
  const color = connectionIdToColor(connectionId);

  return (
    <g className="pointer-events-none" style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}>
      <path d="M0 0 L0 17 L4.5 13 L7.5 20 L10.5 18.7 L7.5 12 L13 12 Z" fill={color} stroke="#ffffff" strokeWidth={1.2} strokeLinejoin="round" />
      <foreignObject x={14} y={14} width={name.length * 8 + 24} height={24}>
        <span className="inline-block rounded-md px-1.5 py-0.5 text-xs font-semibold text-white" style={{ backgroundColor: color }}>
          {name}
        </span>
      </foreignObject>
    </g>
  );
});
