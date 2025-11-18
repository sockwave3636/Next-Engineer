'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { getCourses, saveCourse, deleteCourse, Course, getSubject, saveSubject, deleteSubject, getAllBlogPosts, saveBlogPost, deleteBlogPost, BlogPost } from '@/lib/firebase/firestore';
import { uploadNoteFile, getFileSize, uploadBlogMedia } from '@/lib/firebase/storage';
import { Timestamp } from 'firebase/firestore';
import ThemeToggle from '../components/ThemeToggle';

export default function AdminPanel() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [courses, setCourses] = useState<Record<string, Course>>({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'courses' | 'subjects' | 'blogs'>('courses');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedSemester, setSelectedSemester] = useState<string>('');
  const [editingSubject, setEditingSubject] = useState<string | null>(null);
  
  // Form states for modals
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [showYearForm, setShowYearForm] = useState(false);
  const [showSemesterForm, setShowSemesterForm] = useState(false);
  const [showSubjectForm, setShowSubjectForm] = useState(false);
  const [showFileNamesForm, setShowFileNamesForm] = useState(false);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<string | null>(null);
  
  const [courseFormData, setCourseFormData] = useState({ name: '' });
  const [yearFormData, setYearFormData] = useState({ name: '', courseId: '' });
  const [semesterFormData, setSemesterFormData] = useState({ name: '', courseId: '', yearId: '' });
  const [subjectFormData, setSubjectFormData] = useState({ name: '', code: '', description: '' });
  const [fileNamesFormData, setFileNamesFormData] = useState<{ files: File[]; names: string[] }>({ files: [], names: [] });
  
  // Blog states
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogFormData, setBlogFormData] = useState({
    title: '',
    description: '',
    content: '',
    type: 'blog' as 'blog' | 'notice' | 'article',
    mediaType: 'none' as 'video' | 'article' | 'image' | 'file' | 'none',
    mediaUrl: '',
    published: true
  });
  const [blogMediaFile, setBlogMediaFile] = useState<File | null>(null);
  const [uploadingBlog, setUploadingBlog] = useState(false);

  useEffect(() => {
    if (!authLoading && (!user || !user.isOwner)) {
      router.push('/home');
      return;
    }

    if (user?.isOwner) {
      loadCourses();
      if (activeTab === 'blogs') {
        loadBlogPosts();
      }
    }
  }, [user, authLoading, router, activeTab]);

  const loadCourses = async () => {
    try {
      const coursesData = await getCourses();
      setCourses(coursesData);
    } catch (error) {
      console.error('Error loading courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadBlogPosts = async () => {
    try {
      const posts = await getAllBlogPosts();
      setBlogPosts(posts);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    }
  };

  const handleAddCourse = async () => {
    if (!courseFormData.name.trim()) {
      alert('Please enter a course name');
      return;
    }

    try {
      // Auto-generate course ID from course name (lowercase, replace spaces with hyphens)
      const courseId = courseFormData.name.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      
      await saveCourse(courseId, {
        name: courseFormData.name.trim(),
        years: {}
      });
      await loadCourses();
      setShowCourseForm(false);
      setCourseFormData({ name: '' });
    } catch (error) {
      alert('Error adding course');
      console.error(error);
    }
  };

  const handleAddYear = async () => {
    if (!yearFormData.name.trim() || !yearFormData.courseId) {
      alert('Please enter a year name');
      return;
    }

    try {
      const course = courses[yearFormData.courseId];
      if (!course.years) course.years = {};
      
      // Auto-generate year ID from year name (extract number or use index)
      const yearMatch = yearFormData.name.match(/\d+/);
      const yearId = yearMatch ? yearMatch[0] : String(Object.keys(course.years || {}).length + 1);
      
      course.years[yearId] = {
        id: yearId,
        name: yearFormData.name.trim(),
        semesters: {}
      };
      await saveCourse(yearFormData.courseId, course);
      await loadCourses();
      setShowYearForm(false);
      setYearFormData({ name: '', courseId: '' });
    } catch (error) {
      alert('Error adding year');
      console.error(error);
    }
  };

  const openYearForm = (courseId: string) => {
    setYearFormData({ name: '', courseId });
    setShowYearForm(true);
  };

  const handleAddSemester = async () => {
    if (!semesterFormData.name.trim() || !semesterFormData.courseId || !semesterFormData.yearId) {
      alert('Please enter a semester name');
      return;
    }

    try {
      const course = courses[semesterFormData.courseId];
      if (!course.years[semesterFormData.yearId].semesters) course.years[semesterFormData.yearId].semesters = {};
      
      // Auto-generate semester ID from semester name (extract number or use index)
      const semesterMatch = semesterFormData.name.match(/\d+/);
      const semesterId = semesterMatch ? semesterMatch[0] : String(Object.keys(course.years[semesterFormData.yearId].semesters || {}).length + 1);
      
      course.years[semesterFormData.yearId].semesters[semesterId] = {
        id: semesterId,
        name: semesterFormData.name.trim(),
        subjects: {}
      };
      await saveCourse(semesterFormData.courseId, course);
      await loadCourses();
      setShowSemesterForm(false);
      setSemesterFormData({ name: '', courseId: '', yearId: '' });
    } catch (error) {
      alert('Error adding semester');
      console.error(error);
    }
  };

  const openSemesterForm = (courseId: string, yearId: string) => {
    setSemesterFormData({ name: '', courseId, yearId });
    setShowSemesterForm(true);
  };

  const handleAddSubject = async () => {
    if (!selectedCourse || !selectedYear || !selectedSemester) {
      alert('Please select course, year, and semester first');
      return;
    }

    if (!subjectFormData.name.trim() || !subjectFormData.code.trim() || !subjectFormData.description.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Use subject code (lowercased) as the subject ID
      const subjectId = subjectFormData.code.toLowerCase().trim().replace(/\s+/g, '-');
      
      await saveSubject(selectedCourse, selectedYear, selectedSemester, subjectId, {
        name: subjectFormData.name.trim(),
        code: subjectFormData.code.toUpperCase().trim(), // Store code in uppercase
        description: subjectFormData.description.trim(),
        links: [],
        notes: []
      });
      await loadCourses();
      setEditingSubject(subjectId);
      setActiveTab('subjects');
      setShowSubjectForm(false);
      setSubjectFormData({ name: '', code: '', description: '' });
    } catch (error) {
      alert('Error adding subject');
      console.error(error);
    }
  };

  const handleSaveSubject = async () => {
    if (!editingSubject || !selectedCourse || !selectedYear || !selectedSemester) return;

    const subject = await getSubject(selectedCourse, selectedYear, selectedSemester, editingSubject);
    if (!subject) return;

    // This will be handled by the subject editor component
    await loadCourses();
  };

  const handleDelete = async (type: string, courseId: string, yearId?: string, semesterId?: string, subjectId?: string) => {
    if (!confirm('Are you sure you want to delete this?')) return;

    try {
      if (type === 'course') {
        await deleteCourse(courseId);
      } else if (type === 'subject' && yearId && semesterId && subjectId) {
        await deleteSubject(courseId, yearId, semesterId, subjectId);
      }
      await loadCourses();
    } catch (error) {
      alert('Error deleting');
      console.error(error);
    }
  };

  const handleAddBlogPost = async () => {
    console.log('handleAddBlogPost called', { blogFormData, blogMediaFile });
    
    if (!blogFormData.title.trim() || !blogFormData.description.trim() || !blogFormData.content.trim()) {
      alert('Please fill in all required fields (Title, Description, and Content)');
      return;
    }

    if (!user) {
      alert('You must be logged in to create a blog post');
      return;
    }

    setUploadingBlog(true);
    try {
      const postId = editingBlog || `post-${Date.now()}`;
      let mediaUrl = blogFormData.mediaUrl;
      let fileUrl = '';
      let fileName = '';

      // Upload media file if provided
      if (blogMediaFile && blogFormData.mediaType !== 'none' && blogFormData.mediaType !== 'article') {
        try {
          const timestamp = Date.now();
          const path = `blog/${postId}/${timestamp}-${blogMediaFile.name}`;
          console.log('Uploading media file:', { path, mediaType: blogFormData.mediaType });
          
          if (blogFormData.mediaType === 'image' || blogFormData.mediaType === 'video') {
            mediaUrl = await uploadBlogMedia(blogMediaFile, path);
            console.log('Media uploaded, URL:', mediaUrl);
          } else if (blogFormData.mediaType === 'file') {
            fileUrl = await uploadBlogMedia(blogMediaFile, path);
            fileName = blogMediaFile.name;
            console.log('File uploaded, URL:', fileUrl);
          }
        } catch (uploadError) {
          console.error('Error uploading media:', uploadError);
          alert(`Error uploading ${blogFormData.mediaType}: ${uploadError instanceof Error ? uploadError.message : 'Unknown error'}`);
          setUploadingBlog(false);
          return;
        }
      }

      // Build postData with required fields
      const postData: Omit<BlogPost, 'id'> = {
        title: blogFormData.title.trim(),
        description: blogFormData.description.trim(),
        content: blogFormData.content.trim(),
        type: blogFormData.type,
        mediaType: blogFormData.mediaType,
        author: user.name || 'Admin',
        createdAt: editingBlog ? (blogPosts.find(p => p.id === editingBlog)?.createdAt || Timestamp.now()) : Timestamp.now(),
        updatedAt: Timestamp.now(),
        published: blogFormData.published
      };

      // Only include optional fields if they have actual values (not undefined or empty strings)
      // Firestore doesn't allow undefined values, so we only add fields that have values
      if (mediaUrl && mediaUrl.trim()) {
        postData.mediaUrl = mediaUrl;
      }
      if (fileUrl && fileUrl.trim()) {
        postData.fileUrl = fileUrl;
      }
      if (fileName && fileName.trim()) {
        postData.fileName = fileName;
      }

      console.log('Saving blog post:', { postId, postData });
      await saveBlogPost(postId, postData);
      console.log('Blog post saved successfully');
      
      await loadBlogPosts();
      setShowBlogForm(false);
      setBlogFormData({
        title: '',
        description: '',
        content: '',
        type: 'blog',
        mediaType: 'none',
        mediaUrl: '',
        published: true
      });
      setBlogMediaFile(null);
      setEditingBlog(null);
      alert('Blog post saved successfully!');
    } catch (error) {
      console.error('Error saving blog post:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`Error saving blog post: ${errorMessage}\n\nCheck the browser console for more details.`);
    } finally {
      setUploadingBlog(false);
    }
  };

  const handleEditBlog = (post: BlogPost) => {
    setEditingBlog(post.id);
    setBlogFormData({
      title: post.title,
      description: post.description,
      content: post.content,
      type: post.type,
      mediaType: post.mediaType,
      mediaUrl: post.mediaUrl || '',
      published: post.published
    });
    setShowBlogForm(true);
  };

  const handleDeleteBlog = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      await deleteBlogPost(postId);
      await loadBlogPosts();
    } catch (error) {
      alert('Error deleting blog post');
      console.error(error);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
        <div className="text-xl transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Loading...</div>
      </div>
    );
  }

  if (!user?.isOwner) {
    return null;
  }

  return (
    <div className="min-h-screen transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
      <nav className="shadow-md transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 py-4 sm:h-16">
            <h1 className="text-xl sm:text-2xl font-bold transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
              Admin Panel
            </h1>
            <div className="flex items-center gap-2 sm:gap-4">
              <ThemeToggle />
              <button
                onClick={() => router.push('/home')}
                className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200"
                style={{ backgroundColor: 'var(--text-secondary)', color: '#ffffff' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:py-8 px-4">
        <div className="rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
          <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                activeTab === 'courses' ? 'shadow-md' : ''
              }`}
              style={activeTab === 'courses'
                ? { backgroundColor: 'var(--primary)', color: '#ffffff' }
                : { backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }
              }
            >
              Manage Courses
            </button>
            <button
              onClick={() => setActiveTab('subjects')}
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                activeTab === 'subjects' ? 'shadow-md' : ''
              }`}
              style={activeTab === 'subjects'
                ? { backgroundColor: 'var(--primary)', color: '#ffffff' }
                : { backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }
              }
            >
              Manage Subjects
            </button>
            <button
              onClick={() => {
                setActiveTab('blogs');
                loadBlogPosts();
              }}
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                activeTab === 'blogs' ? 'shadow-md' : ''
              }`}
              style={activeTab === 'blogs'
                ? { backgroundColor: 'var(--primary)', color: '#ffffff' }
                : { backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }
              }
            >
              Manage Blogs/Notices
            </button>
          </div>

          {activeTab === 'courses' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4">
                <h2 className="text-lg sm:text-xl font-bold" style={{ color: '#1a1a1a' }}>Courses</h2>
                <button
                  onClick={() => setShowCourseForm(true)}
                  className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                >
                  + Add Course
                </button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {Object.entries(courses).map(([courseId, course]) => (
                  <div key={courseId} className="border-2 rounded-lg p-3 sm:p-4 transition-colors duration-200" style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--background)' }}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-2">
                      <h3 className="text-base sm:text-lg font-semibold transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                        {course.name} ({courseId})
                      </h3>
                      <button
                        onClick={() => handleDelete('course', courseId)}
                        className="text-xs sm:text-sm px-3 py-1 rounded transition-all duration-200"
                        style={{ backgroundColor: '#dc3545', color: '#ffffff' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--error)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
                      >
                        Delete
                      </button>
                    </div>

                    {Object.entries(course.years || {}).map(([yearId, year]) => (
                      <div key={yearId} className="ml-2 sm:ml-4 mt-2 border-l-2 pl-3 sm:pl-4 transition-colors duration-200" style={{ borderColor: 'var(--primary)' }}>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-2">
                          <h4 className="font-medium text-sm sm:text-base transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                            {year.name} ({yearId})
                          </h4>
                          <button
                            onClick={() => openSemesterForm(courseId, yearId)}
                            className="text-xs sm:text-sm px-3 py-1 rounded transition-all duration-200"
                            style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                          >
                            + Add Semester
                          </button>
                        </div>

                        {Object.entries(year.semesters || {}).map(([semesterId, semester]) => (
                          <div key={semesterId} className="ml-2 sm:ml-4 mt-2">
                            <div className="flex justify-between items-center">
                              <span className="text-xs sm:text-sm" style={{ color: '#4a4a4a' }}>
                                {semester.name} ({semesterId}) - {Object.keys(semester.subjects || {}).length} subjects
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}

                    <button
                      onClick={() => openYearForm(courseId)}
                      className="mt-2 ml-2 sm:ml-4 text-xs sm:text-sm px-3 py-1 rounded transition-all duration-200"
                      style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                    >
                      + Add Year
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'subjects' && (
            <SubjectEditor
              courses={courses}
              selectedCourse={selectedCourse}
              selectedYear={selectedYear}
              selectedSemester={selectedSemester}
              onCourseChange={setSelectedCourse}
              onYearChange={setSelectedYear}
              onSemesterChange={setSelectedSemester}
              onSubjectAdd={() => setShowSubjectForm(true)}
              onSave={handleSaveSubject}
              onDelete={handleDelete}
            />
          )}

          {activeTab === 'blogs' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4">
                <h2 className="text-lg sm:text-xl font-bold" style={{ color: '#1a1a1a' }}>Blog Posts & Notices</h2>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Add blog button clicked');
                    setEditingBlog(null);
                    setBlogFormData({
                      title: '',
                      description: '',
                      content: '',
                      type: 'blog',
                      mediaType: 'none',
                      mediaUrl: '',
                      published: true
                    });
                    setBlogMediaFile(null);
                    setShowBlogForm(true);
                    console.log('showBlogForm set to true');
                  }}
                  className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                >
                  + Add Blog/Notice/Article
                </button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {blogPosts.length === 0 ? (
                  <div className="text-center py-8 transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                    No blog posts yet. Click "Add Blog/Notice/Article" to create one.
                  </div>
                ) : (
                  blogPosts.map((post) => (
                    <div key={post.id} className="border-2 rounded-lg p-3 sm:p-4 transition-colors duration-200" style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--background)' }}>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">
                              {post.type === 'blog' ? '📝' : post.type === 'notice' ? '📢' : '📰'}
                            </span>
                            <span className="px-2 py-1 rounded text-xs transition-colors duration-200" style={{ backgroundColor: 'var(--accent)', color: 'var(--text-primary)' }}>
                              {post.type}
                            </span>
                            {!post.published && (
                              <span className="px-2 py-1 rounded text-xs bg-yellow-200 text-yellow-800">
                                Draft
                              </span>
                            )}
                          </div>
                          <h3 className="text-base sm:text-lg font-semibold" style={{ color: '#1a1a1a' }}>
                            {post.title}
                          </h3>
                          <p className="text-xs sm:text-sm mt-1 line-clamp-2" style={{ color: '#4a4a4a' }}>
                            {post.description}
                          </p>
                          <div className="text-xs mt-2" style={{ color: '#4a4a4a' }}>
                            Media: {post.mediaType} | Created: {new Date(post.createdAt?.toMillis?.() || post.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditBlog(post)}
                            className="text-xs sm:text-sm px-3 py-1 rounded transition-all duration-200"
                            style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(post.id)}
                            className="text-xs sm:text-sm px-3 py-1 rounded transition-all duration-200"
                            style={{ backgroundColor: '#dc3545', color: '#ffffff' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--error)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Course Form Modal */}
        {showCourseForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
              <h3 className="text-xl font-bold mb-4 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Add Course</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Course Name</label>
                  <input
                    type="text"
                    value={courseFormData.name}
                    onChange={(e) => setCourseFormData({ name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: 'var(--accent)',
                      color: '#1a1a1a'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                    placeholder="e.g., Computer Science"
                    autoFocus
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleAddCourse}
                    className="flex-1 px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
                    style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                  >
                    Add Course
                  </button>
                  <button
                    onClick={() => {
                      setShowCourseForm(false);
                      setCourseFormData({ name: '' });
                    }}
                    className="px-4 py-2 rounded-lg transition-all duration-200"
                    style={{ backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--background)'}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year Form Modal */}
        {showYearForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="rounded-lg p-6 max-w-md w-full mx-4 transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Add Year</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Year Name</label>
                  <input
                    type="text"
                    value={yearFormData.name}
                    onChange={(e) => setYearFormData({ ...yearFormData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: 'var(--accent)',
                      color: '#1a1a1a'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                    placeholder="e.g., First Year, Year 1"
                    autoFocus
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleAddYear}
                    className="flex-1 px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
                    style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                  >
                    Add Year
                  </button>
                  <button
                    onClick={() => {
                      setShowYearForm(false);
                      setYearFormData({ name: '', courseId: '' });
                    }}
                    className="px-4 py-2 rounded-lg transition-all duration-200"
                    style={{ backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--background)'}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Semester Form Modal */}
        {showSemesterForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="rounded-lg p-6 max-w-md w-full mx-4 transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Add Semester</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Semester Name</label>
                  <input
                    type="text"
                    value={semesterFormData.name}
                    onChange={(e) => setSemesterFormData({ ...semesterFormData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: 'var(--accent)',
                      color: '#1a1a1a'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                    placeholder="e.g., Semester 1, First Semester"
                    autoFocus
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleAddSemester}
                    className="flex-1 px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
                    style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                  >
                    Add Semester
                  </button>
                  <button
                    onClick={() => {
                      setShowSemesterForm(false);
                      setSemesterFormData({ name: '', courseId: '', yearId: '' });
                    }}
                    className="px-4 py-2 rounded-lg transition-all duration-200"
                    style={{ backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--background)'}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Subject Form Modal */}
        {showSubjectForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Add Subject</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Subject Name</label>
                  <input
                    type="text"
                    value={subjectFormData.name}
                    onChange={(e) => setSubjectFormData({ ...subjectFormData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: 'var(--accent)',
                      color: '#1a1a1a'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                    placeholder="e.g., Mathematics I"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Subject Code</label>
                  <input
                    type="text"
                    value={subjectFormData.code}
                    onChange={(e) => setSubjectFormData({ ...subjectFormData, code: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: 'var(--accent)',
                      color: '#1a1a1a'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                    placeholder="e.g., CS101, MATH201"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Description</label>
                  <textarea
                    value={subjectFormData.description}
                    onChange={(e) => setSubjectFormData({ ...subjectFormData, description: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: 'var(--accent)',
                      color: '#1a1a1a'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                    rows={4}
                    placeholder="Enter subject description..."
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleAddSubject}
                    className="flex-1 px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
                    style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                  >
                    Add Subject
                  </button>
                  <button
                    onClick={() => {
                      setShowSubjectForm(false);
                      setSubjectFormData({ name: '', code: '', description: '' });
                    }}
                    className="px-4 py-2 rounded-lg transition-all duration-200"
                    style={{ backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--background)'}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Form Modal */}
        {showBlogForm && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            style={{ zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                console.log('Closing modal by clicking backdrop');
                setShowBlogForm(false);
              }
            }}
          >
            <div 
              className="rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" 
              style={{ backgroundColor: 'var(--secondary)', zIndex: 10000 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                  {editingBlog ? 'Edit' : 'Add'} Blog/Notice/Article
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setShowBlogForm(false);
                    setBlogFormData({
                      title: '',
                      description: '',
                      content: '',
                      type: 'blog',
                      mediaType: 'none',
                      mediaUrl: '',
                      published: true
                    });
                    setBlogMediaFile(null);
                    setEditingBlog(null);
                  }}
                  className="text-2xl font-bold hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--text-primary)' }}
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Type *</label>
                  <select
                    value={blogFormData.type}
                    onChange={(e) => setBlogFormData({ ...blogFormData, type: e.target.value as 'blog' | 'notice' | 'article' })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all"
                    style={{ backgroundColor: 'var(--background)', borderColor: 'var(--accent)', color: 'var(--text-primary)' }}
                  >
                    <option value="blog">Blog</option>
                    <option value="notice">Notice</option>
                    <option value="article">Article</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Title *</label>
                  <input
                    type="text"
                    value={blogFormData.title}
                    onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ backgroundColor: 'var(--background)', borderColor: 'var(--accent)', color: 'var(--text-primary)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                    placeholder="Enter title..."
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Description *</label>
                  <textarea
                    value={blogFormData.description}
                    onChange={(e) => setBlogFormData({ ...blogFormData, description: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ backgroundColor: 'var(--background)', borderColor: 'var(--accent)', color: 'var(--text-primary)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                    rows={3}
                    placeholder="Enter short description..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Content *</label>
                  <textarea
                    value={blogFormData.content}
                    onChange={(e) => setBlogFormData({ ...blogFormData, content: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ backgroundColor: 'var(--background)', borderColor: 'var(--accent)', color: 'var(--text-primary)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                    rows={8}
                    placeholder="Enter full content..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Media Type *</label>
                  <select
                    value={blogFormData.mediaType}
                    onChange={(e) => {
                      setBlogFormData({ ...blogFormData, mediaType: e.target.value as any });
                      setBlogMediaFile(null);
                    }}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all"
                    style={{ backgroundColor: 'var(--background)', borderColor: 'var(--accent)', color: 'var(--text-primary)' }}
                  >
                    <option value="none">None</option>
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                    <option value="file">File</option>
                    <option value="article">Article (URL)</option>
                  </select>
                </div>

                {blogFormData.mediaType === 'article' && (
                  <div>
                    <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Article URL</label>
                    <input
                      type="url"
                      value={blogFormData.mediaUrl}
                      onChange={(e) => setBlogFormData({ ...blogFormData, mediaUrl: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                      style={{ backgroundColor: 'var(--background)', borderColor: 'var(--accent)', color: 'var(--text-primary)' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                      placeholder="https://example.com/article"
                    />
                  </div>
                )}

                {(blogFormData.mediaType === 'image' || blogFormData.mediaType === 'video' || blogFormData.mediaType === 'file') && (
                  <div>
                    <label className="block text-sm font-medium mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                      Upload {blogFormData.mediaType === 'image' ? 'Image' : blogFormData.mediaType === 'video' ? 'Video' : 'File'}
                    </label>
                    <input
                      type="file"
                      accept={blogFormData.mediaType === 'image' ? 'image/*' : blogFormData.mediaType === 'video' ? 'video/*' : '*'}
                      onChange={(e) => setBlogMediaFile(e.target.files?.[0] || null)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all"
                      style={{ backgroundColor: 'var(--background)', borderColor: 'var(--accent)' }}
                    />
                    {blogMediaFile && (
                    <p className="text-xs mt-1 transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                      Selected: {blogMediaFile.name} ({(blogMediaFile.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="published"
                    checked={blogFormData.published}
                    onChange={(e) => setBlogFormData({ ...blogFormData, published: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <label htmlFor="published" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                    Publish immediately
                  </label>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Save Post button clicked');
                      handleAddBlogPost();
                    }}
                    disabled={uploadingBlog}
                    className="flex-1 px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: uploadingBlog ? 'var(--accent)' : 'var(--primary)', color: '#ffffff' }}
                    onMouseEnter={(e) => {
                      if (!uploadingBlog) e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
                    }}
                    onMouseLeave={(e) => {
                      if (!uploadingBlog) e.currentTarget.style.backgroundColor = 'var(--primary)';
                    }}
                  >
                    {uploadingBlog ? 'Saving...' : editingBlog ? 'Update' : 'Save'} Post
                  </button>
                  <button
                    onClick={() => {
                      setShowBlogForm(false);
                      setBlogFormData({
                        title: '',
                        description: '',
                        content: '',
                        type: 'blog',
                        mediaType: 'none',
                        mediaUrl: '',
                        published: true
                      });
                      setBlogMediaFile(null);
                      setEditingBlog(null);
                    }}
                    className="px-4 py-2 rounded-lg transition-all duration-200"
                    style={{ backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--background)'}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

interface SubjectEditorProps {
  courses: Record<string, Course>;
  selectedCourse: string;
  selectedYear: string;
  selectedSemester: string;
  onCourseChange: (course: string) => void;
  onYearChange: (year: string) => void;
  onSemesterChange: (semester: string) => void;
  onSubjectAdd: () => void;
  onSave: () => void;
  onDelete: (type: string, courseId: string, yearId?: string, semesterId?: string, subjectId?: string) => void;
}

function SubjectEditor({
  courses,
  selectedCourse,
  selectedYear,
  selectedSemester,
  onCourseChange,
  onYearChange,
  onSemesterChange,
  onSubjectAdd,
  onSave,
  onDelete
}: SubjectEditorProps) {
  const [editingSubject, setEditingSubject] = useState<string | null>(null);
  const [subjectData, setSubjectData] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [showLinkForm, setShowLinkForm] = useState(false);
  const [newLink, setNewLink] = useState({ title: '', url: '', type: 'article' as 'video' | 'article' | 'tutorial' });
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteNewName, setNoteNewName] = useState('');
  const [showFileNamesForm, setShowFileNamesForm] = useState(false);
  const [fileNamesFormData, setFileNamesFormData] = useState<{ files: File[]; titles: string[]; types: ('notes' | 'book')[] }>({ files: [], titles: [], types: [] });
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadSuccessCount, setUploadSuccessCount] = useState(0);

  useEffect(() => {
    if (selectedCourse && selectedYear && selectedSemester && editingSubject) {
      loadSubjectData();
    }
  }, [selectedCourse, selectedYear, selectedSemester, editingSubject]);

  const loadSubjectData = async () => {
    if (!editingSubject) return;
    try {
      const subject = await getSubject(selectedCourse, selectedYear, selectedSemester, editingSubject);
      if (subject) {
        setSubjectData(subject);
      }
    } catch (error) {
      console.error('Error loading subject:', error);
    }
  };

  const handleAddLink = () => {
    if (!subjectData) return;
    if (!newLink.title || !newLink.url) {
      alert('Please fill in link title and URL');
      return;
    }
    
    const link = {
      id: Date.now().toString(),
      ...newLink
    };
    
    setSubjectData({
      ...subjectData,
      links: [...(subjectData.links || []), link]
    });
    
    // Reset form
    setNewLink({ title: '', url: '', type: 'article' });
    setShowLinkForm(false);
  };

  const handleEditLink = (linkId: string) => {
    const link = subjectData.links.find((l: any) => l.id === linkId);
    if (link) {
      setNewLink({ title: link.title, url: link.url, type: link.type });
      setShowLinkForm(true);
      handleRemoveLink(linkId);
    }
  };

  const handleRemoveLink = (linkId: string) => {
    if (!subjectData) return;
    setSubjectData({
      ...subjectData,
      links: subjectData.links.filter((l: any) => l.id !== linkId)
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    const fileArray = Array.from(files);
    const initialTitles = fileArray.map(file => file.name.replace(/\.[^/.]+$/, '')); // Remove extension for title
    const initialTypes: ('notes' | 'book')[] = fileArray.map(() => 'notes'); // Default to 'notes'
    
    setFileNamesFormData({
      files: fileArray,
      titles: initialTitles,
      types: initialTypes
    });
    setShowFileNamesForm(true);
    // Reset input
    e.target.value = '';
  };

  const handleUploadNotes = async () => {
    if (!fileNamesFormData.files.length || !subjectData || !editingSubject) return;

    // Validate all titles are filled
    const hasEmptyTitles = fileNamesFormData.titles.some(title => !title.trim());
    if (hasEmptyTitles) {
      alert('Please fill in all titles');
      return;
    }

    setUploading(true);
    setShowFileNamesForm(false);
    const uploadedNotes: any[] = [];

    try {
      for (let i = 0; i < fileNamesFormData.files.length; i++) {
        const file = fileNamesFormData.files[i];
        const title = fileNamesFormData.titles[i]?.trim() || file.name;
        const type = fileNamesFormData.types[i] || 'notes';
        
        const timestamp = Date.now();
        const storageFileName = `${timestamp}-${file.name}`;
        const path = `notes/${selectedCourse}/${selectedYear}/${selectedSemester}/${editingSubject}/${storageFileName}`;
        
        const fileUrl = await uploadNoteFile(file, path);
        const fileSize = getFileSize(file);

        uploadedNotes.push({
          id: `${timestamp}-${i}`,
          title: title,
          fileUrl,
          fileName: storageFileName,
          originalFileName: file.name,
          size: fileSize,
          type: type,
          uploadedAt: Timestamp.now()
        });
      }

      const updatedNotes = [...(subjectData.notes || []), ...uploadedNotes];
      
      const updatedSubjectData = {
        ...subjectData,
        notes: updatedNotes
      };

      setSubjectData(updatedSubjectData);

      // Save to Firestore
      await saveSubject(selectedCourse, selectedYear, selectedSemester, editingSubject, {
        name: subjectData.name,
        code: subjectData.code,
        description: subjectData.description,
        links: subjectData.links || [],
        notes: updatedNotes
      });

      setFileNamesFormData({ files: [], titles: [], types: [] });
      setUploadSuccess(true);
      setUploadSuccessCount(uploadedNotes.length);
      
      // Reload subject data to show new notes
      await loadSubjectData();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setUploadSuccess(false);
      }, 3000);
    } catch (error) {
      alert('Error uploading files');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleRenameNote = (noteId: string) => {
    const note = subjectData.notes.find((n: any) => n.id === noteId);
    if (note) {
      setEditingNoteId(noteId);
      setNoteNewName(note.title);
    }
  };

  const handleSaveRename = async () => {
    if (!editingNoteId || !noteNewName.trim()) return;
    
    const updatedNotes = subjectData.notes.map((note: any) => 
      note.id === editingNoteId ? { ...note, title: noteNewName.trim() } : note
    );
    
    setSubjectData({
      ...subjectData,
      notes: updatedNotes
    });
    
    // Save to Firestore immediately
    try {
      await saveSubject(selectedCourse, selectedYear, selectedSemester, editingSubject!, {
        name: subjectData.name,
        code: subjectData.code,
        description: subjectData.description,
        links: subjectData.links || [],
        notes: updatedNotes
      });
    } catch (error) {
      console.error('Error saving rename:', error);
      alert('Error saving rename');
    }
    
    setEditingNoteId(null);
    setNoteNewName('');
  };

  const handleSaveSubjectData = async () => {
    if (!editingSubject || !subjectData) return;
    try {
      await saveSubject(selectedCourse, selectedYear, selectedSemester, editingSubject, {
        name: subjectData.name,
        code: subjectData.code,
        description: subjectData.description,
        links: subjectData.links || [],
        notes: subjectData.notes || []
      });
      alert('Subject saved successfully!');
    } catch (error) {
      alert('Error saving subject');
      console.error(error);
    }
  };

  const handleRemoveNote = async (noteId: string) => {
    if (!subjectData) return;
    const note = subjectData.notes.find((n: any) => n.id === noteId);
    if (note && confirm(`Delete "${note.title}"?`)) {
      setSubjectData({
        ...subjectData,
        notes: subjectData.notes.filter((n: any) => n.id !== noteId)
      });
      await handleSaveSubjectData();
    }
  };

  const availableYears = selectedCourse && courses[selectedCourse] ? Object.keys(courses[selectedCourse].years || {}) : [];
  const availableSemesters = selectedCourse && selectedYear && courses[selectedCourse]?.years[selectedYear]
    ? Object.keys(courses[selectedCourse].years[selectedYear].semesters || {})
    : [];
  const availableSubjects = selectedCourse && selectedYear && selectedSemester && courses[selectedCourse]?.years[selectedYear]?.semesters[selectedSemester]
    ? Object.keys(courses[selectedCourse].years[selectedYear].semesters[selectedSemester].subjects || {})
    : [];

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Edit Subjects</h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Course</label>
          <select
            value={selectedCourse}
            onChange={(e) => { onCourseChange(e.target.value); onYearChange(''); onSemesterChange(''); setEditingSubject(null); }}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select Course</option>
            {Object.entries(courses).map(([id, course]) => (
              <option key={id} value={id}>{course.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Year</label>
          <select
            value={selectedYear}
            onChange={(e) => { onYearChange(e.target.value); onSemesterChange(''); setEditingSubject(null); }}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            disabled={!selectedCourse}
          >
            <option value="">Select Year</option>
            {availableYears.map(yearId => (
              <option key={yearId} value={yearId}>
                {courses[selectedCourse]?.years[yearId]?.name || yearId}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Semester</label>
          <select
            value={selectedSemester}
            onChange={(e) => { onSemesterChange(e.target.value); setEditingSubject(null); }}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            disabled={!selectedYear}
          >
            <option value="">Select Semester</option>
            {availableSemesters.map(semesterId => (
              <option key={semesterId} value={semesterId}>
                {courses[selectedCourse]?.years[selectedYear]?.semesters[semesterId]?.name || semesterId}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedCourse && selectedYear && selectedSemester && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Subjects</h3>
            <button
              onClick={onSubjectAdd}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              + Add Subject
            </button>
          </div>

          <select
            value={editingSubject || ''}
            onChange={(e) => setEditingSubject(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white mb-4"
          >
            <option value="">Select Subject to Edit</option>
            {availableSubjects.map(subjectId => {
              const subject = courses[selectedCourse].years[selectedYear].semesters[selectedSemester].subjects[subjectId];
              return (
                <option key={subjectId} value={subjectId}>
                  {subject.name} ({subject.code})
                </option>
              );
            })}
          </select>
        </div>
      )}

      {editingSubject && subjectData && (
        <div className="border rounded-lg p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Subject Name</label>
            <input
              type="text"
              value={subjectData.name}
              onChange={(e) => setSubjectData({ ...subjectData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Subject Code</label>
            <input
              type="text"
              value={subjectData.code}
              onChange={(e) => setSubjectData({ ...subjectData, code: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={subjectData.description}
              onChange={(e) => setSubjectData({ ...subjectData, description: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              rows={3}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">Study Links ({subjectData.links?.length || 0})</label>
              <button
                onClick={() => setShowLinkForm(!showLinkForm)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
              >
                {showLinkForm ? 'Cancel' : '+ Add Link'}
              </button>
            </div>

            {showLinkForm && (
              <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Link Title</label>
                    <input
                      type="text"
                      value={newLink.title}
                      onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                      placeholder="e.g., Khan Academy - Calculus"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">URL</label>
                    <input
                      type="url"
                      value={newLink.url}
                      onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Type</label>
                    <select
                      value={newLink.type}
                      onChange={(e) => setNewLink({ ...newLink, type: e.target.value as any })}
                      className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                    >
                      <option value="video">Video</option>
                      <option value="article">Article</option>
                      <option value="tutorial">Tutorial</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleAddLink}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Add Link
                    </button>
                    <button
                      onClick={() => {
                        setShowLinkForm(false);
                        setNewLink({ title: '', url: '', type: 'article' });
                      }}
                      className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              {subjectData.links?.map((link: any) => (
                <div key={link.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{link.title}</span>
                      <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded">
                        {link.type}
                      </span>
                    </div>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline truncate block max-w-md"
                    >
                      {link.url}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditLink(link.id)}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemoveLink(link.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              {(!subjectData.links || subjectData.links.length === 0) && (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                  No links added yet. Click "+ Add Link" to add study resources.
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">Notes/Books ({subjectData.notes?.length || 0})</label>
              <label className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                {uploading ? 'Uploading...' : '+ Upload Files'}
                <input
                  type="file"
                  onChange={handleFileSelect}
                  disabled={uploading}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt,.ppt,.pptx"
                  multiple
                />
              </label>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              You can upload multiple files at once. You'll be prompted to enter title and type for each file.
            </p>
            
            {uploadSuccess && (
              <div className="mb-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg">
                ✅ Successfully uploaded {uploadSuccessCount} file(s)!
              </div>
            )}
            <div className="space-y-2">
              {subjectData.notes?.map((note: any) => (
                <div key={note.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                  <div className="flex-1">
                    {editingNoteId === note.id ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={noteNewName}
                          onChange={(e) => setNoteNewName(e.target.value)}
                          className="flex-1 px-3 py-1 border rounded dark:bg-gray-600 dark:text-white"
                          onKeyPress={(e) => e.key === 'Enter' && handleSaveRename()}
                        />
                        <button
                          onClick={handleSaveRename}
                          className="text-green-600 hover:text-green-800 text-sm"
                        >
                          ✓
                        </button>
                        <button
                          onClick={() => {
                            setEditingNoteId(null);
                            setNoteNewName('');
                          }}
                          className="text-gray-600 hover:text-gray-800 text-sm"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{note.title}</span>
                            <span className={`px-2 py-0.5 text-xs rounded ${
                              (note.type || 'notes') === 'book' 
                                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                            }`}>
                              {(note.type || 'notes') === 'book' ? '📚 Book' : '📝 Notes'}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {note.size}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {editingNoteId !== note.id && (
                      <>
                        <button
                          onClick={() => handleRenameNote(note.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Rename
                        </button>
                        <button
                          onClick={() => handleRemoveNote(note.id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Remove
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
              {(!subjectData.notes || subjectData.notes.length === 0) && (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                  No notes uploaded yet. Click "+ Upload Files" to add notes.
                </p>
              )}
            </div>
          </div>

          <button
            onClick={handleSaveSubjectData}
            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Save Subject
          </button>
        </div>
      )}

      {/* File Names Form Modal */}
      {showFileNamesForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Add Notes/Books</h3>
            <div className="space-y-4">
              {fileNamesFormData.files.map((file, index) => (
                <div key={index} className="border rounded-lg p-4 dark:border-gray-700 space-y-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">File:</span> {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Title *</label>
                    <input
                      type="text"
                      value={fileNamesFormData.titles[index] || ''}
                      onChange={(e) => {
                        const newTitles = [...fileNamesFormData.titles];
                        newTitles[index] = e.target.value;
                        setFileNamesFormData({ ...fileNamesFormData, titles: newTitles });
                      }}
                      className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                      placeholder="Enter title for this file..."
                      autoFocus={index === 0}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Type *</label>
                    <select
                      value={fileNamesFormData.types[index] || 'notes'}
                      onChange={(e) => {
                        const newTypes = [...fileNamesFormData.types];
                        newTypes[index] = e.target.value as 'notes' | 'book';
                        setFileNamesFormData({ ...fileNamesFormData, types: newTypes });
                      }}
                      className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                    >
                      <option value="notes">Notes</option>
                      <option value="book">Book</option>
                    </select>
                  </div>
                </div>
              ))}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleUploadNotes}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Upload Files
                </button>
                <button
                  onClick={() => {
                    setShowFileNamesForm(false);
                    setFileNamesFormData({ files: [], titles: [], types: [] });
                  }}
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

