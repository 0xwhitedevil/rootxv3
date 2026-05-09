import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

// V0.1 #14: stats kept for now, with V0.2 #8 credibility-leaning labels added.
// To rework later when client metrics are finalised.
const STATS = [
  { num: '20',  suffix: '+', label: 'Companies Trusted' },
  { num: '100', suffix: '%', label: 'NDA Backed Engagements' },
  { num: '24',  suffix: 'h', label: 'Avg. Reply Time' },
  { num: '15',  suffix: '+', label: 'Core Team Members' },
];

const HIGHLIGHTS = [
  'VAPT',
  'Application Security',
  'GRC and Audit',
  'Secure Code Review',
];

export default function Hero() {
  const navigate = useNavigate();

  const go = (path) => navigate(path);

  return (
    <section className="hero">
      <div className="hero__orb" />
      <div className="hero__orb2" />

      <div className="hero__content">
        <div className="hero__badge">
          <div className="hero__badge-dot" />
          Rootecstak Group
        </div>

        <h1 className="hero__title">
          RootX<br />
          <span className="accent">Protecting</span><br />
          <span className="muted">What Matters.</span>
        </h1>

        <p className="hero__sub">
          A dynamic cybersecurity service provider specialising in tailored solutions
          that address the ever-evolving challenges of the digital world. We protect
          your data, your applications, and your brand.
        </p>

        <div className="hero__chips">
          {HIGHLIGHTS.map(h => (
            <span className="hero__chip" key={h}>{h}</span>
          ))}
          <span className="hero__chip hero__chip--more">+ more</span>
        </div>

        <div className="hero__actions">
          <button className="btn-primary" onClick={() => go('/contact')}>
            Get a Quote →
          </button>
          <button className="btn-outline" onClick={() => go('/contact')}>
            Book a 20-min Consultation
          </button>
          <a className="btn-outline" href="/sample-pentest-report.pdf" download>
            Download Sample Report
          </a>
        </div>

        <div className="hero__stats">
          {STATS.map(s => (
            <div key={s.label}>
              <div className="hero__stat-num">{s.num}<span>{s.suffix}</span></div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
