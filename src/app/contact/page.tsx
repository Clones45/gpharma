import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden pt-20">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full filter blur-[100px] opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full filter blur-[100px] opacity-60 pointer-events-none"></div>

            <div className="container relative z-10 py-20">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-700 text-sm font-medium shadow-sm animate-in fade-in slide-in-from-bottom-4">
                        <MessageSquare className="w-4 h-4" />
                        Get in Touch
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
                        Let's Start a <span className="title-gradient">Conversation</span>
                    </h1>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                        Have questions about our products or services? We're here to help. Reach out to our dedicated team today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info Cards */}
                    <div className="space-y-8">
                        {[
                            {
                                icon: MapPin,
                                title: 'Visit Our Office',
                                content: 'Lim 3rd Street, Digos City, Davao del Sur, 8002',
                                action: 'Get Directions'
                            },
                            {
                                icon: Phone,
                                title: 'Call Us Directly',
                                content: '(082) 555-1234',
                                action: 'Call Now'
                            },
                            {
                                icon: Mail,
                                title: 'Email Support',
                                content: 'info@grelyspharma.com',
                                action: 'Send Email'
                            },
                            {
                                icon: Clock,
                                title: 'Business Hours',
                                content: 'Mon - Sat: 8:00 AM - 5:00 PM',
                                action: 'View Calendar'
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-6 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                    <p className="text-slate-500 font-medium">{item.content}</p>
                                    <button className="text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-1 group-hover:gap-2 duration-300">
                                        {item.action} &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form - Luxury Glass */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-50 rounded-[2rem] transform rotate-2 pointer-events-none"></div>
                        <div className="relative bg-white/80 backdrop-blur-xl p-10 rounded-[1.5rem] border border-white/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">First Name</label>
                                        <input type="text" placeholder="John" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Last Name</label>
                                        <input type="text" placeholder="Doe" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                                    <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-blue-500 outline-none transition-all text-slate-600 font-medium cursor-pointer">
                                        <option>General Inquiry</option>
                                        <option>Product Information</option>
                                        <option>Partnership Proposal</option>
                                        <option>Support</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                                    <textarea rows={5} placeholder="How can we help you?" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900 resize-none"></textarea>
                                </div>

                                <button type="button" className="w-full btn btn-primary py-4 text-lg group">
                                    Send Message
                                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
