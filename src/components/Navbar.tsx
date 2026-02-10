import React, { useState, useEffect } from 'react';

interface NavbarProps {
    onNavigate: (page: 'home' | 'contact') => void;
    currentPage: 'home' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (page: 'home' | 'contact') => {
        onNavigate(page);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div
                            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group z-50"
                            onClick={() => handleLinkClick('home')}
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-vibrant via-accent-indigo to-accent-cyan rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-accent-pink/20 group-hover:shadow-accent-pink/40 transition-all duration-300 transform group-hover:rotate-6">
                                A
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-gray-900 group-hover:text-primary-vibrant transition-colors">
                                Astra<span className="iridescent-text">IX</span>
                            </span>
                        </div>

                        {/* Desktop Navigation - Hidden for now */}
                        <div className="hidden md:block">
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={() => handleLinkClick('contact')}
                                className="bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 active:scale-95"
                            >
                                Let's Talk <span className="material-icons-outlined text-sm">chat_bubble_outline</span>
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="-mr-2 flex md:hidden z-50">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-600 hover:text-primary-vibrant hover:bg-white/50 focus:outline-none transition-all"
                            >
                                <span className="material-icons-outlined text-3xl">
                                    {isMobileMenuOpen ? 'close' : 'menu'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <div className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-all duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
                    <button
                        onClick={() => handleLinkClick('home')}
                        className={`text-3xl font-bold transition-colors ${currentPage === 'home' ? 'text-primary-vibrant' : 'text-gray-900'}`}
                    >
                        Home
                    </button>

                    <button
                        onClick={() => handleLinkClick('contact')}
                        className="w-full max-w-xs bg-gradient-to-r from-primary-vibrant via-accent-indigo to-accent-cyan text-white px-8 py-5 rounded-2xl text-xl font-bold shadow-xl shadow-primary-vibrant/20"
                    >
                        Let's Talk
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
