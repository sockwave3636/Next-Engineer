'use client';

import { useCallback, useEffect, useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import { BlogPost, deleteBlogPost, getAllBlogPosts, saveBlogPost } from '@/lib/firebase/firestore';
import { uploadBlogMedia } from '@/lib/firebase/storage';
import { refreshPublicPages } from '@/lib/catalog/admin-client';
import { formatPostDate } from '@/lib/format';
import { useAuth } from '@/app/context/AuthContext';
import { AdminModal, EmptyState, ErrorNote, FloatingError, SectionHeader, errorText } from './ui';

type MediaType = BlogPost['mediaType'];

const emptyForm = () => ({
  title: '',
  description: '',
  content: '',
  type: 'blog' as BlogPost['type'],
  mediaType: 'none' as MediaType,
  mediaUrl: '',
  published: true,
});

export default function PostsTab() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [files, setFiles] = useState<File[]>([]);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  const load = useCallback(async () => {
    try {
      setPosts(await getAllBlogPosts());
    } catch (err) {
      setError(errorText(err));
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    getAllBlogPosts()
      .then((list) => !cancelled && setPosts(list))
      .catch((err) => !cancelled && setError(errorText(err)));
    return () => {
      cancelled = true;
    };
  }, []);

  const openNew = () => {
    setEditingId(null);
    setForm(emptyForm());
    setFiles([]);
    setFormError('');
    setShowForm(true);
  };

  const openEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setForm({
      title: post.title,
      description: post.description,
      content: post.content,
      type: post.type,
      mediaType: post.mediaType,
      mediaUrl: post.mediaUrl || '',
      published: post.published,
    });
    setFiles([]);
    setFormError('');
    setShowForm(true);
  };

  const save = async () => {
    if (!form.title.trim() || !form.description.trim() || !form.content.trim()) {
      setFormError('Fill in the title, description and content.');
      return;
    }
    if (!user) return;
    setSaving(true);
    setFormError('');
    try {
      const postId = editingId || `post-${Date.now()}`;
      const existing = posts?.find((p) => p.id === editingId);
      let mediaUrl = form.mediaUrl;
      const mediaUrls: string[] = [];
      let fileUrl = '';
      let fileName = '';

      if (files.length > 0 && form.mediaType !== 'none' && form.mediaType !== 'article') {
        const base = Date.now();
        if (form.mediaType === 'image' || form.mediaType === 'video') {
          for (let i = 0; i < files.length; i++) {
            mediaUrls.push(await uploadBlogMedia(files[i], `blog/${postId}/${base + i}-${files[i].name}`));
          }
          mediaUrl = mediaUrls[0] ?? mediaUrl;
        } else if (form.mediaType === 'file') {
          fileUrl = await uploadBlogMedia(files[0], `blog/${postId}/${base}-${files[0].name}`);
          fileName = files[0].name;
        }
      }

      const postData: Omit<BlogPost, 'id'> = {
        title: form.title.trim(),
        description: form.description.trim(),
        content: form.content.trim(),
        type: form.type,
        mediaType: form.mediaType,
        author: user.name || 'Admin',
        createdAt: existing?.createdAt || Timestamp.now(),
        updatedAt: Timestamp.now(),
        published: form.published,
      };
      // Firestore rejects undefined, so only set optional fields that have values
      if (mediaUrl?.trim()) postData.mediaUrl = mediaUrl;
      if (mediaUrls.length > 0) postData.mediaUrls = mediaUrls;
      if (fileUrl) postData.fileUrl = fileUrl;
      if (fileName) postData.fileName = fileName;

      await saveBlogPost(postId, postData);
      await refreshPublicPages();
      setShowForm(false);
      await load();
    } catch (err) {
      setFormError(errorText(err));
    } finally {
      setSaving(false);
    }
  };

  const remove = async (post: BlogPost) => {
    if (!confirm(`Delete "${post.title}"?`)) return;
    try {
      await deleteBlogPost(post.id);
      await refreshPublicPages();
      await load();
    } catch (err) {
      setError(errorText(err));
    }
  };

  return (
    <section>
      <SectionHeader
        title="Blog posts and notices"
        description="Published posts appear under Latest updates on the home page."
        action={<button onClick={openNew} className="btn btn-primary">+ New post</button>}
      />
      <FloatingError message={error} onDismiss={() => setError('')} />

      {posts === null ? (
        <p className="text-ink-muted">Loading posts…</p>
      ) : posts.length === 0 ? (
        <EmptyState icon="📰" title="No posts yet" text="Write your first blog post, notice, or article." />
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-2xl" aria-hidden="true">
                {post.type === 'blog' ? '📝' : post.type === 'notice' ? '📢' : '📰'}
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-1.5">
                  <span className="badge badge-brand capitalize">{post.type}</span>
                  {!post.published && <span className="badge badge-sun">Draft</span>}
                  <span className="text-xs font-semibold text-ink-muted">
                    {formatPostDate(post.createdAt)} · Media: {post.mediaType}
                  </span>
                </div>
                <h3 className="truncate font-extrabold text-ink">{post.title}</h3>
                <p className="line-clamp-1 text-sm text-ink-muted">{post.description}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button onClick={() => openEdit(post)} className="btn btn-secondary btn-sm">Edit</button>
                <button onClick={() => remove(post)} className="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <AdminModal title={editingId ? 'Edit post' : 'New post'} onClose={() => setShowForm(false)} wide>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="blog-type" className="label">Type</label>
                <select
                  id="blog-type"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value as BlogPost['type'] })}
                  className="input"
                >
                  <option value="blog">Blog</option>
                  <option value="notice">Notice</option>
                  <option value="article">Article</option>
                </select>
              </div>
              <div>
                <label htmlFor="blog-media-type" className="label">Media</label>
                <select
                  id="blog-media-type"
                  value={form.mediaType}
                  onChange={(e) => {
                    setForm({ ...form, mediaType: e.target.value as MediaType });
                    setFiles([]);
                  }}
                  className="input"
                >
                  <option value="none">None</option>
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                  <option value="file">File</option>
                  <option value="article">Article (URL)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="blog-title" className="label">Title</label>
              <input id="blog-title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="input" autoFocus />
            </div>
            <div>
              <label htmlFor="blog-description" className="label">Short description</label>
              <textarea
                id="blog-description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="input"
                rows={2}
                placeholder="One or two sentences shown on the card"
              />
            </div>
            <div>
              <label htmlFor="blog-content" className="label">Content</label>
              <textarea
                id="blog-content"
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                className="input"
                rows={8}
                placeholder="Plain text; line breaks are kept"
              />
            </div>

            {form.mediaType === 'article' && (
              <div>
                <label htmlFor="blog-article-url" className="label">Article URL</label>
                <input
                  id="blog-article-url"
                  type="url"
                  value={form.mediaUrl}
                  onChange={(e) => setForm({ ...form, mediaUrl: e.target.value })}
                  className="input"
                  placeholder="https://example.com/article"
                />
              </div>
            )}

            {(form.mediaType === 'image' || form.mediaType === 'video' || form.mediaType === 'file') && (
              <div>
                <label htmlFor="blog-media-files" className="label">
                  Upload {form.mediaType === 'image' ? 'images' : form.mediaType === 'video' ? 'videos' : 'a file'}
                </label>
                <input
                  id="blog-media-files"
                  type="file"
                  accept={form.mediaType === 'image' ? 'image/*' : form.mediaType === 'video' ? 'video/*' : '*'}
                  multiple={form.mediaType === 'image' || form.mediaType === 'video'}
                  onChange={(e) => setFiles(e.target.files ? Array.from(e.target.files) : [])}
                  className="input file:mr-3 file:rounded-xl file:border-0 file:bg-brand-soft file:px-3 file:py-1.5 file:font-bold file:text-brand-ink"
                />
                {files.length > 0 && <p className="mt-1.5 text-xs text-ink-muted">{files.map((f) => f.name).join(', ')}</p>}
              </div>
            )}

            <label className="flex items-center gap-2 text-sm font-bold text-ink">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => setForm({ ...form, published: e.target.checked })}
                className="h-4 w-4 accent-brand"
              />
              Publish immediately
            </label>

            <ErrorNote message={formError} />
            <div className="flex gap-2 pt-2">
              <button type="button" onClick={save} disabled={saving} className="btn btn-primary flex-1">
                {saving ? 'Saving…' : editingId ? 'Update post' : 'Save post'}
              </button>
              <button onClick={() => setShowForm(false)} className="btn btn-secondary">Cancel</button>
            </div>
          </div>
        </AdminModal>
      )}
    </section>
  );
}
