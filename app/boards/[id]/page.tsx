import type { Metadata } from 'next';
import BoardRoom from './BoardRoom';

// Boards are private to the people drawing on them
export const metadata: Metadata = {
  title: 'Study board',
  robots: { index: false, follow: false },
};

export default async function BoardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <BoardRoom id={id} />;
}
