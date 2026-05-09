import { useState } from 'react';

const FAQS = [
  {
    q: 'What cybersecurity services do you offer?',
    a: 'We offer a comprehensive range of services, including Penetration Testing, Vulnerability Assessment and Penetration Testing (VAPT), Mobile Security, Android Testing, Application Security, Bug Bounty Management, Digital Forensics, Secure Code Review, GRC, Security Audit, and Corporate Training. Each service is customised to address the specific security needs of your business.',
  },
  {
    q: 'Why is penetration testing important for my business?',
    a: 'Penetration testing helps identify vulnerabilities in your network, applications, and systems before attackers can exploit them. By simulating real-world attacks, we help you find weaknesses and take corrective action to strengthen your defences. This proactive approach reduces the risk of data breaches, financial losses, and reputation damage.',
  },
  {
    q: 'How long does a security audit or penetration test take?',
    a: 'The timeline depends on the size and complexity of the systems being tested. Typically, it ranges from a few days to several weeks. After testing is complete, we provide a detailed report with findings and actionable recommendations.',
  },
  {
    q: 'Do you provide ongoing support after completing a security assessment?',
    a: 'Yes. Our services include continuous support. After completing an assessment or penetration test, we provide remediation recommendations, help implement necessary fixes, and can monitor your systems to ensure ongoing security. We offer flexible support plans tailored to your needs.',
  },
  {
    q: 'How do I get started with your services?',
    a: "Getting started is simple. Reach out to our team via the contact form or give us a call to discuss your security needs. We will schedule a consultation to understand your requirements and propose a custom solution to fit your business.",
  },
  {
    q: 'Is my data kept confidential?',
    a: 'Absolutely. We sign a comprehensive Non-Disclosure Agreement (NDA) before any engagement begins. Your data, systems, and findings are strictly confidential and never shared with third parties.',
  },
];

// V0.1 #7: single rotating toggle (+ becomes x via 45-deg rotation, no swap-flicker)
const IconToggle = () => (
  <svg className="faq-toggle-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <line className="faq-toggle-icon__h" x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-item__q"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="faq-item__q-text">{q}</span>
        <span className="faq-item__toggle" aria-hidden="true">
          <IconToggle />
        </span>
      </button>
      <div className="faq-item__a" aria-hidden={!open}>
        {a}
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="section-inner">
        <div className="faq__header">
          <div className="section-tag">FAQ</div>
          <h2 className="section-h2">Frequently Asked Questions</h2>
        </div>
        <div className="faq__grid">
          {FAQS.map(item => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
