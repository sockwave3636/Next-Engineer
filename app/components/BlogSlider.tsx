'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getBlogPosts, BlogPost } from '@/lib/firebase/firestore';
import { formatPostDate } from '@/lib/format';
import Icon, { IconName } from './Icon';

const TYPE_STYLES: Record<BlogPost['type'], { icon: IconName; tint: string; badge: string }> = {
  blog: { icon: 'description', tint: 'bg-brand-soft text-brand-ink', badge: 'badge-brand' },
  notice: { icon: 'campaign', tint: 'bg-sun-soft text-sun-ink', badge: 'badge-sun' },
  article: { icon: 'newspaper', tint: 'bg-sky-soft text-sky-ink', badge: 'badge-muted' },
};

function PostCard({ post }: { post: BlogPost }) {
  const style = TYPE_STYLES[post.type] || TYPE_STYLES.blog;
  const primaryImage = post.mediaUrls?.[0] || post.mediaUrl;
  // Fall back to the illustrated tile if the image can't load
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Link href={`/blog/${post.id}`} className="card card-hover group flex h-full flex-col overflow-hidden">
      {post.mediaType === 'image' && primaryImage && !imageFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={primaryImage}
          alt=""
          onError={() => setImageFailed(true)}
          className="aspect-[16/9] w-full bg-surface-muted object-cover"
        />
      ) : post.mediaType === 'video' && post.mediaUrl ? (
        <div className="aspect-[16/9] w-full bg-black">
          <video src={post.mediaUrl} className="h-full w-full object-contain" controls={false} muted />
        </div>
      ) : (
        <div className={`grid aspect-[16/9] w-full place-items-center ${style.tint}`}>
          <Icon name={style.icon} size={56} />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className={`badge ${style.badge}`}>{post.type}</span>
          <span className="font-mono text-xs text-ink-muted">{formatPostDate(post.createdAt)}</span>
        </div>
        <h3 className="mb-2 line-clamp-2 font-display text-lg font-semibold leading-snug text-ink group-hover:text-brand">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-ink-muted">{post.description}</p>
        <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-semibold text-brand">
          Read more <Icon name="arrow_forward" size={16} />
        </span>
      </div>
    </Link>
  );
}

export default function BlogSlider() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts(10)
      .then(setPosts)
      .catch((error) => console.error('Error loading posts:', error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="kicker">Notices and articles</span>
          <h2 className="section-title mt-1">Latest updates</h2>
        </div>
        <p className="max-w-sm text-sm text-ink-muted">Notices, exam news and study tips. Swipe for more on mobile.</p>
      </div>

      {loading ? (
        <div className="grid gap-5 md:grid-cols-3">
          {[0, 1, 2].map((key) => (
            <div key={key} className="card h-72 animate-pulse bg-surface-muted" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="card card-pad flex flex-col items-center text-center">
          <Icon name="newspaper" size={36} className="text-ink-faint" />
          <p className="mt-2 font-display font-semibold text-ink">Updates will show up here soon</p>
          <p className="text-sm text-ink-muted">Check back for notices and new articles.</p>
        </div>
      ) : (
        <>
          <div className="hidden gap-5 md:grid md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          {/* Mobile: native swipe with scroll snapping */}
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:scroll-px-6 sm:px-6 md:hidden">
            {posts.map((post) => (
              <div key={post.id} className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-0.5rem)]">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
