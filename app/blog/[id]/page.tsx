import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageShell from '@/app/components/PageShell';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import PostGallery from './PostGallery';
import Icon, { IconName } from '@/app/components/Icon';
import { getPost } from '@/lib/posts-server';
import { formatPostDate } from '@/lib/format';

export const revalidate = 3600;

type Params = Promise<{ id: string }>;

const TYPE_STYLES: Record<string, { icon: IconName; badge: string }> = {
  blog: { icon: 'edit_note', badge: 'badge-brand' },
  notice: { icon: 'campaign', badge: 'badge-sun' },
  article: { icon: 'newspaper', badge: 'badge-muted' },
};

async function loadPost(params: Params) {
  const post = await getPost((await params).id);
  if (!post || !post.published) notFound();
  return post;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = await loadPost(params);
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.id}` },
    openGraph: { title: post.title, description: post.description, type: 'article' },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const post = await loadPost(params);
  const style = TYPE_STYLES[post.type] || TYPE_STYLES.blog;
  const images = post.mediaUrls.length ? post.mediaUrls : post.mediaUrl ? [post.mediaUrl] : [];

  return (
    <PageShell>
      <div className="container-page max-w-3xl py-10">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Updates', href: '/#updates' }, { label: post.title }]} />

        <article className="card overflow-hidden">
          {post.mediaType === 'image' && images.length > 0 && <PostGallery images={images} title={post.title} />}

          {post.mediaType === 'video' && post.mediaUrl && (
            <div className="bg-black">
              <video src={post.mediaUrl} controls className="max-h-[420px] w-full" />
            </div>
          )}

          <div className="p-6 sm:p-10">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className={`badge capitalize ${style.badge}`}>
                <Icon name={style.icon} size={14} /> {post.type}
              </span>
              <span className="text-sm font-semibold text-ink-muted">{formatPostDate(post.createdAt)}</span>
            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">{post.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">{post.description}</p>

            {((post.mediaType === 'article' && post.mediaUrl) || (post.mediaType === 'file' && post.fileUrl)) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {post.mediaType === 'article' && post.mediaUrl && (
                  <a href={post.mediaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Read the full article <span aria-hidden="true">→</span>
                  </a>
                )}
                {post.mediaType === 'file' && post.fileUrl && (
                  <a href={post.fileUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Download {post.fileName || 'file'}
                  </a>
                )}
              </div>
            )}

            {/* Plain text, not HTML: post content can't inject scripts into the page */}
            <div className="mt-8 whitespace-pre-wrap border-t border-line pt-8 text-base leading-relaxed text-ink sm:text-lg">
              {post.content}
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-2xl bg-surface-muted p-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-black text-on-brand" aria-hidden="true">
                {(post.author || 'N').charAt(0).toUpperCase()}
              </span>
              <div>
                <p className="text-xs font-semibold text-ink-muted">Written by</p>
                <p className="font-extrabold text-ink">{post.author}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </PageShell>
  );
}
