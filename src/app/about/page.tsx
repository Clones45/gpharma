import Link from 'next/link';
import { BookOpen, MapPin, Target, Lightbulb, Users, Award, Heart, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full filter blur-[120px] opacity-40 pointer-events-none"></div>
                <div className="container relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-slate-200 text-blue-700 text-xs font-bold tracking-[0.2em] mb-8 shadow-sm uppercase animate-in fade-in slide-in-from-bottom-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        Est. 2020 in Digos City
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
                        Our Story & <span className="title-gradient">Purpose</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                        Grely’s Pharma Enterprise Inc. is a proudly Filipino-owned pharmaceutical and wellness solutions company based in Digos City, Davao del Sur.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-white relative">
                <div className="absolute inset-0 bg-pattern opacity-[0.4] pointer-events-none"></div>
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Sidebar / Navigation */}
                        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 h-fit">
                            <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Headquarters</h3>
                                </div>
                                <p className="text-slate-500 mb-8 leading-relaxed">
                                    Lim 3rd Street, Digos City,<br />Davao del Sur, 8002
                                </p>
                                <div className="w-full h-48 bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200 group cursor-pointer">
                                    {/* Map Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-50 group-hover:bg-slate-100 transition-colors">
                                        <span className="font-medium text-sm">View on Map</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:block px-4">
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest border-l-2 border-blue-600 pl-4 py-2">
                                    Built on trust, innovation, and community service.
                                </p>
                            </div>
                        </div>

                        {/* Prose Content */}
                        <div className="lg:col-span-8 space-y-20">

                            {/* Company Story */}
                            <div className="prose prose-lg prose-slate max-w-none">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-900/20">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold m-0 text-slate-900">The Company Story</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    Grely’s Pharma Enterprise Inc. was established with one core mission: to make essential healthcare and wellness products more accessible to Filipino families. Located in the heart of Digos City, the company began by supplying pharmaceuticals and essential health products, quickly earning the trust of customers through reliable service and quality-assured items.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Over the years, the company has steadily grown to become one of the emerging leaders in the region—recognized for its commitment to excellence, its dependable workforce, and its dedication to uplifting the health standards of every community it serves.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    From a small distributor to a growing enterprise with expanding solutions, Grely’s Pharma remains committed to becoming a key player in health and wellness in Mindanao.
                                </p>
                            </div>

                            {/* Mission & Vision Cards - Glass Tiles */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                    <Target className="w-10 h-10 text-blue-400 mb-6" />
                                    <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm font-light">
                                        To safeguard the well-being of communities by providing accessible, high-quality pharmaceutical products, medical supplies, and advanced wellness solutions. We commit to delivering safe, trusted, and effective products that support healthier lifestyles.
                                    </p>
                                </div>

                                <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-blue-900 text-white relative overflow-hidden group shadow-2xl shadow-blue-900/30">
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                    <Lightbulb className="w-10 h-10 text-blue-200 mb-6" />
                                    <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                                    <p className="text-blue-100 leading-relaxed text-sm font-light">
                                        To become one of the most trusted and innovative healthcare and wellness providers in Mindanao. We aim to build a business that delivers long-term positive impact in the lives of the communities we serve through quality and customer satisfaction.
                                    </p>
                                </div>
                            </div>

                            {/* Core Values */}
                            <div>
                                <h2 className="text-3xl font-bold mb-10 text-slate-900">Core Values</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: 'Integrity', desc: 'Honesty, transparency, and professionalism.', icon: ShieldCheck },
                                        { title: 'Quality Assurance', desc: 'Strict standards and reliable products.', icon: Award },
                                        { title: 'Customer Commitment', desc: 'Service that goes beyond expectations.', icon: Users },
                                        { title: 'Innovation', desc: 'Modern solutions and evolving technologies.', icon: Lightbulb },
                                        { title: 'Community Care', desc: 'Improve lives genuinely.', icon: Heart },
                                    ].map((val, i) => (
                                        <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                                            <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                <val.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{val.title}</h4>
                                                <p className="text-sm text-slate-500 font-light">{val.desc}</p>
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
                <div className="absolute inset-0 bg-slate-900"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </section>
        </div>
    );
}
