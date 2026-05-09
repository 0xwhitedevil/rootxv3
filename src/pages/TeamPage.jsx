import Team   from '../components/Team';
import CTA    from '../components/CTA';

const WHY_ITEMS = [
  { icon: '🎓', title: 'Certified Experts',     desc: 'Our team holds industry certifications including CEH, OSCP, and more, backed by years of hands-on experience.' },
  { icon: '🔬', title: 'Research-Driven',        desc: 'We continuously research emerging threats, zero-days, and attack techniques to stay ahead of the curve.' },
  { icon: '🤝', title: 'Client-First',            desc: 'We treat every client as a long-term partner, not a one-time engagement. Your success is our benchmark.' },
  { icon: '🌐', title: 'Remote and On-Site',     desc: 'We work with clients across India and globally, fully remote or on-site, whichever suits your needs.' },
];

export default function TeamPage() {
  return (
    <main className="inner-page">

      {/* Hero */}
      <section className="inner-hero">
        <div className="inner-hero__orb" />
        <div className="inner-hero__content">
          <div className="section-tag">The People</div>
          <h1 className="inner-hero__title">
            The Minds<br />
            <span className="inner-hero__accent">Behind RootX</span>
          </h1>
          <p className="inner-hero__sub">
            Security is not just software. It is the humans who think like attackers,
            defend like warriors, and communicate like partners.
          </p>
        </div>
      </section>

      {/* Team cards, reuse existing component */}
      <Team />

      {/* Why our team */}
      <section className="team-why">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Why Our Team</div>
            <h2 className="section-h2">What Sets Our People Apart</h2>
          </div>
          <div className="team-why__grid">
            {WHY_ITEMS.map(w => (
              <div className="team-why__card" key={w.title}>
                <div className="team-why__icon">{w.icon}</div>
                <h3 className="team-why__title">{w.title}</h3>
                <p className="team-why__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
