import { useState } from 'react';

const FAQ_CATEGORIES = [
  {
    label: 'General',
    faqs: [
      { q: 'What is RootX?', a: 'RootX is a cybersecurity firm with offices in Chennai, India and Coventry, United Kingdom, specialising in penetration testing, VAPT, mobile security, digital forensics, secure code review, GRC, audit, and corporate training. We serve startups, SMBs, and enterprises across India, the UK, and globally.' },
      { q: 'Where are you based?', a: 'We have offices in Chennai, India and Coventry, United Kingdom. We work with clients remotely worldwide and can also conduct on-site engagements across India and the UK.' },
      { q: 'Who are your clients?', a: 'We work with startups, mid-sized companies, and enterprises across industries including fintech, healthcare, SaaS, e-commerce, and government sectors.' },
    ],
  },
  {
    label: 'Services',
    faqs: [
      { q: 'What cybersecurity services do you offer?', a: 'We offer Penetration Testing, VAPT, Mobile Security, Android Testing, Application Security, Bug Bounty Management, Digital Forensics, Secure Code Review, GRC, Security Audit, and Corporate Training, all custom-scoped to your needs.' },
      { q: 'Do you test mobile applications?', a: 'Yes. We test both iOS and Android applications against OWASP Mobile Top 10 and beyond, including static analysis, dynamic testing, API security, and reverse engineering.' },
      { q: 'Can you help with compliance requirements?', a: 'Yes. Our assessments and audits are aligned with frameworks including ISO 27001, SOC 2, PCI-DSS, GDPR, and HIPAA. Our GRC practice can help you build the program from the ground up or get audit-ready.' },
    ],
  },
  {
    label: 'Engagement',
    faqs: [
      { q: 'How long does a penetration test take?', a: 'Timelines vary by scope, typically 3 to 14 business days for active testing, plus 2 to 5 days for report delivery. We provide a precise timeline in every proposal.' },
      { q: 'Do you sign an NDA?', a: 'Absolutely. We sign a comprehensive Non-Disclosure Agreement before any engagement begins. Your data, findings, and systems are strictly confidential.' },
      { q: 'Do you provide support after the assessment?', a: 'Yes. We offer remediation guidance, re-testing to verify fixes, and ongoing support plans. We treat every engagement as the start of a long-term partnership.' },
    ],
  },
  {
    label: 'Pricing',
    faqs: [
      { q: 'How much does a penetration test cost?', a: 'Pricing is based on scope, complexity, and duration. There is no one-size-fits-all cost. We provide a transparent, itemised quote after a free scoping call. No hidden fees.' },
      { q: 'Do you offer flexible payment terms?', a: 'Yes. We work with clients to find payment structures that fit their budget and project timeline. Reach out to discuss your situation.' },
      { q: 'How do I get a quote?', a: 'Fill out the contact form on this site or email us at info@rootxsecurity.com. We respond within 24 hours and will schedule a free scoping call to understand your needs before sending a proposal.' },
    ],
  },
];

const IconToggle = () => (
  <svg className="faq-toggle-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

function FaqItemPage({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faqp-item ${open ? 'open' : ''}`}>
      <button className="faqp-item__q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="faqp-item__q-text">{q}</span>
        <span className="faq-item__toggle"><IconToggle /></span>
      </button>
      <div className="faqp-item__a">{a}</div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="inner-page">

      {/* Hero */}
      <section className="inner-hero">
        <div className="inner-hero__orb" />
        <div className="inner-hero__content">
          <div className="section-tag">FAQ</div>
          <h1 className="inner-hero__title">
            Questions We<br />
            <span className="inner-hero__accent">Get Asked Most</span>
          </h1>
          <p className="inner-hero__sub">
            Cannot find your answer? Email us at{' '}
            <a href="mailto:info@rootxsecurity.com" style={{ color: 'var(--amber)' }}>
              info@rootxsecurity.com
            </a>
            . We reply within 24 hours.
          </p>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="faqp-section">
        <div className="section-inner">
          {FAQ_CATEGORIES.map(cat => (
            <div className="faqp-category" key={cat.label}>
              <div className="faqp-category__label">{cat.label}</div>
              <div className="faqp-category__items">
                {cat.faqs.map(item => (
                  <FaqItemPage key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
