'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { listProjects, setProjectsCharging, updateProject } from '@/lib/catalog/admin-client';
import { formatRupees } from '@/lib/catalog/types';
import { Project, projectLevel, projectPath } from '@/lib/projects/types';
import { EmptyState, FloatingError, SectionHeader, errorText } from './ui';

// Mini projects are uploaded with scripts/upload-projects.mjs as drafts. Here owners publish
// them, set their price and decide when students start paying; students only ever see published ones.
export default function ProjectsTab() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [charging, setCharging] = useState(false);
  const [switching, setSwitching] = useState(false);
  const [prices, setPrices] = useState<Record<string, string>>({});
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    listProjects()
      .then((result) => {
        if (cancelled) return;
        setProjects(result.projects);
        setCharging(result.charging);
      })
      .catch((err) => !cancelled && setError(errorText(err)));
    return () => {
      cancelled = true;
    };
  }, []);

  const toggleCharging = async () => {
    const next = !charging;
    const question = next
      ? 'Start charging? Students will have to buy each project at the price shown here.'
      : 'Make every project free? Any signed-in student will be able to read every file and download the zip.';
    if (!confirm(question)) return;
    setSwitching(true);
    setError('');
    try {
      setCharging(await setProjectsCharging(next));
    } catch (err) {
      setError(errorText(err));
    } finally {
      setSwitching(false);
    }
  };

  const save = async (project: Project, changes: { published?: boolean; price?: number }) => {
    setBusyId(project.id);
    setError('');
    try {
      const updated = await updateProject(project.id, changes);
      setProjects((list) => list?.map((p) => (p.id === updated.id ? updated : p)) ?? null);
      setPrices((all) => {
        const next = { ...all };
        delete next[project.id];
        return next;
      });
    } catch (err) {
      setError(errorText(err));
    } finally {
      setBusyId(null);
    }
  };

  const savePrice = (project: Project) => {
    const price = Number(prices[project.id]);
    if (!Number.isInteger(price) || price < 1) {
      setError('Price must be a whole number of rupees, at least ₹1.');
      return;
    }
    save(project, { price });
  };

  const published = projects?.filter((p) => p.published).length ?? 0;

  return (
    <section>
      <FloatingError message={error} onDismiss={() => setError('')} />
      <SectionHeader
        title="Mini projects"
        description={
          projects
            ? `${published} of ${projects.length} published. Students see only published projects.`
            : 'Loading projects…'
        }
      />

      {projects && projects.length > 0 && (
        <div className="card mb-5 flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-ink">{charging ? 'Students pay for projects' : 'Projects are free right now'}</p>
            <p className="text-sm text-ink-muted">
              {charging
                ? 'Each project is sold at the price shown below, once, and never expires.'
                : 'Any signed-in student can read every file and download the zip. The prices below are kept for when you start charging.'}
            </p>
          </div>
          <button type="button" onClick={toggleCharging} disabled={switching} className={`btn shrink-0 ${charging ? 'btn-secondary' : 'btn-primary'}`}>
            {switching ? 'Saving…' : charging ? 'Make everything free' : 'Start charging'}
          </button>
        </div>
      )}

      {projects?.length === 0 && (
        <EmptyState
          icon="🛠️"
          title="No projects yet"
          text="Projects are added from content/projects with: node scripts/upload-projects.mjs. They arrive as drafts for you to publish here."
        />
      )}

      {projects && projects.length > 0 && (
        <ul className="space-y-3">
          {projects.map((project) => {
            const level = projectLevel(project.level);
            const busy = busyId === project.id;
            const priceDraft = prices[project.id];
            return (
              <li key={project.id} className="card flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="code">#{project.number}</span>
                    <span className={`badge ${level.badge}`}>{level.label}</span>
                    <span className={`badge ${project.published ? 'badge-leaf' : 'badge-muted'}`}>
                      {project.published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <p className="mt-1.5 font-semibold text-ink">{project.title}</p>
                  <p className="text-xs text-ink-muted">
                    {project.subjectCodes.join(', ') || 'No subject codes'} · {project.documents.length} PDFs ·{' '}
                    {project.download ? 'zip uploaded' : 'no zip yet'}
                  </p>
                </div>

                <form
                  className="flex items-center gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    savePrice(project);
                  }}
                >
                  <label className="sr-only" htmlFor={`price-${project.id}`}>
                    Price in rupees
                  </label>
                  <span className="text-sm text-ink-muted">₹</span>
                  <input
                    id={`price-${project.id}`}
                    type="number"
                    min={1}
                    step={1}
                    value={priceDraft ?? String(project.price)}
                    onChange={(e) => setPrices((all) => ({ ...all, [project.id]: e.target.value }))}
                    className="input w-24"
                  />
                  {priceDraft !== undefined && priceDraft !== String(project.price) && (
                    <button type="submit" disabled={busy} className="btn btn-secondary btn-sm">
                      Save
                    </button>
                  )}
                </form>

                <div className="flex items-center gap-2">
                  {project.published && (
                    <Link href={projectPath(project)} target="_blank" className="btn btn-ghost btn-sm">
                      View
                    </Link>
                  )}
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => {
                      if (
                        !project.published &&
                        !confirm(`Publish "${project.title}"${charging ? ` at ${formatRupees(project.price)}` : ' for free'}? Students can open it straight away.`)
                      ) {
                        return;
                      }
                      save(project, { published: !project.published });
                    }}
                    className={`btn btn-sm ${project.published ? 'btn-secondary' : 'btn-primary'}`}
                  >
                    {busy ? 'Saving…' : project.published ? 'Unpublish' : 'Publish'}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
