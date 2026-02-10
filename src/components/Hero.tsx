import React from 'react';

interface HeroProps {
    onNavigate: (page: 'home' | 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-accent-pink/15 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-60"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-accent-cyan/15 rounded-full blur-[80px] -z-10 mix-blend-multiply opacity-60"></div>
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-accent-lime/10 rounded-full blur-[90px] -z-10 mix-blend-multiply opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="text-left max-w-2xl relative order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/40 backdrop-blur-md text-gray-800 text-sm font-bold shadow-sm mb-6 hover:scale-105 transition-transform cursor-default">
                            <span className="text-xl">✨</span>
                            <span>Turning dreams into digital reality</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Build something <br />
                            <span className="iridescent-text">extraordinary.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-medium">
                            We help visionary founders and businesses launch beautiful, easy-to-use software without the tech headaches.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch">
                            <button
                                onClick={() => onNavigate('contact')}
                                className="w-full sm:w-auto bg-gradient-to-r from-primary-vibrant to-accent-indigo text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-vibrant hover:shadow-pink-500/40 hover:-translate-y-1 active:translate-y-0 relative overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Build Your Solution
                                    <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                        </div>

                        <div className="mt-12 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <img
                                        key={i}
                                        alt={`Client ${i}`}
                                        className="w-10 h-10 rounded-full border-2 border-white ring-2 ring-transparent hover:ring-accent-pink hover:z-10 transition-all cursor-pointer"
                                        src={`https://picsum.photos/seed/${i + 42}/100/100`}
                                    />
                                ))}

                            </div>
                            <p className="text-sm font-semibold text-gray-600">Trusted by happy founders worldwide</p>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
                        <div className="relative w-full h-full max-w-lg mx-auto animate-float">
                            {/* Main Sphere Image */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <img
                                    alt="Vibrant iridescent 3D sphere"
                                    className="w-[100%] h-auto object-contain drop-shadow-2xl filter contrast-125 saturate-150"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALu0IoE2AGbKCaxMhD83U-QegvSjbsqMmlKX_qsWkHE7SviXuVmdNSdZEzS35yCOJZ75mDMl0YX6BKSlLsiUApPQPRj6disgQjuuU0ARrcdPUfcbtsuMOenyP8_l6cruO1PQttzjeOx5GXdua6uJGoG4M-RakVGNzo3pEV1_mwv1O-T6brE0wLVJ815-gjxH65JdPuZLX1M5m0_0CKzqYCiNEcEpy1diRSt_jJchRVvMtXl_V2cBU-ld0vt_EnS1EqALm2TrHiQU4"
                                />
                            </div>

                            {/* Revenue Badge */}
                            <div className="absolute top-10 left-0 glass-panel p-4 rounded-2xl shadow-xl z-20 w-auto animate-float-delayed max-w-[200px]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-accent-lime">
                                        <span className="material-icons-outlined">trending_up</span>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Revenue</div>
                                        <div className="text-lg font-bold text-gray-900">+124%</div>
                                    </div>
                                </div>
                            </div>

                            {/* User Love Badge */}
                            <div className="absolute bottom-20 right-4 glass-panel p-4 rounded-2xl shadow-xl z-20 w-auto animate-float-reverse max-w-[220px]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-accent-pink">
                                        <span className="material-icons-outlined">favorite</span>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">User Love</div>
                                        <div className="flex text-yellow-400 text-sm">★★★★★</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
