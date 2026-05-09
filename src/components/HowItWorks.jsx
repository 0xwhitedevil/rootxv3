import { useState } from 'react';

const STEPS = [
  {
    title: 'Reach Out to Us',
    desc: 'Connect with our cybersecurity team to discuss your requirements, goals, and expectations.',
    detail: 'A free, confidential discovery call. We listen first, ask the right questions, and only then propose a way forward.',
    duration: '1 to 2 days',
    deliverable: 'Scoping call and needs assessment',
  },
  {
    title: 'Complete a Pre-Assessment Form',
    desc: 'Provide detailed insights about your web application and systems by filling out a simple form.',
    detail: 'A short, structured intake covering URLs, environments, authentication, and known concerns. Helps us scope precisely.',
    duration: '1 to 2 days',
    deliverable: 'Completed scoping questionnaire',
  },
  {
    title: 'Review the Proposal',
    desc: 'Meet with us to go over our testing strategy, project timeline, and cost breakdown tailored to your needs.',
    detail: 'A detailed engagement proposal: methodology, scope boundaries, team, timeline, and pricing. Transparent, itemised, no hidden fees.',
    duration: '2 to 3 days',
    deliverable: 'Custom engagement proposal and SOW',
  },
  {
    title: 'Sign the NDA and Agreement',
    desc: 'Safeguard your data with a Non-Disclosure Agreement and finalise our partnership.',
    detail: 'NDA before any work starts. Agreements are straightforward, fair, and protect both sides. Findings stay confidential.',
    duration: '1 day',
    deliverable: 'Signed NDA and engagement agreement',
  },
  {
    title: 'Begin Testing',
    desc: 'Our experts will initiate the penetration testing process, ensuring you are informed every step of the way.',
    detail: 'Active testing per the agreed scope. Regular status updates, with critical findings flagged immediately rather than buried in the final report.',
    duration: '3 to 14 days (scope-dependent)',
    deliverable: 'Live status updates and detailed report',
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section className="how" id="how">
      <div className="section-inner">
        <div className="how__grid">
          <div>
            <div className="section-tag">Our Process</div>
            <h2 className="section-h2">Securing your business<br />is just five steps away</h2>
            <p className="section-sub" style={{ marginBottom: '40px' }}>
              Getting started with RootX is simple. Follow these steps and
              our experts take care of the rest.
            </p>

            {STEPS.map((s, idx) => (
              <div
                key={idx}
                className={`step-item ${active === idx ? 'active' : ''}`}
                onClick={() => setActive(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter') setActive(idx); }}
              >
                <div className="step-item__num">0{idx + 1}</div>
                <div>
                  <div className="step-item__title">{s.title}</div>
                  <div className="step-item__desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* V0.3 #6: terminal removed; replaced with a clean step-preview card */}
          <div className="step-preview" key={active}>
            <div className="step-preview__num">Step 0{active + 1}</div>
            <h3 className="step-preview__title">{step.title}</h3>
            <p className="step-preview__detail">{step.detail}</p>
            <div className="step-preview__meta">
              <div className="step-preview__chip">
                <span className="step-preview__chip-label">Duration</span>
                <span className="step-preview__chip-value">{step.duration}</span>
              </div>
              <div className="step-preview__chip">
                <span className="step-preview__chip-label">You Receive</span>
                <span className="step-preview__chip-value">{step.deliverable}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
