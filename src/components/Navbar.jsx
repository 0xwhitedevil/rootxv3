import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

// V0.1 #12: Reversed menu order (FAQ first, Services last before CTA).
// V0.1 #11: Products added.
// V0.3 #7: Home added at the start of the menu.
const NAV_LINKS = [
  { label: 'Home',     href: '/'         },
  { label: 'FAQ',      href: '/faq'      },
  { label: 'About',    href: '/about'    },
  { label: 'Team',     href: '/team'     },
  { label: 'Process',  href: '/process'  },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
];

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('rootx-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('rootx-theme', theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Lock body scroll when menu open (mobile)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (e, path) => {
    e.preventDefault();
    setMenuOpen(false);
    navigate(path);
  };

  const isActive = (href) => location.pathname === href || location.pathname.startsWith(href + '/');

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="/" className="navbar__logo" onClick={e => handleNav(e, '/')} aria-label="RootX home">
          <img src="/logo.svg" alt="RootX" className="navbar__logo-img" />
          <span className="navbar__logo-text">RootX</span>
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={isActive(link.href) ? 'navbar__link--active' : ''}
                onClick={e => handleNav(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li><ThemeToggle /></li>
          <li>
            <a
              href="/contact"
              className={`navbar__cta ${location.pathname === '/contact' ? 'navbar__cta--active' : ''}`}
              onClick={e => handleNav(e, '/contact')}
            >
              Get a Quote →
            </a>
          </li>
        </ul>

        {/* Floating top-right hamburger for mobile (V0.1 #2) */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Backdrop (V0.1 #7: smooth animation) */}
      <div
        className={`navbar__backdrop ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Floating top-right panel */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile menu">
        <div className="navbar__mobile-menu-inner">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__mobile-link ${isActive(link.href) ? 'navbar__link--active' : ''}`}
              onClick={e => handleNav(e, link.href)}
              style={{ transitionDelay: menuOpen ? `${0.04 * i + 0.05}s` : '0s' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="navbar__mobile-cta"
            onClick={e => handleNav(e, '/contact')}
            style={{ transitionDelay: menuOpen ? `${0.04 * NAV_LINKS.length + 0.05}s` : '0s' }}
          >
            Get a Quote →
          </a>
          <div className="navbar__mobile-toggle-row">
            <span>Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
