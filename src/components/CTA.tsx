import React from 'react';

interface CTAProps {
    onNavigate: (page: 'home' | 'contact') => void;
}

const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-2xl shadow-gray-300 group">
                {/* Glow Effects */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-accent-pink to-transparent rounded-full opacity-20 blur-[100px] pointer-events-none group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary-vibrant to-transparent rounded-full opacity-30 blur-[100px] pointer-events-none group-hover:opacity-40 transition-opacity"></div>

                <div className="relative z-10 px-8 py-20 md:py-32 text-center">
                    <h2 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight">Ready to make magic happen?</h2>
                    <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
                        Join hundreds of happy founders who transformed their ideas into reality with AstraIX.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => onNavigate('contact')}
                            className="bg-white text-gray-900 hover:bg-gray-50 px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                        >
                            Build Your Solution
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
