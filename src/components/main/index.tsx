import FAQSection from './faq';
import FeaturesSection1 from './first-features';
import GettingStartedSection from './getting-started';
import HeroSection from './hero-section';
import PricingSection from './pricing';
import SecondaryFeatureSection from './second-features';
import TestimonialsSection from './testimonials';

const Main = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection1 />
      <SecondaryFeatureSection />
      <GettingStartedSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
    </main>
  );
};

export default Main;
