import { useNavigate } from 'react-router-dom';
import CTA from '../components/CTA';
import Industries from '../components/Industries';
import { SERVICES } from '../data/services';

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <main className="inner-page">

      {/* ── SERVICES MAIN SECTION ── */}
      <section className="svcp-section">
        <div className="svcp-inner">

          {/* Header row - title left, subtitle right */}
          <div className="svcp-header">
            <div className="svcp-header__left">
              <div className="section-tag">What We Do</div>
              <h1 className="svcp-main-title">Our Best<br />Services</h1>
            </div>
            <div className="svcp-header__right">
              <p className="svcp-header__sub">
                From securing your digital fortress to empowering your team,
                we have every corner covered. Pick a service to see deliverables,
                timelines, and how we run the engagement.
              </p>
              <div className="svcp-header__ctas">
                <button className="btn-primary" onClick={() => navigate('/contact')}>
                  Book a 20-min Consultation →
                </button>
                <a className="btn-outline" href="/sample-pentest-report.pdf" download>
                  Download Sample Report
                </a>
              </div>
            </div>
          </div>

          {/* 3-column grid */}
          <div className="svcp-grid">
            {SERVICES.map(s => (
              <div
                className="svcp-card"
                key={s.num}
                role="link"
                tabIndex={0}
                onClick={() => navigate(`/services/${s.slug}`)}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/services/${s.slug}`); }}
              >
                <div className="svcp-card__icon">{s.icon}</div>
                <h3 className="svcp-card__title">{s.title}</h3>
                <p className="svcp-card__desc">{s.desc}</p>
                <span className="svcp-card__learn">Learn more →</span>
                <div className="svcp-card__num">{s.num}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V0.2 #4: Industries we serve */}
      <Industries />

      {/* ── ACTIONABLE INTELLIGENCE ── */}
      <section className="svc-intel">
        <div className="svc-intel__inner">

          <div className="svc-intel__left">
            <div className="section-tag">Deliverables</div>
            <h2 className="svc-intel__title">Actionable Intelligence</h2>
            <p className="svc-intel__desc">
              We do not just dump a PDF. We provide a dynamic remediation
              roadmap that developers can actually use.
            </p>
            <div className="svc-intel__items">
              {[
                { title: 'Executive Summary',       sub: 'Non-technical impact analysis for stakeholders.'     },
                { title: 'Technical Reproduction',  sub: 'Copy-paste steps to verify findings.'                },
                { title: 'Remediation Code',        sub: 'Patches and config fixes tailored to your stack.'    },
                { title: 'Risk Scoring',            sub: 'CVSS v3.1 scoring contextualised for your business.' },
              ].map(item => (
                <div className="svc-intel__item" key={item.title}>
                  <div className="svc-intel__item-check">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6.5" stroke="#00C88C"/>
                      <path d="M4 7l2 2 4-4" stroke="#00C88C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="svc-intel__item-title">{item.title}</div>
                    <div className="svc-intel__item-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="svc-intel__right">
            {/* V0.3 #6: terminal vibes replaced with a clean report-style card */}
            {/* <div className="report-card">
              <div className="report-card__header">
                <div className="report-card__badge report-card__badge--critical">CRITICAL</div>
                <div className="report-card__id">VULN-2026-001</div>
              </div>
              <div className="report-card__title">SQL Injection in Auth Module</div>
              <div className="report-card__row">
                <div className="report-card__label">Endpoint</div>
                <div className="report-card__value">POST /api/v1/login</div>
              </div>
              <div className="report-card__row">
                <div className="report-card__label">Affected</div>
                <div className="report-card__value">Authentication module</div>
              </div>
              <div className="report-card__row">
                <div className="report-card__label">CVSS v3.1</div>
                <div className="report-card__value report-card__value--critical">9.8</div>
              </div>
              <div className="report-card__row">
                <div className="report-card__label">Status</div>
                <div className="report-card__value report-card__value--ok">Verified fix available</div>
              </div>
              <div className="report-card__footer">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" stroke="currentColor"/>
                  <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Re-test included to verify remediation
              </div>
            </div> */}
          </div>

        </div>
      </section>

      <CTA />
    </main>
  );
}
