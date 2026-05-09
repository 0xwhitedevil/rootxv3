import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../data/services';

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="services" id="services">
      <div className="section-inner">
        <div className="services__header">
          <div>
            <div className="section-tag">What We Do</div>
            <h2 className="section-h2">Our Best<br />Services</h2>
          </div>
          <p className="section-sub">
            From securing your digital fortress to empowering your team,
            we have every corner covered.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(s => (
            <div
              className="service-card"
              key={s.num}
              onClick={() => navigate(`/services/${s.slug}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/services/${s.slug}`); }}
            >
              <div className="service-card__icon">{s.icon}</div>
              <div className="service-card__arrow">↗</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {/* V0.2 #1: Learn more click signal */}
              <span className="service-card__learn">Learn more →</span>
              <div className="service-card__num">{s.num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
