import React from 'react';

interface FooterProps {
    onNavigate: (page: 'home' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-slate-50 pt-24 pb-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="md:col-span-2">
                        <div
                            className="flex items-center gap-2 mb-8 cursor-pointer group"
                            onClick={() => onNavigate('home')}
                        >
                            <div className="w-10 h-10 bg-gradient-vibrant rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                A
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-gray-900 group-hover:text-primary-vibrant transition-colors">
                                Astra<span className="iridescent-text">IX</span>
                            </span>
                        </div>
                        <p className="text-gray-500 font-medium mb-8 max-w-xs text-lg leading-relaxed">
                            Making technology simple, beautiful, and accessible for everyone.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-8 text-xl">Company</h4>
                        <ul className="space-y-4 text-gray-500 font-bold">
                            <li><button onClick={() => onNavigate('home')} className="hover:text-primary-vibrant transition-colors">About Us</button></li>
                            <li><button onClick={() => onNavigate('contact')} className="hover:text-primary-vibrant transition-colors">Contact</button></li>
                            <li><button onClick={() => onNavigate('home')} className="hover:text-primary-vibrant transition-colors">Terms of Service</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-8 text-xl">Social</h4>
                        <ul className="space-y-4 text-gray-500 font-bold">
                            <li><a className="hover:text-primary-vibrant transition-colors" href="#">X / Twitter</a></li>
                            <li><a className="hover:text-primary-vibrant transition-colors" href="#">LinkedIn</a></li>
                            <li><a className="hover:text-primary-vibrant transition-colors" href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-vibrant to-accent-indigo rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            A
                        </div>
                        <p className="text-sm font-medium text-gray-500">© {new Date().getFullYear()} AstraIX Inc.</p>
                    </div>
                    <div className="flex gap-8 text-sm text-gray-400 font-bold">
                        <button className="hover:text-primary-vibrant transition-colors">Privacy</button>
                        <button className="hover:text-primary-vibrant transition-colors">Terms</button>
                        <a className="hover:text-primary-vibrant transition-colors" href="mailto:mail.astraix@gmail.com">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
