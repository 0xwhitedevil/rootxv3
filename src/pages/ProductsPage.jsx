import { useNavigate } from 'react-router-dom';

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <main className="inner-page">

      {/* Hero */}
      <section className="inner-hero">
        <div className="inner-hero__orb" />
        <div className="inner-hero__content">
          <div className="section-tag">Products</div>
          <h1 className="inner-hero__title">
            Tools We Are<br />
            <span className="inner-hero__accent">Building</span>
          </h1>
          <p className="inner-hero__sub">
            Beyond services, we are building products that scale the way we work.
            Want early access? Drop us a line.
          </p>
        </div>
      </section>

      {/* V0.3 #9: single overall Coming Soon, no individual products listed */}
      <section className="products-soon">
        <div className="section-inner">
          <div className="products-soon__card">
            <div className="products-soon__chip">Coming Soon</div>
            <h2 className="products-soon__title">Our Products Are<br />On the Way</h2>
            <p className="products-soon__sub">
              We are building a small set of products that grew out of how we run engagements.
              We will share details when they are ready. If you would like a heads up the moment
              we launch, leave us a note.
            </p>
            <div className="products-soon__actions">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                Notify Me at Launch →
              </button>
              <button className="btn-outline" onClick={() => navigate('/services')}>
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
