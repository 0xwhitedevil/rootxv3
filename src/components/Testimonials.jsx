const QUOTES = [
  {
    quote: 'RootX walked us through every finding and helped our engineers fix the root cause, not just the symptom. The retest at the end was the part that mattered most.',
    name: 'Head of Engineering',
    company: 'Series B Fintech',
  },
  {
    quote: 'Clear scope, clear timeline, no surprises. The executive summary was actually readable by our board, and the technical report was something developers used.',
    name: 'CTO',
    company: 'Healthcare SaaS',
  },
  {
    quote: 'They moved fast without cutting corners. We had a critical finding within the first week, communicated immediately. That is the kind of partner we wanted.',
    name: 'Security Lead',
    company: 'B2B SaaS Platform',
  },
];

const PROOFS = [
  { value: '20+', label: 'Companies Secured' },
  { value: '24h', label: 'Avg. Reply Time'   },
  { value: 'NDA', label: 'Before Every Engagement' },
  { value: '0',   label: 'Findings Leaked, Ever' },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>What Clients Say</div>
          <h2 className="section-h2">Quiet Trust,<br />Loud Results</h2>
        </div>

        <div className="testimonials__grid">
          {QUOTES.map((q, i) => (
            <figure className="testimonial-card" key={i}>
              <svg className="testimonial-card__mark" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M10 8H6a2 2 0 0 0-2 2v8h6v-6H6a4 4 0 0 1 4-4zm12 0h-4a2 2 0 0 0-2 2v8h6v-6h-4a4 4 0 0 1 4-4z"
                      fill="var(--amber)" opacity="0.6"/>
              </svg>
              <blockquote className="testimonial-card__quote">{q.quote}</blockquote>
              <figcaption className="testimonial-card__cite">
                <div className="testimonial-card__name">{q.name}</div>
                <div className="testimonial-card__company">{q.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="testimonials__proofs">
          {PROOFS.map(p => (
            <div className="proof" key={p.label}>
              <div className="proof__value">{p.value}</div>
              <div className="proof__label">{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
