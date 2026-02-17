import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';

// ... imports remain the same

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative w-9 h-9">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Grely's Pharma Logo"
                                    fill
                                    className="object-contain opacity-90"
                                />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">Grely’s Pharma</span>
                        </div>
                        <p className="text-slate-400 max-w-sm leading-relaxed text-sm font-light">
                            Safeguarding the well-being of communities by providing accessible, high-quality pharmaceutical products, medical supplies, and advanced wellness solutions.
                        </p>
                        <div className="flex gap-3">
                            {/* Social Icons */}
                            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer shadow-sm hover:-translate-y-1">
                                <Facebook className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all cursor-pointer shadow-sm hover:-translate-y-1">
                                <Twitter className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all cursor-pointer shadow-sm hover:-translate-y-1">
                                <Instagram className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-white mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Products & Services', href: '/services' },
                                { name: 'Contact', href: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-heading font-bold text-white mb-6 text-sm uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">

                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="hover:text-blue-400 cursor-pointer transition-colors">info@grelyspharma.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>WhatsApp: +639055558267</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>Viber: +639055558267</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
                    <p>&copy; {new Date().getFullYear()} Grely’s Pharma Enterprise Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
