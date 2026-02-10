import React from 'react';

const steps = [
    {
        num: '1. We Brainstorm',
        desc: 'We listen to your vision and map out the perfect plan to achieve it.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCskcZmZXTXz4DMXF91Lwvblm8kjNO4UAliE_OYr3fTi_eWWDRVnNEdP3LuYvkfx2IjQqvF_8hPl88IreFzLAuwWxtPcFx0U15s4bnUEv4YuwlrjKd7zMnebJ4zg2UhKPDwoavXsv10HVrOMXM8_eoW76i8s6mFogS-g8p16VujYgDvBZdJJUxslms8yn8Wer4O2--c3mjn0p1REOCHOkpXURO6CXhAg1QtDUaI00wF67wH-KthkpmRRq9o5e7SPfuU_KTnUAPXsQk',
        grad: 'from-accent-lime to-green-400',
        margin: 'mt-0',
        anim: 'animate-float'
    },
    {
        num: '2. We Build',
        desc: 'Our team creates your solution while you focus on running your business.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG47HcR4C9O09S2O819NPGe0aH6C6_fo8rGel7Ps6r1p1dtq1YTLMKcEPmYA3WojC8PAuELJcVgW-8QtOj8Bt4LoJr7pyMOiZvRfoOUsPmEZDW7Cu03F7vaYIXI2kLc-lsZTYAeQVsH9Zo6yuAluaYJ2E7Ta3-Rp7svkazr4RUQaLK2Xl5ZbwiIG9Vyaqd4CRFArUmWVoATUzgTznfhxYsViSlVQwwQ_1uJnztsFEKCc9Sy0vIED7MJQZYVUSPieGabZYrbc6Bdvk',
        grad: 'from-primary-vibrant to-blue-400',
        margin: 'md:mt-16',
        anim: 'animate-float-delayed'
    },
    {
        num: '3. You Succeed',
        desc: 'Launch with confidence and watch your idea come to life in the market.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyoJndcNmdcGq6g46X8P7tvLBtAvlBvnvYPwBsPUSbRxOVJ64JtUek7gArSr6usqtZzeNHKuHuCd_HV5D1GtsisX0UEzNlf3q6EJYuHuWGB4YI5Z53bDAZGfAk1I0Abbaq54CwjA2pxQwN2zSLs44FxGXr31EXQVQMYu6TA-QuokDKzcL9_GZyZ8RKyE0Z3Af8Ar1r3vkK5qZurcMTRUS6yZxkhRUjJrkKkLx2mW_0Dai-it2962PlLrG95Rmu5HRVeGB7ftGhgm4',
        grad: 'from-accent-pink to-purple-400',
        margin: 'md:mt-32',
        anim: 'animate-float-reverse'
    }
];

const Process: React.FC = () => {
    return (
        <section className="py-24 bg-background-light relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center mb-20">
                    <span className="px-4 py-1.5 rounded-full bg-blue-100 text-primary-vibrant font-bold text-xs uppercase tracking-widest mb-4">How it works</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">Simple steps to success</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, idx) => (
                        <div key={idx} className={`relative group ${step.margin}`}>
                            <div className="aspect-square rounded-[3rem] bg-white border border-gray-100 flex flex-col items-center justify-center p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                                <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${step.grad}`}></div>
                                <div className={`w-56 h-56 relative z-10 mb-6 transform group-hover:scale-110 transition-transform duration-500 ${step.anim}`}>
                                    <img alt={step.num} className="w-full h-full object-contain drop-shadow-2xl" src={step.img} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.num}</h3>
                                <p className="text-center text-gray-600 font-medium leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
