import Link from 'next/link';
import { Pill, Stethoscope, Droplets, Leaf, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            title: 'Pharmaceutical Distribution',
            desc: 'A broad range of safe, high-quality medicines, vitamins, and health products sourced from reputable suppliers.',
            icon: Pill,
            color: 'text-blue-600 bg-blue-50',
        },
        {
            title: 'Medical Supplies',
            desc: 'Essential equipment and healthcare tools for home or professional use, ensuring readiness and safety.',
            icon: Stethoscope,
            color: 'text-cyan-600 bg-cyan-50',
        },
        {
            title: 'UltraPure Water Systems',
            desc: 'Advanced purification technology that provides safe, clean, and great-tasting drinking water for Filipino households.',
            icon: Droplets,
            color: 'text-indigo-600 bg-indigo-50',
            highlight: true,
        },
        {
            title: 'Health & Wellness Essentials',
            desc: 'A growing line of products that support healthier habits and improved lifestyles for the modern family.',
            icon: Leaf,
            color: 'text-teal-600 bg-teal-50',
        },
    ];

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-slate-50 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.3]"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        Our Products & <span className="title-gradient">Services</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                        We provide comprehensive solutions for health, wellness, and everyday living, tailored to meet the highest standards.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className={`group p-10 rounded-[2.5rem] border transition-all duration-500 ${service.highlight
                                    ? 'bg-white border-blue-200 shadow-2xl shadow-blue-100 hover:shadow-blue-200/50 hover:-translate-y-1 relative overflow-hidden'
                                    : 'bg-white border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-blue-100 hover:-translate-y-1'
                                    }`}
                            >
                                {service.highlight && (
                                    <div className="absolute top-0 right-0 px-4 py-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-bl-2xl">
                                        Signature Product
                                    </div>
                                )}

                                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                    <service.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                                    {service.desc}
                                </p>

                                <div className="flex items-center text-slate-900 font-bold group-hover:text-blue-600 transition-colors cursor-pointer group/link">
                                    <span className="mr-2">Learn more</span>
                                    <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container">
                    <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-slate-900/20">
                        {/* Abstract Glows */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-20 animate-pulse animation-delay-1000"></div>

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Need something specific?</h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                                Contact our team to inquire about specific medications, bulk orders, or installation of our UltraPure water systems.
                            </p>
                            <div className="pt-4">
                                <Link href="/contact" className="btn bg-white text-slate-900 hover:bg-blue-50 border-none px-12 py-4">
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
