'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ThemeToggle from '@/app/components/ThemeToggle';
import Footer from '@/app/components/Footer';
import { getBlogPost, BlogPost } from '@/lib/firebase/firestore';
import { useAuth } from '@/app/context/AuthContext';
import { useAuthPrompt } from '@/app/context/AuthPromptContext';

function BlogDetailContent() {
  const router = useRouter();
  const params = useParams();
  const { user, logout } = useAuth();
  const { openAuthPrompt } = useAuthPrompt();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const postId = params?.id as string;

  useEffect(() => {
    if (postId) {
      loadPost();
    }
  }, [postId]);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
        <div className="text-xl transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
        <div className="text-xl transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Post not found.</div>
      </div>
    );
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
              {user?.isOwner ? (
                <>
                  <div className="px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold" style={{ backgroundColor: 'var(--accent)', color: 'var(--text-primary)' }}>
                    👑 Owner
                  </div>
                  <button
                    onClick={() => router.push('/admin')}
                    className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                  >
                    Admin Panel
                  </button>
                  <button
                    onClick={logout}
                    className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200"
                    style={{ backgroundColor: 'var(--error)', color: '#ffffff' }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() =>
                    openAuthPrompt({
                      reason: 'Admin access is restricted. Please sign in as the owner.',
                    })
                  }
                  className="text-xs sm:text-sm px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md"
                  style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                >
                  Admin Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-6 sm:py-8 px-4">
        <div className="rounded-xl shadow-lg overflow-hidden transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
          {post.mediaType === 'image' && (post.mediaUrls?.length || post.mediaUrl) && (
            <div className="w-full">
              {/* Primary image */}
              <div className="w-full h-full">
                <img
                  src={selectedImage || post.mediaUrls?.[0] || post.mediaUrl!}
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-200 rounded-md"
                  style={{ maxHeight: 280, objectFit: 'contain', background: '#fff' }}
                />
              </div>
              {/* Thumbnails if multiple images */}
              {post.mediaUrls && post.mediaUrls.length > 1 && (
                <div className="flex gap-2 p-3 overflow-x-auto bg-black/5 mt-2">
                  {post.mediaUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`${post.title} ${index + 1}`}
                      onClick={() => setSelectedImage(url)}
                      className={`h-16 w-24 object-cover rounded border transition-all duration-200 cursor-pointer ${selectedImage === url ? 'ring-2 ring-primary border-primary' : 'hover:opacity-80'}`}
                      style={{ borderColor: selectedImage === url ? 'var(--primary)' : '' }}
                    />
                  ))}
                </div>
              )}
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

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
              {post.title}
            </h1>

            <p className="text-lg mb-6 transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
              {post.description}
            </p>

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

            <div className="prose max-w-none">
              <div
                className="text-base sm:text-lg leading-relaxed whitespace-pre-wrap transition-colors duration-200"
                style={{ color: 'var(--text-primary)' }}
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
              />
            </div>

            <div className="mt-8 pt-6 border-t transition-colors duration-200" style={{ borderColor: 'var(--accent)' }}>
              <p className="text-sm transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                <span className="font-semibold">Author:</span> {post.author}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function BlogDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
          <div className="text-xl transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Loading...</div>
        </div>
      }
    >
      <BlogDetailContent />
    </Suspense>
  );
}
