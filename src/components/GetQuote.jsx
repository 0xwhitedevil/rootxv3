import { useState } from 'react';

const SERVICES = [
  'Penetration Testing',
  'VAPT (Vulnerability Assessment)',
  'Mobile Security',
  'Android Testing',
  'Application Security',
  'Secure Code Review',
  'Bug Bounty Management',
  'Digital Forensics',
  'GRC (Governance, Risk & Compliance)',
  'Security Audit',
  'Corporate Training',
  'Other / Not Sure Yet',
];

const INFO_CARDS = [
  { icon: '📞', label: 'Contact Phone',    value: '+91 80723 31337',   sub: 'Call us 24/7'                  },
  { icon: '✉️', label: 'Contact Email',    value: 'info@rootxsecurity.com', sub: 'We reply within 24 hours'      },
  { icon: '📍', label: 'Our Offices',      value: 'Chennai · Coventry', sub: 'India and the United Kingdom'  },
  { icon: '🕐', label: 'Office Time',      value: '10 AM to 7 PM',     sub: 'Monday to Saturday IST'        },
];

const TRUST_POINTS = [
  { icon: '🔒', text: 'NDA signed before every engagement'     },
  { icon: '⚡', text: 'Proposal delivered within a few days'   },
  { icon: '💡', text: 'Tailored to your project complexity'    },
  { icon: '✅', text: 'Trusted by 20+ companies'               },
];

export default function GetQuote() {
  const [form, setForm] = useState({
    name: '', email: '', company: '',
    designation: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [errors,    setErrors]    = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'Name is required';
    if (!form.email.trim()) e.email = 'Work email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Please describe your needs';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name:'', email:'', company:'', designation:'', phone:'', service:'', message:'' });
  };

  return (
    <section className="quote" id="pricing">
      <div className="quote__inner">

        {/* LEFT PANEL */}
        <div className="quote__left">
          <div className="section-tag">Get a Quote</div>
          <h2 className="quote__title">
            Pricing<br />
            <span className="quote__title--accent">Reach Us</span>
          </h2>
          <p className="quote__desc">
            Every business has unique needs. Our pricing is tailored to your specific
            requirements, and we offer flexible options to ensure you get the best value.
          </p>

          <div className="quote__info-cards">
            {INFO_CARDS.map(c => (
              <div className="quote__info-card" key={c.label}>
                <div className="quote__info-icon">{c.icon}</div>
                <div>
                  <div className="quote__info-label">{c.label}</div>
                  <div className="quote__info-value">{c.value}</div>
                  <div className="quote__info-sub">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="quote__trust">
            {TRUST_POINTS.map(t => (
              <div className="quote__trust-item" key={t.text}>
                <span className="quote__trust-icon">{t.icon}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>

          {/* V0.2 #2: Download sample report CTA on contact page */}
          <a
            href="/sample-pentest-report.pdf"
            className="btn-outline"
            style={{ marginTop: 24, fontSize: 14 }}
            download
          >
            Download Sample Pentest Report
          </a>
        </div>

        {/* RIGHT PANEL */}
        <div className="quote__right">
          {submitted ? (
            <div className="quote__success">
              <div className="quote__success-icon">✓</div>
              <h3 className="quote__success-title">Message Received</h3>
              <p className="quote__success-msg">
                Thanks, <strong>{form.name}</strong>. Our security team will
                review your request and get back to you within 24 hours at{' '}
                <strong>{form.email}</strong>.
              </p>
              <button className="qf-submit" style={{ marginTop: '24px' }} onClick={reset}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <>
              <div className="quote__form-header">
                <h3 className="quote__form-title">Get in Touch with Us</h3>
                <p className="quote__form-sub">Fill out the form below to receive a free consultation</p>
              </div>

              <form className="quote__form" onSubmit={handleSubmit} noValidate>

                {/* Row 1: Name + Work Email */}
                <div className="qf-row">
                  <div className="qf-field">
                    <label className="qf-label">Name <span className="qf-req">*</span></label>
                    <input className={`qf-input ${errors.name ? 'qf-input--error' : ''}`}
                      type="text" name="name" placeholder="Jane Smith"
                      value={form.name} onChange={handleChange} />
                    {errors.name && <span className="qf-error">{errors.name}</span>}
                  </div>
                  <div className="qf-field">
                    <label className="qf-label">Work Email <span className="qf-req">*</span></label>
                    <input className={`qf-input ${errors.email ? 'qf-input--error' : ''}`}
                      type="email" name="email" placeholder="jane@company.com"
                      value={form.email} onChange={handleChange} />
                    {errors.email && <span className="qf-error">{errors.email}</span>}
                  </div>
                </div>

                {/* Row 2: Company + Designation */}
                <div className="qf-row">
                  <div className="qf-field">
                    <label className="qf-label">Company</label>
                    <input className="qf-input" type="text" name="company"
                      placeholder="Acme Inc." value={form.company} onChange={handleChange} />
                  </div>
                  <div className="qf-field">
                    <label className="qf-label">Designation</label>
                    <input className="qf-input" type="text" name="designation"
                      placeholder="Security Engineer" value={form.designation} onChange={handleChange} />
                  </div>
                </div>

                {/* Phone */}
                <div className="qf-field">
                  <label className="qf-label">Phone <span className="qf-optional">(Optional)</span></label>
                  <div className="qf-phone-wrap">
                    <span className="qf-phone-icon">📞</span>
                    <input className="qf-input qf-input--phone" type="tel" name="phone"
                      placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                {/* Dropdown */}
                <div className="qf-field">
                  <label className="qf-label">I am Interested In</label>
                  <div className="qf-select-wrap">
                    <select className="qf-select" name="service"
                      value={form.service} onChange={handleChange}>
                      <option value="">Select a topic...</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <span className="qf-select-arrow">▾</span>
                  </div>
                </div>

                {/* Message */}
                <div className="qf-field">
                  <label className="qf-label">Message <span className="qf-req">*</span></label>
                  <textarea className={`qf-textarea ${errors.message ? 'qf-input--error' : ''}`}
                    name="message" rows={4}
                    placeholder="Tell us about your project..."
                    value={form.message} onChange={handleChange} />
                  {errors.message && <span className="qf-error">{errors.message}</span>}
                </div>

                <button type="submit" className="qf-submit" disabled={loading}>
                  {loading
                    ? <span className="qf-loading"><span className="qf-spinner" /> Sending...</span>
                    : <>Send Message <span className="qf-arrow">→</span></>
                  }
                </button>

              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
