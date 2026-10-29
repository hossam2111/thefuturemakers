import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Services } from './pages/Services';
import { Volunteer } from './pages/Volunteer';
import { RequestAid } from './pages/RequestAid';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

// Helper component to auto-scroll to top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

// 404 Not Found component matching the original Next.js 404 screen
const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-surface-container-lowest text-center p-6 rtl">
      <div className="mb-6 w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
        <span className="material-symbols-outlined text-[64px] text-primary">wrong_location</span>
      </div>
      <h1 className="text-6xl font-black text-primary font-headline mb-4 font-mono">404</h1>
      <h2 className="text-2xl font-bold text-on-surface mb-2">عفواً، هذه الصفحة غير موجودة</h2>
      <p className="text-on-surface-variant max-w-md mx-auto mb-8 text-sm">
        يبدو أنك تبحث عن صفحة غير موجودة أو تم نقلها. يرجى العودة إلى الصفحة الرئيسية أو التحقق من الرابط.
      </p>
      <Link
        to="/"
        className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20 flex items-center gap-2"
      >
        <span className="material-symbols-outlined">home</span>
        العودة للرئيسية
      </Link>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-surface flex flex-col font-body">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/request-aid" element={<RequestAid />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
};

export default App;
