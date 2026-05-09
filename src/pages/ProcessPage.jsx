import { useState } from 'react';
import CTA from '../components/CTA';

const STEPS = [
  {
    num: '01', icon: '📞', title: 'Reach Out to Us',
    desc: 'Connect with our cybersecurity team to discuss your requirements, goals, and expectations. No commitment required, just a conversation.',
    detail: 'Our initial discovery call is free and confidential. We listen first. You walk us through your business, your tech stack, and your concerns. We ask the right questions to understand your threat landscape before recommending anything.',
    duration: '1 to 2 days',
    deliverable: 'Scoping call and needs assessment',
  },
  {
    num: '02', icon: '📝', title: 'Complete Pre-Assessment Form',
    desc: 'Provide detailed insights about your web application and systems by filling out a simple, structured form.',
    detail: 'The pre-assessment form helps us scope the engagement accurately. We collect technical details: URLs, environments, authentication methods, compliance requirements, and any known areas of concern. This ensures our proposal is precise and realistic.',
    duration: '1 to 2 days',
    deliverable: 'Completed scoping questionnaire',
  },
  {
    num: '03', icon: '📄', title: 'Review the Proposal',
    desc: 'Meet with us to go over our testing strategy, project timeline, and cost breakdown tailored to your specific needs.',
    detail: 'We present a detailed engagement proposal that covers methodology, scope boundaries, testing environment requirements, team composition, timeline, and pricing. Everything is transparent. No hidden fees, no vague line items.',
    duration: '2 to 3 days',
    deliverable: 'Custom engagement proposal and SOW',
  },
  {
    num: '04', icon: '🔒', title: 'Sign the NDA and Agreement',
    desc: 'Safeguard your data with a Non-Disclosure Agreement and finalise our partnership before any work begins.',
    detail: 'We sign a comprehensive NDA to protect your confidential information before any engagement begins. Our legal agreements are straightforward, fair, and designed to protect both parties. We never share findings with third parties.',
    duration: '1 day',
    deliverable: 'Signed NDA and engagement agreement',
  },
  {
    num: '05', icon: '🚀', title: 'Begin Testing',
    desc: 'Our experts initiate the penetration testing process, ensuring you are informed every step of the way.',
    detail: "Active testing begins according to the agreed scope and schedule. You receive regular status updates throughout. Our team documents every finding in real time, and critical vulnerabilities are communicated immediately. We do not wait for the final report.",
    duration: '3 to 14 days (scope-dependent)',
    deliverable: 'Live status updates and critical alerts',
  },
  {
    num: '06', icon: '📊', title: 'Report and Remediation',
    desc: 'Receive a comprehensive report with all findings, risk ratings, and step-by-step remediation guidance.',
    detail: 'Every engagement ends with a dual-format report: an executive summary for leadership and a detailed technical report for your development and security teams. We walk you through every finding, explain the business risk, and provide actionable fix guidance. Re-testing is available to verify remediation.',
    duration: '2 to 5 days post-testing',
    deliverable: 'Executive and technical report, re-test option',
  },
];

export default function ProcessPage() {
  const [active, setActive] = useState(null);

  return (
    <main className="inner-page">

      {/* Hero */}
      <section className="inner-hero">
        <div className="inner-hero__orb" />
        <div className="inner-hero__content">
          <div className="section-tag">Our Process</div>
          <h1 className="inner-hero__title">
            How We Work<br />
            <span className="inner-hero__accent">Step by Step</span>
          </h1>
          <p className="inner-hero__sub">
            A transparent, structured engagement process from first call to final report.
            No surprises, no ambiguity.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="process-section">
        <div className="section-inner">
          <div className="process-steps">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`process-step ${active === i ? 'active' : ''}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="process-step__left">
                  <div className="process-step__num">{step.num}</div>
                  <div className="process-step__line" />
                </div>
                <div className="process-step__body">
                  <div className="process-step__header">
                    <div className="process-step__icon">{step.icon}</div>
                    <div className="process-step__meta">
                      <h3 className="process-step__title">{step.title}</h3>
                      <p className="process-step__desc">{step.desc}</p>
                    </div>
                    <div className="process-step__chevron">
                      {active === i ? '−' : '+'}
                    </div>
                  </div>
                  {active === i && (
                    <div className="process-step__detail">
                      <p className="process-step__detail-text">{step.detail}</p>
                      <div className="process-step__chips">
                        <div className="process-chip">
                          <span className="process-chip__label">Duration</span>
                          <span className="process-chip__val">{step.duration}</span>
                        </div>
                        <div className="process-chip">
                          <span className="process-chip__label">Deliverable</span>
                          <span className="process-chip__val">{step.deliverable}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
