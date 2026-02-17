import Link from 'next/link';
import { BookOpen, MapPin, Target, Lightbulb, Users, Award, Heart, ShieldCheck } from 'lucide-react';

// ... imports remain the same

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-slate-950 text-slate-200">
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/30 rounded-full filter blur-[120px] opacity-40 pointer-events-none"></div>
                <div className="container relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-900/50 border border-slate-700 text-blue-400 text-xs font-bold tracking-[0.2em] mb-8 shadow-sm uppercase animate-in fade-in slide-in-from-bottom-4 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        Est. 2020 in Digos City
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Our Story & <span className="title-gradient">Purpose</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                        Grely’s Pharma Enterprise Inc. is a proudly Filipino-owned company dedicated to providing advanced water purification solutions to families in Digos City and beyond.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-slate-950 relative border-t border-slate-900">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900/50 pointer-events-none"></div>
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Sidebar / Navigation */}
                        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 h-fit">
                            <div className="p-8 bg-slate-900 rounded-[2rem] border border-slate-800 shadow-xl shadow-slate-950/50">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-blue-500">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Headquarters</h3>
                                </div>

                                <div className="w-full h-64 bg-slate-950 rounded-2xl overflow-hidden relative border border-slate-800 group cursor-pointer">
                                    <img
                                        src="/assets/Gemini_Generated_Image_d0bjupd0bjupd0bj.png"
                                        alt="Grely's Pharma Headquarters"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                                        {/* Optional Overlay Content */}
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:block px-4">
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-widest border-l-2 border-blue-600 pl-4 py-2">
                                    Built on trust, innovation, and community service.
                                </p>
                            </div>
                        </div>

                        {/* Prose Content */}
                        <div className="lg:col-span-8 space-y-20">

                            {/* Company Story */}
                            <div className="prose prose-lg prose-invert max-w-none">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-900/20">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold m-0 text-white">The Company Story</h2>
                                </div>
                                <p className="text-slate-400 leading-relaxed">
                                    Grely’s Pharma Enterprise Inc. was established with one core mission: to improve the quality of life for Filipino families. While our roots began in general health distribution, we recognized a critical need for accessible, safe, and high-quality drinking water in our community.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Today, we are proud to be a leading provider of the **UltraPure Water Purification System**. located in the heart of Digos City, we have earned the trust of households and businesses alike by delivering reliable filtration technology that ensures every drop is pure and safe.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Our commitment extends beyond just selling a product; we are dedicated to uplifting health standards across Mindanao by making advanced water purification accessible to everyone.
                                </p>
                            </div>

                            {/* Mission & Vision Cards - Dark Tiles */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group shadow-2xl shadow-slate-950/20 border border-slate-800">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                    <Target className="w-10 h-10 text-blue-400 mb-6" />
                                    <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm font-light">
                                        To safeguard the health of communities by providing advanced, high-quality water purification solutions. We commit to delivering safe, trusted, and effective systems that support healthier lifestyles for every family.
                                    </p>
                                </div>

                                <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden group shadow-2xl shadow-blue-900/30 border border-blue-900/30">
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                    <Lightbulb className="w-10 h-10 text-blue-200 mb-6" />
                                    <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                                    <p className="text-blue-100 leading-relaxed text-sm font-light">
                                        To become the most trusted provider of water purification technology in Mindanao. We aim to build a future where every home has access to clean, safe drinking water through our innovative solutions.
                                    </p>
                                </div>
                            </div>

                            {/* Core Values */}
                            <div>
                                <h2 className="text-3xl font-bold mb-10 text-white">Core Values</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: 'Integrity', desc: 'Honesty, transparency, and professionalism.', icon: ShieldCheck },
                                        { title: 'Quality Assurance', desc: 'Strict standards for water purity.', icon: Award },
                                        { title: 'Customer Commitment', desc: 'Service that goes beyond expectations.', icon: Users },
                                        { title: 'Innovation', desc: 'Modern filtration technologies.', icon: Lightbulb },
                                        { title: 'Community Care', desc: 'Improving health one drop at a time.', icon: Heart },
                                    ].map((val, i) => (
                                        <div key={i} className="flex gap-5 p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-700/50 hover:bg-slate-800 transition-all duration-300 group">
                                            <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                <val.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{val.title}</h4>
                                                <p className="text-sm text-slate-400 font-light">{val.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Break - Minimalist */}
            <section className="h-80 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-950"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </section>
        </div>
    );
}
