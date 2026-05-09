import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import './styles/globals.css';
import './styles/Navbar.css';
import './styles/Hero.css';
import './styles/sections.css';
import './styles/GetQuote.css';
import './styles/About.css';
import './styles/InnerPages.css';
import './styles/Additions.css';

import Navbar  from './components/Navbar';
import Footer  from './components/Footer';

import HomePage      from './pages/HomePage';
import AboutPage     from './pages/AboutPage';
import ServicesPage  from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import ProcessPage   from './pages/ProcessPage';
import TeamPage      from './pages/TeamPage';
import FAQPage       from './pages/FAQPage';
import ContactPage   from './pages/ContactPage';
import CareersPage   from './pages/CareersPage';
import PrivacyPage   from './pages/PrivacyPage';
import ProductsPage  from './pages/ProductsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"                  element={<HomePage />}      />
        <Route path="/about"             element={<AboutPage />}     />
        <Route path="/services"          element={<ServicesPage />}  />
        <Route path="/services/:slug"    element={<ServiceDetail />} />
        <Route path="/products"          element={<ProductsPage />}  />
        <Route path="/process"           element={<ProcessPage />}   />
        <Route path="/team"              element={<TeamPage />}      />
        <Route path="/faq"               element={<FAQPage />}       />
        <Route path="/contact"           element={<ContactPage />}   />
        <Route path="/careers"           element={<CareersPage />}   />
        <Route path="/privacy"           element={<PrivacyPage />}   />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
