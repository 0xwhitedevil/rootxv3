export default function PrivacyPage() {
  return (
    <main className="inner-page">

      {/* Hero */}
      <section className="inner-hero">
        <div className="inner-hero__orb" />
        <div className="inner-hero__content">
          <div className="section-tag">Privacy Policy</div>
          <h1 className="inner-hero__title">
            How We Handle<br />
            <span className="inner-hero__accent">Your Data</span>
          </h1>
          <p className="inner-hero__sub">
            Last updated: 1 January 2026. RootX is operated by Rootecstak Group, with offices in Chennai, India and Coventry, United Kingdom.
          </p>
        </div>
      </section>

      <section className="privacy-section">
        <div className="section-inner privacy-content">

          <h2>1. Who we are</h2>
          <p>
            RootX is a cybersecurity services brand operated by Rootecstak Group. Our offices are in
            Chennai, India and Coventry, United Kingdom. You can reach us at info@rootxsecurity.com.
          </p>

          <h2>2. What data we collect</h2>
          <p>
            We collect only what we need to respond to enquiries and deliver our services:
          </p>
          <ul>
            <li>Contact details you submit through forms (name, email, phone, company, role).</li>
            <li>Engagement information you share with us during scoping (URLs, environment details, scope notes).</li>
            <li>Basic site analytics (page views, device type, country) collected via privacy-respecting tooling.</li>
          </ul>

          <h2>3. How we use it</h2>
          <ul>
            <li>To respond to enquiries and proposals you request.</li>
            <li>To deliver and improve our services under signed agreements.</li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>
          <p>We do not sell your data. We do not share it with third parties for marketing.</p>

          <h2>4. Confidentiality during engagements</h2>
          <p>
            All client engagements are governed by a signed Non-Disclosure Agreement before any
            work starts. Findings, source code, infrastructure details, and any sensitive information
            you share are treated as confidential and stored on access-controlled systems.
          </p>

          <h2>5. Data retention</h2>
          <p>
            We retain enquiry data for up to 24 months from last contact, unless you request earlier
            deletion. Engagement artifacts are retained per the terms of the engagement contract,
            then securely destroyed.
          </p>

          <h2>6. Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of personal data we hold about
            you by writing to <a href="mailto:privacy@rootxsecurity.com">privacy@rootxsecurity.com</a>.
            We respond within 30 days.
          </p>

          <h2>7. Cookies and analytics</h2>
          <p>
            We use minimal cookies for session continuity, theme preference, and basic analytics.
            We do not use advertising cookies or trackers.
          </p>

          <h2>8. Third-party services</h2>
          <p>
            Where we use third-party services to operate the site (for example, chat widgets, form
            handling, hosting), we choose providers with strong security and privacy practices.
            These providers process limited data on our behalf under their own terms.
          </p>

          <h2>9. Security</h2>
          <p>
            We follow recognised security practices: access control, encryption in transit, regular
            patching, and least privilege. We are happy to discuss our security posture with
            prospective clients during scoping.
          </p>

          <h2>10. Updates to this policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be communicated via
            our site, and where we have your contact details, by email.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email <a href="mailto:privacy@rootxsecurity.com">privacy@rootxsecurity.com</a>
            {' '}or write to Rootecstak Group: Chennai, India or Coventry, United Kingdom.
          </p>

        </div>
      </section>

    </main>
  );
}
