import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        if (form.current) {
            emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
                .then((result) => {
                    console.log(result.text);
                    setStatus('success');
                    if (form.current) form.current.reset();
                }, (error) => {
                    console.log(error.text);
                    setStatus('error');
                });
        }
    };

    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-slate-50">
            <SEO
                title="Contact AstraIX | Start Your AI Project"
                description="Get in touch with AstraIX for your next web application or AI project. We serve clients in the USA, Europe, and worldwide."
                keywords="contact AstraIX, hire AI developers, web app development agency, software consultancy"
            />
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-primary-vibrant/10 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-indigo/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -left-12 top-20 w-32 h-32 bg-gradient-to-tr from-pink-400/30 to-purple-500/30 rounded-full blur-2xl animate-pulse -z-10"></div>
                        <span className="inline-block py-1 px-3 rounded-full bg-primary-vibrant/10 text-primary-vibrant text-xs font-bold tracking-wider uppercase mb-6 border border-primary-vibrant/20">
                            Contact Us
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
                            Let’s Build Your <br />
                            <span className="iridescent-text">AI-Powered Future</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light max-w-lg">
                            Ready to transform your business? Our team of experts is here to turn your abstract ideas into profitable digital realities. No technical jargon, just clear results.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="relative w-16 h-16 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    <div className="absolute inset-0 bg-blue-100 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                                    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 z-10">
                                        <span className="material-icons-outlined text-3xl text-accent-cyan">email</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us Directly</h3>
                                    <p className="text-gray-500 mb-1">For general inquiries and partnerships</p>
                                    <a className="text-primary-vibrant font-semibold hover:text-pink-400 transition-colors text-lg" href="mailto:mail.astraix@gmail.com">mail.astraix@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="relative w-16 h-16 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    <div className="absolute inset-0 bg-green-100 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform"></div>
                                    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 z-10">
                                        <span className="material-icons-outlined text-3xl text-green-500">chat</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Connect on WhatsApp</h3>
                                    <p className="text-gray-500 mb-1">Fastest way to reach us</p>
                                    <a
                                        className="text-green-600 font-bold hover:text-green-500 transition-colors text-lg flex items-center gap-2"
                                        href="https://wa.me/917309251383?text=Hi%20AstraIX%2C%20I%27d%20like%20to%20discuss%20a%20potential%20project."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Click to Chat <span className="material-icons-outlined text-sm">open_in_new</span>
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="relative w-16 h-16 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    <div className="absolute inset-0 bg-purple-100 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform"></div>
                                    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 z-10">
                                        <span className="material-icons-outlined text-primary-vibrant text-3xl">location_on</span>
                                    </div>
                                </div>
                             //   <div>
                                  //  <h3 className="text-lg font-bold text-gray-900 mb-1">Global Headquarters</h3>
                                  //  <p className="text-gray-500">
                                  //      1200 Innovation Blvd, Suite 400<br />
                                  //      San Francisco, CA 94103
                                  //  </p>
                                //</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-accent-cyan to-blue-500 opacity-20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary-vibrant to-purple-600 opacity-20 rounded-full blur-3xl"></div>
                        <div className="glass-panel rounded-3xl p-8 lg:p-10 shadow-2xl relative z-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Start a Conversation</h2>
                            <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="first-name">First Name</label>
                                        <input name="first_name" required className="w-full rounded-xl form-input-glass px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-0 transition-all outline-none" id="first-name" placeholder="Jane" type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="last-name">Last Name</label>
                                        <input name="last_name" required className="w-full rounded-xl form-input-glass px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-0 transition-all outline-none" id="last-name" placeholder="Doe" type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Work Email</label>
                                    <input name="email" required className="w-full rounded-xl form-input-glass px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-0 transition-all outline-none" id="email" placeholder="jane@company.com" type="email" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="company">Company Name</label>
                                    <input name="company" className="w-full rounded-xl form-input-glass px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-0 transition-all outline-none" id="company" placeholder="Acme Inc." type="text" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">How can we help?</label>
                                    <textarea name="message" required className="w-full rounded-xl form-input-glass px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-0 transition-all outline-none resize-none" id="message" placeholder="Tell us about your project goals..." rows={4}></textarea>
                                </div>
                                <button
                                    disabled={status === 'sending'}
                                    className={`w-full bg-gradient-to-r from-primary-vibrant via-purple-500 to-accent-indigo text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-primary-vibrant/30 hover:shadow-primary-vibrant/50 hover:-translate-y-1 active:translate-y-0 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2`}
                                    type="submit"
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>

                                {status === 'error' && (
                                    <div className="text-red-500 text-center font-medium mt-2">
                                        Failed to send message. Please try again or email us directly.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {status === 'success' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform transition-all scale-100 animate-scale-in relative text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 shadow-inner">
                            <span className="material-icons-outlined text-4xl">check_circle</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Transmission Received! 🚀</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            AstraIX has successfully received your message. Our team will be reviewing it and will initiate contact shortly to discuss your future project.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="w-full bg-gradient-to-r from-primary-vibrant to-accent-pink text-white py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        >
                            Send Another Message
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
