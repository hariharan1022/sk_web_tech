import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <Team />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;
