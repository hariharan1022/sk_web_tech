import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

const AppContent = () => {
  const location = useLocation();
  
  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
