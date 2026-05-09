import { useNavigate } from 'react-router-dom';

const TIERS = [
  {
    label: 'Discover',
    title: 'Free scoping call',
    price: 'Free',
    sub: '20 minutes',
    points: [
      'Understand your environment and goals',
      'Walk through compliance or audit drivers',
      'Decide if we are the right fit, honestly',
    ],
    cta: 'Book a 20-min Consultation',
  },
  {
    label: 'Scope',
    title: 'Fixed engagement',
    price: 'From a fixed quote',
    sub: 'Per engagement',
    points: [
      'Detailed proposal with scope, timeline, and price',
      'NDA signed before any work begins',
      'No hidden fees, no scope creep without sign-off',
    ],
    cta: 'Get a Quote',
    highlighted: true,
  },
  {
    label: 'Partner',
    title: 'Retainer',
    price: 'Custom',
    sub: 'Quarterly or annual',
    points: [
      'Continuous testing across your stack',
      'On-demand security advice for your team',
      'Priority response and shared dashboards',
    ],
    cta: 'Talk to Us',
  },
];

const PRINCIPLES = [
  { icon: '⚖️', title: 'Scope-based, not headcount-based',  desc: 'You pay for the engagement, not for hours sat in a chair. Bigger scope means bigger price, transparently.' },
  { icon: '🔍', title: 'No hidden line items',                desc: 'Everything is itemised. If it is not in the proposal, it is not in the invoice.' },
  { icon: '🤝', title: 'Re-test on request',                  desc: 'For most engagements, a re-test pass is included so you can verify your fixes worked.' },
];

export default function PricingHow() {
  const navigate = useNavigate();

  return (
    <section className="pricing-how">
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>How Our Pricing Works</div>
          <h2 className="section-h2">Simple,<br />Scope-Based Pricing</h2>
          <p className="section-sub" style={{ margin: '16px auto 0' }}>
            Every business has unique needs, so we do not list a one-size-fits-all price.
            Here is the path from a first call to a working engagement.
          </p>
        </div>

        <div className="pricing-tiers">
          {TIERS.map(t => (
            <div className={`pricing-tier ${t.highlighted ? 'pricing-tier--highlight' : ''}`} key={t.label}>
              <div className="pricing-tier__label">{t.label}</div>
              <div className="pricing-tier__title">{t.title}</div>
              <div className="pricing-tier__price">
                <span className="pricing-tier__amount">{t.price}</span>
                <span className="pricing-tier__sub">{t.sub}</span>
              </div>
              <ul className="pricing-tier__list">
                {t.points.map(p => (
                  <li key={p}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="6.5" stroke="#00C88C"/>
                      <path d="M4 7l2 2 4-4" stroke="#00C88C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <button
                className={t.highlighted ? 'btn-primary' : 'btn-outline'}
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => navigate('/contact')}
              >
                {t.cta} →
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-principles">
          {PRINCIPLES.map(p => (
            <div className="pricing-principle" key={p.title}>
              <div className="pricing-principle__icon">{p.icon}</div>
              <div>
                <div className="pricing-principle__title">{p.title}</div>
                <div className="pricing-principle__desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
