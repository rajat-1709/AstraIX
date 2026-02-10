import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';


declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Google Analytics Page View Tracking
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: currentPage === 'home' ? 'Home' : 'Contact',
        page_path: currentPage === 'home' ? '/' : '/contact'
      });
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <Home onNavigate={setCurrentPage} />
        ) : (
          <Contact />
        )}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
