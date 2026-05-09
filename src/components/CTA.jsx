import { useNavigate } from 'react-router-dom';

export default function CTA() {
  const navigate = useNavigate();

  const goContact = () => navigate('/contact');

  return (
    <section className="cta" id="contact">
      <div className="cta__inner">
        <div className="section-tag">Get Protected</div>
        <h2 className="cta__title">
          Protect What Matters<br />
          <span>With Us Now.</span>
        </h2>
        <p className="cta__sub">
          Do not wait for a breach to take security seriously. Our team is ready
          to assess your vulnerabilities and build your defences.
        </p>
        <div className="cta__actions">
          <button
            className="btn-primary"
            style={{ fontSize: '16px', padding: '16px 32px' }}
            onClick={goContact}
          >
            Get a Quote →
          </button>
          <button
            className="btn-outline"
            style={{ fontSize: '16px', padding: '16px 32px' }}
            onClick={goContact}
          >
            Book a 20-min Consultation
          </button>
          <a
            href="/sample-pentest-report.pdf"
            className="btn-outline"
            style={{ fontSize: '16px', padding: '16px 32px' }}
            download
          >
            Download Sample Report
          </a>
        </div>
        <div className="contact-pill">
          <div className="contact-pill__dot" />
          info@rootxsecurity.com · Chennai, India · Coventry, UK
        </div>
      </div>
    </section>
  );
}
