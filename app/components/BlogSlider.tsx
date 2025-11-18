'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getBlogPosts, BlogPost } from '@/lib/firebase/firestore';

export default function BlogSlider() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const postsData = await getBlogPosts(10);
      setPosts(postsData);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
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

  const getMediaPreview = (post: BlogPost) => {
    if (post.mediaType === 'image' && post.mediaUrl) {
      return (
        <img
          src={post.mediaUrl}
          alt={post.title}
          className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
        />
      );
    }
    if (post.mediaType === 'video' && post.mediaUrl) {
      return (
        <div className="w-full h-40 sm:h-48 bg-black rounded-t-lg flex items-center justify-center">
          <video src={post.mediaUrl} className="w-full h-full object-contain" controls={false} />
        </div>
      );
    }
    return (
      <div className="w-full h-40 sm:h-48 flex items-center justify-center text-6xl rounded-t-lg transition-colors duration-200" style={{ backgroundColor: 'var(--accent)' }}>
        {getTypeIcon(post.type)}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="py-8 px-4">
        <div className="text-center transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>Loading posts...</div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="py-8 px-4">
        <div className="text-center transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>No posts available yet.</div>
      </div>
    );
  }

  // Display multiple cards in a grid on larger screens, slider on mobile
  const visiblePosts = posts.slice(0, 3); // Show 3 posts at a time on desktop

  return (
    <div className="py-6 sm:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
          Latest Updates & Articles
        </h2>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              onClick={() => router.push(`/blog/${post.id}`)}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-xl border-2"
              style={{ backgroundColor: 'var(--secondary)', borderColor: 'var(--accent)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {getMediaPreview(post)}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{getTypeIcon(post.type)}</span>
                  <span className="text-xs px-2 py-1 rounded transition-colors duration-200" style={{ backgroundColor: 'var(--accent)', color: 'var(--text-primary)' }}>
                    {post.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                  {post.title}
                </h3>
                <p className="text-sm line-clamp-3 mb-3 transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                  {post.description}
                </p>
                <div className="text-xs transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                  {post.createdAt?.toMillis ? new Date(post.createdAt.toMillis()).toLocaleDateString() : new Date(post.createdAt as any).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-lg">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="min-w-full"
                  onClick={() => router.push(`/blog/${post.id}`)}
                >
                  <div
                    className="mx-2 rounded-lg shadow-md overflow-hidden cursor-pointer border-2"
                    style={{ backgroundColor: 'var(--secondary)', borderColor: 'var(--accent)' }}
                  >
                    {getMediaPreview(post)}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{getTypeIcon(post.type)}</span>
                        <span className="text-xs px-2 py-1 rounded transition-colors duration-200" style={{ backgroundColor: 'var(--accent)', color: 'var(--text-primary)' }}>
                          {post.type}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold mb-2 line-clamp-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                        {post.title}
                      </h3>
                      <p className="text-sm line-clamp-2 mb-3 transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                        {post.description}
                      </p>
                      <div className="text-xs transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                        {post.createdAt?.toMillis ? new Date(post.createdAt.toMillis()).toLocaleDateString() : new Date(post.createdAt as any).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {posts.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full shadow-lg transition-all"
                style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full shadow-lg transition-all"
                style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
              >
                →
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {posts.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-6' : ''
                  }`}
                  style={{
                    backgroundColor: index === currentIndex ? 'var(--primary)' : 'var(--accent)'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



