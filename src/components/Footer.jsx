import { useNavigate } from 'react-router-dom';

// SVG icons - clean, consistent (V0.1 #1)
const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconTwitter = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/rootx.services',        Icon: IconInstagram },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/rootx-services/', Icon: IconLinkedIn  },
  { label: 'Twitter',   href: '#', Icon: IconTwitter  },
  { label: 'Facebook',  href: '#', Icon: IconFacebook },
];

export default function Footer() {
  const navigate = useNavigate();

  const go = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="footer">
      {/* V0.1 #1: single-row flex grid on desktop, stacks gracefully on mobile */}
      <div className="footer__row">
        <div className="footer__col footer__brand">
          <a href="/" onClick={e => go(e, '/')} className="footer__brand-link">
            <img src="/logo.svg" alt="RootX" className="footer__logo" />
            <span className="footer__brand-name">RootX</span>
          </a>
          <p className="footer__tagline">
            Protecting what matters most through cybersecurity services, training, and intelligence.
          </p>
          <div className="social-links">
            {SOCIAL.map(({ label, href, Icon }) => (
              <a key={label} href={href} className="social-link" target="_blank" rel="noreferrer" aria-label={label} title={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about"    onClick={e => go(e, '/about')}>About Us</a></li>
            <li><a href="/team"     onClick={e => go(e, '/team')}>Our Team</a></li>
            <li><a href="/careers"  onClick={e => go(e, '/careers')}>Careers</a></li>
            <li><a href="/faq"      onClick={e => go(e, '/faq')}>FAQ</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><a href="/services/vapt"                onClick={e => go(e, '/services/vapt')}>VAPT</a></li>
            <li><a href="/services/penetration-testing" onClick={e => go(e, '/services/penetration-testing')}>Penetration Testing</a></li>
            <li><a href="/services/grc"                 onClick={e => go(e, '/services/grc')}>GRC</a></li>
            <li><a href="/services/audit"               onClick={e => go(e, '/services/audit')}>Security Audit</a></li>
            <li><a href="/services"                     onClick={e => go(e, '/services')}>All Services →</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/process"  onClick={e => go(e, '/process')}>How We Work</a></li>
            <li><a href="/products" onClick={e => go(e, '/products')}>Products</a></li>
            <li><a href="/privacy"  onClick={e => go(e, '/privacy')}>Privacy Policy</a></li>
            <li><a href="/contact"  onClick={e => go(e, '/contact')}>Get a Quote</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+918072331337">+91 80723 31337</a></li>
            <li><a href="mailto:info@rootxsecurity.com">info@rootxsecurity.com</a></li>
            <li><span>Chennai, India</span></li>
            <li><span>Coventry, United Kingdom</span></li>
            <li><span>Mon to Sat, 10 AM to 7 PM IST</span></li>
          </ul>
        </div>
      </div>

      {/* V0.1 #8: 2026 · V0.3 #3: A Unit of Rootecstak Group, no location */}
      <div className="footer__bottom">
        <p>© 2026 RootX. All rights reserved.</p>
        <p className="footer__bottom-meta">A Unit of Rootecstak Group · Designed with security in mind.</p>
      </div>
    </footer>
  );
}
