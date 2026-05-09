const ITEMS = [
  'Penetration Testing', 'VAPT', 'Mobile Security',
  'Application Security', 'Secure Code Review', 'Bug Bounty Management',
  'Digital Forensics', 'Corporate Training', 'Android Testing',
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]; // duplicate for seamless loop

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {doubled.map((item, i) => (
          <div className="ticker__item" key={i}>
            <span>◆</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}
