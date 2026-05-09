import Team from './Team';

const PILLARS = [
  {
    icon: '🛡️',
    title: 'Expert Cybersecurity Professionals',
    desc: 'Our team of certified and experienced cybersecurity professionals delivers tailored solutions that meet your specific business needs. We protect what matters most with precision and care.',
  },
  {
    icon: '⚙️',
    title: 'Effortless Integration',
    desc: 'Our advanced security solutions integrate cleanly with your existing systems, strengthening your protection without disrupting day-to-day operations.',
  },
  {
    icon: '🤝',
    title: 'Partnership Built on Trust',
    desc: "Cybersecurity is not a transaction. It is a partnership. We invest in continuous research and long-term relationships, working beside you at every step of your security journey.",
  },
  {
    icon: '🎯',
    title: 'Tailored to Your Business',
    desc: 'No two businesses are alike. Every engagement is custom-scoped to your specific threat landscape, compliance requirements, and operational realities.',
  },
];

// V0.2 #8: more credible-leaning labels
const STATS = [
  { num: '20+',  label: 'Companies Secured'   },
  { num: '24h',  label: 'Avg. Reply Time'     },
  { num: '15+',  label: 'Core Team Members'   },
  { num: '100%', label: 'NDA Backed'          },
];

const VALUES = [
  { icon: '🔍', title: 'Integrity',   desc: 'We operate with full transparency. No hidden agendas, no conflicts of interest.' },
  { icon: '⚡', title: 'Innovation',  desc: 'We stay ahead of the threat curve through continuous research and emerging-threat intelligence.' },
  { icon: '🌐', title: 'Precision',   desc: 'Every test, every report, every recommendation is delivered with meticulous attention to detail.' },
  { icon: '💡', title: 'Education',   desc: "We do not just find vulnerabilities. We make sure your team understands them and how to prevent recurrence." },
];

export default function About() {
  return (
    <main className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero__orb" />
        <div className="about-hero__orb2" />
        <div className="about-hero__content">
          <div className="section-tag">About Us</div>
          <h1 className="about-hero__title">
            A Unit of<br />
            <span className="about-hero__accent">Rootecstak Group</span>
          </h1>
          <p className="about-hero__sub">
            On a mission to redefine cybersecurity for businesses, startups, and individuals.
            We protect what matters most with precision, trust, and continuous innovation.
          </p>
          <div className="about-hero__stats">
            {STATS.map(s => (
              <div className="about-hero__stat" key={s.label}>
                <div className="about-hero__stat-num">{s.num}</div>
                <div className="about-hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="about-mission">
        <div className="section-inner">
          <div className="about-mission__grid">
            <div className="about-mission__left">
              <div className="section-tag">Our Mission</div>
              <h2 className="section-h2">Practical Security<br />for Real Teams</h2>
              <p className="about-mission__body">
                We are on a mission to redefine cybersecurity for businesses, startups, and individuals.
                As a dynamic and passionate cybersecurity service provider, we specialise in tailored
                solutions that address the ever-evolving challenges of the digital world.
              </p>
              <p className="about-mission__body">
                Founded by a team of experienced practitioners, we are committed to providing
                cutting-edge security services that protect what matters most: your data, your
                applications, and your brand. We believe cybersecurity is not a service.
                It is a partnership built on trust and continuous innovation.
              </p>
              <div className="about-mission__badges">
                <div className="about-mission__badge">
                  <span className="about-mission__badge-dot" />
                  VAPT Certified Experts
                </div>
                <div className="about-mission__badge">
                  <span className="about-mission__badge-dot" />
                  Chennai, India
                </div>
                <div className="about-mission__badge">
                  <span className="about-mission__badge-dot" />
                  Coventry, United Kingdom
                </div>
                <div className="about-mission__badge">
                  <span className="about-mission__badge-dot" />
                  Remote Worldwide
                </div>
              </div>
            </div>

            <div className="about-mission__right">
              <div className="about-mission__img-wrap">
                <img
                  src="https://therootx.com/img/bg/about us.jpg"
                  alt="About RootX"
                  className="about-mission__img"
                  onError={e => { e.target.style.display = 'none'; }}
                />
                <div className="about-mission__img-fallback">
                  <div className="about-mission__img-text">
                    <div className="about-mission__img-icon">🛡️</div>
                    <div>Protecting What<br />Matters Most</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="about-pillars">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>What Sets Us Apart</div>
            <h2 className="section-h2">The Complete Cybersecurity<br />Solution for Your Business</h2>
          </div>
          <div className="about-pillars__grid">
            {PILLARS.map((p, i) => (
              <div className="about-pillar-card" key={i}>
                <div className="about-pillar-card__icon">{p.icon}</div>
                <h3 className="about-pillar-card__title">{p.title}</h3>
                <p className="about-pillar-card__desc">{p.desc}</p>
                <div className="about-pillar-card__num">{String(i + 1).padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="about-values">
        <div className="section-inner">
          <div className="about-values__grid">
            <div className="about-values__left">
              <div className="section-tag">Our Values</div>
              <h2 className="section-h2">Principles That<br />Drive Everything</h2>
              <p className="section-sub">
                Every decision we make, every engagement we take on, is guided by a core set of
                values that put your security and trust first.
              </p>
              <div className="about-values__img-wrap">
                <img
                  src="https://therootx.com/img/bg/about us 2.png"
                  alt="RootX Values"
                  className="about-values__img"
                  onError={e => { e.target.style.display = 'none'; }}
                />
                <div className="about-values__img-fallback">
                  <span style={{ fontSize: 64 }}>🔐</span>
                </div>
              </div>
            </div>
            <div className="about-values__right">
              {VALUES.map((v, i) => (
                <div className="about-value-item" key={i}>
                  <div className="about-value-item__icon">{v.icon}</div>
                  <div>
                    <div className="about-value-item__title">{v.title}</div>
                    <div className="about-value-item__desc">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <Team />

      {/* ── CTA STRIP ── */}
      <section className="about-cta">
        <div className="about-cta__inner">
          <div>
            <h2 className="about-cta__title">Ready to Secure Your Business?</h2>
            <p className="about-cta__sub">
              Let us talk. Our team is ready to assess your needs and design a security plan around you.
            </p>
          </div>
          <div className="about-cta__actions">
            <a href="/contact" className="btn-primary" style={{ fontSize: '15px', padding: '14px 28px' }}
               onClick={e => { e.preventDefault(); window.location.href = '/contact'; }}>
              Get a Quote →
            </a>
            <a href="tel:+918072331337" className="btn-outline" style={{ fontSize: '15px', padding: '14px 28px' }}>
              📞 +91 80723 31337
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
