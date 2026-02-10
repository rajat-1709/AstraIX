import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import CTA from '../components/CTA';

interface HomeProps {
    onNavigate: (page: 'home' | 'contact') => void;
}

import SEO from '../components/SEO';

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <>
            <SEO
                title="AI Website Building & Custom Web App Development"
                description="AstraIX is a premier AI website building agency. We specialize in custom web app development, automated coding solutions, and enterprise software for the USA and Europe markets."
                keywords="AI website building, best AI website builder, web app development, custom software development, automated coding, AstraIX, AI web design, software agency USA, software agency Europe"
            />
            <Hero onNavigate={onNavigate} />
            <Features />
            <Process />
            <CTA onNavigate={onNavigate} />
        </>
    );
};

export default Home;
