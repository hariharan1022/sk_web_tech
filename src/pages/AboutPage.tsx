import About from '../components/About';
import Team from '../components/Team';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <About />
      <Team />
    </motion.div>
  );
};

export default AboutPage;
