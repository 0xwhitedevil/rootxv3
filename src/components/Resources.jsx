const POSTS = [
  {
    type: 'Blog',
    title: 'How to scope your first penetration test',
    summary: 'A short guide for engineering leaders running their first VAPT: what to ask, what to share, and how to read the report.',
    read: '6 min read',
  },
  {
    type: 'Resource',
    title: 'Sample pentest report (redacted)',
    summary: 'See exactly what a RootX engagement deliverable looks like: executive summary, technical findings, remediation snippets.',
    read: 'Download',
  },
  {
    type: 'Threat Report',
    title: 'Q4 2025 application security trends',
    summary: 'What we saw across our engagements last quarter: common weaknesses, emerging attack patterns, and where teams are improving.',
    read: '12 min read',
  },
];

export default function Resources() {
  return (
    <section className="resources">
      <div className="section-inner">
        <div className="resources__header">
          <div>
            <div className="section-tag">Resources</div>
            <h2 className="section-h2">Read,<br />Then Reach Out</h2>
          </div>
          <p className="section-sub">
            Practical writing on security for engineering teams. No cookie-cutter listicles,
            no fluff.
          </p>
        </div>
        <div className="resources__grid">
          {POSTS.map(p => (
            <article className="resource-card" key={p.title}>
              <div className="resource-card__type">{p.type}</div>
              <h3 className="resource-card__title">{p.title}</h3>
              <p className="resource-card__summary">{p.summary}</p>
              <span className="resource-card__read">{p.read} →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
