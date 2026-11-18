import { ImageResponse } from 'next/og';

// The picture shown when a page is shared on WhatsApp, Telegram, X or LinkedIn. Made once at
// build time, so it costs nothing per visit.
export const alt = 'Next Engineer: notes, previous year papers and important questions for AKTU students';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#1d4ed8',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div
            style={{
              width: 112,
              height: 112,
              borderRadius: 26,
              background: '#ffffff',
              color: '#1d4ed8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 56,
              fontWeight: 800,
            }}
          >
            NE
          </div>
          <div style={{ fontSize: 60, fontWeight: 800 }}>Next Engineer</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.15, maxWidth: 1000 }}>
            Notes, previous year papers and important questions
          </div>
          <div style={{ fontSize: 34, opacity: 0.85 }}>Every subject, semester by semester, for AKTU students</div>
        </div>
        <div style={{ fontSize: 28, opacity: 0.75 }}>www.aktuengineers.tech</div>
      </div>
    ),
    size
  );
}
