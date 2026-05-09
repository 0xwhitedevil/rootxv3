const INDUSTRIES = [
  { icon: '☁️', name: 'SaaS',         desc: 'Multi-tenant security, API hardening, OAuth flows, customer trust.' },
  { icon: '💳', name: 'Fintech',      desc: 'Transaction integrity, KYC pipelines, RBI and PCI-DSS alignment.' },
  { icon: '🏥', name: 'Healthcare',   desc: 'PHI protection, HIPAA-aligned controls, mobile health apps.' },
  { icon: '🛒', name: 'E-commerce',   desc: 'Cart and checkout flows, payment integrations, fraud surface review.' },
  { icon: '🎓', name: 'EdTech',       desc: 'Student data protection, exam integrity, identity systems.' },
  { icon: '🏛️', name: 'Government',  desc: 'Public-facing portals, citizen data, compliance with national frameworks.' },
];

export default function Industries() {
  return (
    <section className="industries">
      <div className="section-inner">
        <div className="industries__header">
          <div>
            <div className="section-tag">Industries</div>
            <h2 className="section-h2">Built for<br />Regulated and Fast-Moving Teams</h2>
          </div>
          <p className="section-sub">
            We have run engagements across these sectors. Each comes with its own threat model,
            its own compliance bar, and its own way of moving.
          </p>
        </div>

        <div className="industries__grid">
          {INDUSTRIES.map(ind => (
            <div className="industry-card" key={ind.name}>
              <div className="industry-card__icon">{ind.icon}</div>
              <div className="industry-card__name">{ind.name}</div>
              <p className="industry-card__desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
