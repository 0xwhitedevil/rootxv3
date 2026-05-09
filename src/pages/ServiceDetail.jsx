import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { getServiceBySlug, SERVICES } from '../data/services';
import CTA from '../components/CTA';

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  // Suggest 3 other services (V0.2 #1: cross-link landing pages)
  const others = SERVICES.filter(s => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="inner-page">

      {/* Hero */}
      <section className="inner-hero svc-detail-hero">
        <div className="inner-hero__orb" />
        <div className="inner-hero__content">
          <div className="section-tag">Service · {service.num}</div>
          <h1 className="inner-hero__title">
            <span className="svc-detail-icon">{service.icon}</span>{' '}
            <span className="inner-hero__accent">{service.title}</span>
          </h1>
          <p className="inner-hero__sub">{service.short}</p>
          <div className="svc-detail-actions">
            <button className="btn-primary" onClick={() => navigate('/contact')}>
              Get a Quote →
            </button>
            <button className="btn-outline" onClick={() => navigate('/contact')}>
              Book a 20-min Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="svc-detail-body">
        <div className="section-inner svc-detail-grid-wrap">
          <div className="svc-detail-main">
            <div className="section-tag">What This Looks Like</div>
            <h2 className="section-h2" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>
              How we run a {service.title.split(' ')[0]} engagement
            </h2>
            <p className="svc-detail-long">{service.long}</p>

            <h3 className="svc-detail-subhead">Deliverables</h3>
            <ul className="svc-detail-deliverables">
              {service.deliverables.map(d => (
                <li key={d}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="7.5" stroke="#00C88C"/>
                    <path d="M5 8l2 2 4-4" stroke="#00C88C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <h3 className="svc-detail-subhead">Industries we serve here</h3>
            <div className="svc-detail-tags">
              {service.industries.map(ind => (
                <span className="svc-detail-tag" key={ind}>{ind}</span>
              ))}
            </div>
          </div>

          <aside className="svc-detail-aside">
            <div className="svc-detail-card">
              <div className="svc-detail-card__label">Need a sample?</div>
              <div className="svc-detail-card__title">Download a redacted pentest report</div>
              <p className="svc-detail-card__sub">
                See exactly what you receive at the end of an engagement: executive summary,
                technical findings, and remediation guidance.
              </p>
              <a className="btn-outline" href="/sample-pentest-report.pdf" download>
                Download Sample
              </a>
            </div>
            <div className="svc-detail-card svc-detail-card--accent">
              <div className="svc-detail-card__label">Talk to us</div>
              <div className="svc-detail-card__title">20-minute scoping call</div>
              <p className="svc-detail-card__sub">
                A free conversation to understand your environment, goals, and timeline.
                No commitment.
              </p>
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                Book a Call →
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Other services */}
      <section className="svc-detail-others">
        <div className="section-inner">
          <div className="section-tag">Explore More</div>
          <h2 className="section-h2" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', marginBottom: 36 }}>
            Other services we offer
          </h2>
          <div className="svc-detail-others__grid">
            {others.map(o => (
              <div
                className="svc-detail-other-card"
                key={o.slug}
                role="link"
                tabIndex={0}
                onClick={() => navigate(`/services/${o.slug}`)}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/services/${o.slug}`); }}
              >
                <div className="svcp-card__icon">{o.icon}</div>
                <h4>{o.title}</h4>
                <p>{o.short}</p>
                <span className="svcp-card__learn">Learn more →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
