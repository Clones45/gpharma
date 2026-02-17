import Link from 'next/link';
import { Pill, Stethoscope, Droplets, Leaf, ArrowUpRight } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            title: 'UltraPure Water Systems',
            desc: 'Advanced purification technology that provides safe, clean, and great-tasting drinking water for Filipino households. Our systems use multi-stage filtration to eliminate contaminants while preserving essential minerals.',
            icon: Droplets,
            color: 'text-blue-400 bg-slate-900',
            highlight: true,
            link: '/products/ultrapure'
        },
        // We can add more specific water-related services later, like "Installation & Maintenance" or "Filter Replacements"
    ];

    return (
        <div className="flex flex-col bg-slate-950 text-slate-200">
            {/* Header */}
            <section className="bg-slate-950 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.05] pointer-events-none"></div>
                <div className="container relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Our <span className="title-gradient">Products</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        We provide comprehensive water purification solutions tailored to meet the highest standards of safety and quality for your home.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-slate-950 relative border-t border-slate-900">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900/50 pointer-events-none"></div>
                <div className="container relative z-10 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className={`group p-6 rounded-[2.5rem] border transition-all duration-500 flex flex-col items-center text-center ${service.highlight
                                    ? 'bg-slate-900 border-blue-900/50 shadow-2xl shadow-blue-900/10 hover:shadow-blue-900/30 hover:-translate-y-1 relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-1 lg:col-start-2'
                                    : 'bg-slate-900 border-slate-800 shadow-xl shadow-slate-950/40 hover:shadow-2xl hover:border-blue-900/30 hover:-translate-y-1'
                                    }`}
                            >
                                {service.highlight && (
                                    <div className="absolute top-0 right-0 px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-bl-2xl z-20 shadow-lg">
                                        Signature Product
                                    </div>
                                )}

                                <div className="w-full aspect-video relative mb-8 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                                    <img
                                        src="/assets/product.png"
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                    />
                                </div>

                                <div className={`w-12 h-12 rounded-xl ${service.color} border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <service.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                                    {service.desc}
                                </p>

                                <Link href={service.link || '#'} className="flex items-center text-white font-bold group-hover:text-blue-400 transition-colors cursor-pointer group/link">
                                    <span className="mr-2">Learn more</span>
                                    <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-950 border-t border-slate-900">
                <div className="container px-4">
                    <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-800">
                        {/* Abstract Glows */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-10 animate-pulse animation-delay-1000"></div>

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Need installation or support?</h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                                Contact our team to inquire about installing our UltraPure water systems in your home or business.
                            </p>
                            <div className="pt-4">
                                <Link href="/contact" className="btn bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-900/20 px-10 py-4 border-none">
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
