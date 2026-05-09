// V0.2 #7: lightweight signal widget summarising notable recent threats.
// Items are illustrative placeholders - wire to an RSS or API feed when ready.

const ITEMS = [
  {
    severity: 'critical',
    tag: 'CVE',
    title: 'Authentication bypass in widely deployed VPN appliance',
    summary: 'Pre-auth RCE chain disclosed; patches available. Affected enterprises urged to rotate credentials and review logs.',
    date: '2 days ago',
  },
  {
    severity: 'high',
    tag: 'Breach',
    title: 'Mid-size SaaS provider discloses customer data exposure',
    summary: 'Misconfigured object storage allowed unauthenticated read access. Roughly 1.2M records affected.',
    date: '5 days ago',
  },
  {
    severity: 'medium',
    tag: 'Threat',
    title: 'Supply-chain attack on popular npm package',
    summary: 'Malicious post-install script targeted developer credentials. Removed from registry; rotate any tokens potentially exposed.',
    date: '1 week ago',
  },
];

const sevColor = (s) =>
  s === 'critical' ? '#FF4444' :
  s === 'high'     ? '#FFB347' :
                     '#00C88C';

export default function ThreatFeed() {
  return (
    <section className="threat-feed">
      <div className="section-inner">
        <div className="threat-feed__header">
          <div>
            <div className="section-tag">Latest Threats</div>
            <h2 className="section-h2" style={{ fontSize: 'clamp(28px, 3.4vw, 44px)' }}>
              What we are watching this week
            </h2>
          </div>
          <p className="section-sub">
            A short signal of recent breaches and CVEs we think security teams should know about.
            Updated regularly. We will not pad it.
          </p>
        </div>

        <div className="threat-feed__list">
          {ITEMS.map((it, i) => (
            <article className="threat-item" key={i}>
              <div className="threat-item__left">
                <span className="threat-item__sev" style={{ color: sevColor(it.severity), borderColor: sevColor(it.severity) }}>
                  {it.severity.toUpperCase()}
                </span>
                <span className="threat-item__tag">{it.tag}</span>
              </div>
              <div className="threat-item__body">
                <h3 className="threat-item__title">{it.title}</h3>
                <p className="threat-item__summary">{it.summary}</p>
              </div>
              <div className="threat-item__date">{it.date}</div>
            </article>
          ))}
        </div>

        <div className="threat-feed__footer">
          <span className="threat-feed__pulse" />
          Curated by the RootX research team. Not a substitute for your own threat intel.
        </div>
      </div>
    </section>
  );
}
