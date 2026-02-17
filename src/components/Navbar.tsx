'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

// ... imports remain the same

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
                ? 'bg-slate-950/80 backdrop-blur-xl border-slate-800/50 py-3 shadow-lg shadow-black/5'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="container flex justify-between items-center px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                        <Image
                            src="/assets/logo.png"
                            alt="Grely's Pharma Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className={`text-xl font-bold tracking-tight transition-colors duration-300 text-white`}>
                        Grely’s Pharma
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'About', href: '/about' },
                        { name: 'Products', href: '/services' },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 tracking-wide ${scrolled ? 'text-slate-300' : 'text-slate-200'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-300 hover:text-blue-400 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 p-6 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'About', href: '/about' },
                        { name: 'Products', href: '/services' },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-slate-300 font-medium py-3 px-4 hover:bg-slate-900 hover:text-blue-400 rounded-xl transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
