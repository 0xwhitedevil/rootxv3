import { useState } from 'react';

const EMAIL = 'careers@rootxsecurity.com';

const TEMPLATE = `Subject: Joining the RootX team, [Your Role of Interest]

Hi RootX team,

My name is [Full Name] and I am interested in joining RootX as a [role / area of focus,
e.g. Junior Pentester, GRC Analyst, Application Security Engineer].

About me:
- Current role: [your current role and company, or student status]
- Years of experience: [X years]
- Key skills: [e.g. Burp Suite, OWASP Top 10, Python, Go, mobile testing, ISO 27001]
- Certifications: [e.g. OSCP, CEH, CISA, ISO 27001 LA, or leave blank]

Why RootX:
[2 to 3 sentences on what draws you to RootX and the work we do.]

Attached:
- Resume / CV
- Portfolio or write-ups (if applicable)
- LinkedIn / GitHub / X handles

Looking forward to hearing from you.

Thanks,
[Full Name]
[Phone]
[City, Country]`;

const ROLES_OF_INTEREST = [
  'Penetration Testers (Web / Mobile / API)',
  'Application Security Engineers',
  'Secure Code Reviewers',
  'GRC Analysts and Auditors',
  'Security Researchers',
  'Trainers and Content Creators',
];

export default function CareersPage() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(TEMPLATE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <main className="inner-page">

      {/* Hero */}
      <section className="inner-hero">
        <div className="inner-hero__orb" />
        <div className="inner-hero__content">
          <div className="section-tag">Careers</div>
          <h1 className="inner-hero__title">
            Curious About<br />
            <span className="inner-hero__accent">Joining the Team?</span>
          </h1>
          <p className="inner-hero__sub">
            We do not always have open listings, but we always read every email.
            If the work we do at RootX speaks to you, write to us. The right person
            beats a perfect job description every time.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="careers-section">
        <div className="section-inner careers-grid">
          <div className="careers-left">
            <div className="section-tag">Who We Look For</div>
            <h2 className="section-h2" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>
              Roles we keep an eye out for
            </h2>
            <ul className="careers-roles">
              {ROLES_OF_INTEREST.map(r => (
                <li key={r}>
                  <span className="careers-roles__dot" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <p className="careers-note">
              Do not see your role above? Email us anyway. We grow the team around
              talent we trust.
            </p>
            <a className="btn-primary" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Joining the RootX team')}`}>
              Email {EMAIL} →
            </a>
          </div>

          <div className="careers-right">
            <div className="careers-card">
              <div className="careers-card__header">
                <div>
                  <div className="careers-card__label">Short email template</div>
                  <div className="careers-card__title">Use this as a starting point</div>
                </div>
                <button className="careers-copy" onClick={copy} aria-live="polite">
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
              <pre className="careers-template">{TEMPLATE}</pre>
              <div className="careers-card__footer">
                <span>Send to</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
