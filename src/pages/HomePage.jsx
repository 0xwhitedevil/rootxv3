import Hero         from '../components/Hero';
import Services     from '../components/Services';
import Industries   from '../components/Industries';
import HowItWorks   from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import ThreatFeed   from '../components/ThreatFeed';
import PricingHow   from '../components/PricingHow';
import Resources    from '../components/Resources';
import Team         from '../components/Team';
import FAQ          from '../components/FAQ';
import CTA          from '../components/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      <HowItWorks />
      <Testimonials />
      <ThreatFeed />
      <PricingHow />
      <Resources />
      <Team />
      <FAQ />
      <CTA />
    </main>
  );
}
