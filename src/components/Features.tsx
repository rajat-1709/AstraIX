import React from 'react';

const featureList = [
    {
        title: 'Launch Your Idea',
        description: 'Got a napkin sketch? We\'ll turn it into a fully functioning product faster than you think, so you can start selling sooner.',
        icon: 'rocket_launch',
        bgColor: 'bg-blue-100',
        iconColor: 'text-primary-vibrant'
    },
    {
        title: 'Grow Your Business',
        description: 'Our solutions are built to handle success. As you get more customers, your software will scale effortlessly alongside you.',
        icon: 'monitoring',
        bgColor: 'bg-pink-100',
        iconColor: 'text-accent-pink'
    },
    {
        title: 'Work with Experts',
        description: 'No jargon, no confusion. Just a friendly team of experts dedicated to guiding you through every step of the journey.',
        icon: 'groups',
        bgColor: 'bg-lime-100',
        iconColor: 'text-accent-lime'
    }
];

const Features: React.FC = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why partner with us?</h2>
                    <p className="text-lg text-gray-600 font-medium">
                        We speak your language, not just code. Our focus is on making your business successful through intuitive digital tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featureList.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-slate-50 p-10 rounded-[2.5rem] border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-gray-200 hover:-translate-y-1"
                        >
                            <div className={`w-16 h-16 mb-8 rounded-2xl ${feature.bgColor} ${feature.iconColor} flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
