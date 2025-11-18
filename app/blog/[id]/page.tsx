'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { getBlogPost, BlogPost } from '@/lib/firebase/firestore';
import ThemeToggle from '@/app/components/ThemeToggle';

export default function BlogDetailPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  const postId = params?.id as string;

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/');
      return;
    }

    if (postId) {
      loadPost();
    }
  }, [user, authLoading, postId, router]);

  const loadPost = async () => {
    try {
      setLoading(true);
      const postData = await getBlogPost(postId);
      if (postData) {
        setPost(postData);
      } else {
        router.push('/home');
      }
    } catch (error) {
      console.error('Error loading post:', error);
      router.push('/home');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (post?.fileUrl) {
      const link = document.createElement('a');
      link.href = post.fileUrl;
      link.download = post.fileName || 'download';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'notice':
        return '📢';
      case 'article':
        return '📰';
      default:
        return '📄';
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
        <div className="text-xl transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Loading...</div>
      </div>
    );
  }

  if (!user || !post) {
    return null;
  }

  return (
    <div className="min-h-screen transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
      <nav className="shadow-md transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 py-4 sm:h-16">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => router.push('/home')}
                className="text-sm sm:text-base hover:underline transition-all"
                style={{ color: 'var(--primary)' }}
              >
                ← Back to Home
              </button>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <ThemeToggle />
              <span className="text-sm sm:text-base transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                {user.name}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-6 sm:py-8 px-4">
        <div className="rounded-xl shadow-lg overflow-hidden transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
          {/* Media Section */}
          {post.mediaType === 'image' && post.mediaUrl && (
            <div className="w-full h-64 sm:h-80">
              <img
                src={post.mediaUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {post.mediaType === 'video' && post.mediaUrl && (
            <div className="w-full bg-black">
              <video
                src={post.mediaUrl}
                controls
                className="w-full h-auto max-h-96"
              />
            </div>
          )}

          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{getTypeIcon(post.type)}</span>
              <div>
                <span className="px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200" style={{ backgroundColor: 'var(--accent)', color: 'var(--text-primary)' }}>
                  {post.type}
                </span>
              </div>
              <div className="text-sm ml-auto transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                {post.createdAt?.toMillis ? new Date(post.createdAt.toMillis()).toLocaleDateString() : new Date(post.createdAt as any).toLocaleDateString()}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-lg mb-6 transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
              {post.description}
            </p>

            {/* Article URL Link */}
            {post.mediaType === 'article' && post.mediaUrl && (
              <div className="mb-6">
                <a
                  href={post.mediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                  style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                >
                  🔗 Read Full Article →
                </a>
              </div>
            )}

            {/* File Download Button */}
            {post.mediaType === 'file' && post.fileUrl && (
              <div className="mb-6">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                  style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                >
                  📥 Download {post.fileName || 'File'}
                </button>
              </div>
            )}

            {/* Content */}
            <div className="prose max-w-none">
              <div
                className="text-base sm:text-lg leading-relaxed whitespace-pre-wrap transition-colors duration-200"
                style={{ color: 'var(--text-primary)' }}
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
              />
            </div>

            {/* Author */}
            <div className="mt-8 pt-6 border-t transition-colors duration-200" style={{ borderColor: 'var(--accent)' }}>
              <p className="text-sm transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                <span className="font-semibold">Author:</span> {post.author}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



