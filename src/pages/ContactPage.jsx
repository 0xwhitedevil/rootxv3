import GetQuote from '../components/GetQuote';

export default function ContactPage() {
  return (
    <main className="inner-page">

      {/* Hero */}
      <section className="inner-hero">
        <div className="inner-hero__orb" />
        <div className="inner-hero__content">
          <div className="section-tag">Contact Us</div>
          <h1 className="inner-hero__title">
            Get a Quote<br />
            <span className="inner-hero__accent">Let us Talk Security</span>
          </h1>
          <p className="inner-hero__sub">
            Tell us about your systems and we will get back to you within 24 hours
            with a custom proposal. No commitment required.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
            <a className="btn-outline" href="/sample-pentest-report.pdf" download>
              Download Sample Pentest Report
            </a>
          </div>
        </div>
      </section>

      <GetQuote />

    </main>
  );
}
