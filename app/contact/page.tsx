"use client";

import { useState } from 'react';
import { saveContactMessage } from '@/lib/firebase/firestore';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Error saving message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
        Contact Us
      </h1>

      <section className="space-y-6">
        <div className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
          <p className="mb-4">
            We&apos;d love to hear from you! Whether you have a question, feedback, or suggestion, 
            please don&apos;t hesitate to reach out to us.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border transition-colors duration-200"
              style={{
                backgroundColor: 'var(--background)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)',
              }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border transition-colors duration-200"
              style={{
                backgroundColor: 'var(--background)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)',
              }}
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border transition-colors duration-200"
              style={{
                backgroundColor: 'var(--background)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)',
              }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border transition-colors duration-200 resize-y"
              style={{
                backgroundColor: 'var(--background)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)',
              }}
            />
          </div>

          {submitted && (
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: 'var(--success)',
                color: '#ffffff',
              }}
            >
              Thank you for your message! We&apos;ll get back to you soon.
            </div>
          )}

          <button
            type="submit"
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            style={{
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary)';
            }}
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            Other Ways to Reach Us
          </h2>
          <div className="text-sm sm:text-base space-y-2" style={{ color: 'var(--text-secondary)' }}>
            <p>
              <strong>Support:</strong> For technical support or questions about the platform, please use the contact form above.
            </p>
            <p>
              <strong>Feedback:</strong> We welcome your feedback and suggestions to improve Next Engineer.
            </p>
            <p>
              <strong>Partnership:</strong> For partnership inquiries, please mention it in your message subject.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

