'use client';

import Image from 'next/image';

const highlights = [
  { label: 'Trusted', text: 'Quick Recap - Quick Preparation - Outstanding CGPA' },
];

const features = [
  {
    icon: '📚',
    title: 'Smart Libraries',
    description: 'Bite-sized notes, PYQs, and curated book lists always in sync.',
  },
  {
    icon: '🧠',
    title: 'Adaptive Learning',
    description: 'Personalised course plans that adjust to your study rhythm.',
  },
  {
    icon: '🤝',
    title: 'Peer Rooms',
    description: 'Frictionless group study sessions, live discussions, and polls.',
  },
  {
    icon: '🚀',
    title: 'Career Ready',
    description: 'Interview prep, articles, and campus updates in one feed.',
  },
];

const stats = [
  { label: 'Avg. study streak', value: '18 days' },
  { label: 'Notes downloaded', value: '2k+' },
  { label: 'Articles published', value: '90+' },
];

interface IntroSectionProps {
  onExploreCourses?: () => void;
  onBrowseArticles?: () => void;
}

export default function IntroSection({
  onExploreCourses,
  onBrowseArticles,
}: IntroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24 px-4">
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--accent)]/20 to-[var(--primary)]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
                  style={{ backgroundColor: 'var(--secondary)', color: 'var(--text-primary)' }}
                >
                  <span className="inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                  <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                    {item.label}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent)] bg-clip-text text-transparent">
                AKTU - To the point in two minutes 📋🏆
              </h1>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Plan your week, download updated notes, browse fresh articles, and move from doubt to clarity
                with a beautifully organised home base.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onExploreCourses}
                className="px-7 py-3 text-base font-semibold rounded-full shadow-lg transition-all duration-200"
                style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
              >
                Explore Courses
              </button>
              <button
                onClick={onBrowseArticles}
                className="px-7 py-3 text-base font-semibold rounded-full border transition-all duration-200"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)', backgroundColor: 'var(--background)' }}
              >
                Browse Articles
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-4 border backdrop-blur-sm"
                  style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background)' }}
                >
                  <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </p>
                  <p className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <div
              className="absolute -inset-8 rounded-[3rem] opacity-70 blur-3xl"
              style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 60%)' }}
              aria-hidden="true"
            />

            <div
              className="relative rounded-[2.5rem] border shadow-2xl overflow-hidden"
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--secondary)' }}
            >
              <Image
                src="/premium_vector-1720670407512-4fdfe6e67a18.png"
                alt="Students collaborating on the Learn Platform"
                width={640}
                height={640}
                priority
                className="w-full h-auto object-cover"
              />
            </div>

            <div
              className="relative sm:absolute sm:-bottom-10 sm:-left-8 bottom-0 left-0 w-40 sm:w-52 rounded-3xl border shadow-xl overflow-hidden mx-auto sm:mx-0"
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background)' }}
            >
              <Image
                src="/QWE1.jpeg"
                alt="Faculty mentoring session illustration"
                width={420}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* <div
              className="absolute top-6 -right-6 rounded-2xl px-5 py-4 shadow-lg"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--text-primary)' }}
            >
              <p className="text-sm font-medium opacity-80">Live sessions</p>
              <p className="text-3xl font-bold">+28</p>
              <p className="text-xs opacity-70 mt-1">happening across cohorts</p>
            </div> */}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative rounded-2xl p-6 shadow-lg group transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--secondary)',
                border: '1px solid var(--border)',
                animation: `fade-in-up ${0.3 + index * 0.1}s ease-out forwards`,
              }}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



