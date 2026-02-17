import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Sparkles,
  Handshake,
  Building2,
  Droplets,
  ArrowRight,
  CheckCircle2,
  Leaf
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-950 text-slate-200">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="absolute inset-0 bg-pattern opacity-[0.1]"></div>

        {/* Subtle Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 via-transparent to-blue-900/20"></div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-24 pb-12">
          <div className="space-y-8 lg:space-y-10 text-center lg:text-left px-4 lg:px-0">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/50 border border-slate-700 text-blue-400 text-sm font-medium shadow-sm animate-in fade-in slide-in-from-bottom-4 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Advanced Water Purification
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 text-white">
              Pure Water, <br />
              <span className="title-gradient">Healthier Life.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-100 leading-relaxed font-light">
              Grely&apos;s Pharma Enterprise Inc. brings you the **UltraPure Water Purification System**—ensuring safe, clean, and great-tasting water for every Filipino home.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
              <Link href="/products/ultrapure" className="btn btn-primary text-lg group w-full sm:w-auto">
                Discover UltraPure
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn btn-outline border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white text-lg w-full sm:w-auto">
                About Us
              </Link>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 hidden lg:block px-4">
            {/* Abstract Luxury Glass Card */}
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Main Floating Card - replaced with Image */}
              <div className="absolute inset-4 bg-white/5 backdrop-blur-md rounded-[3rem] shadow-2xl border border-white/10 flex items-center justify-center p-4 z-10 transform hover:scale-[1.01] transition-all duration-700 overflow-hidden">
                <img
                  src="/assets/Gemini_Generated_Image_mjzfx4mjzfx4mjzf.png"
                  alt="UltraPure Water System"
                  className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section - Clean Minimalist Dark */}
      <section className="py-20 bg-slate-950 border-y border-slate-900">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: 'Founded', value: '2020+', desc: 'Years of Excellence' },
              { label: 'Purity', value: '99.9%', desc: 'Contaminant Free' },
              { label: 'Community', value: '1000+', desc: 'Families Served' },
              { label: 'Quality', value: '100%', desc: 'Certified Safe' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2 p-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em]">{stat.label}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Tiles */}
      <section className="section-padding bg-slate-950 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Why Choose UltraPure?</h2>
            <p className="text-lg text-slate-400 leading-relaxed font-light">
              We are dedicated to providing the cleanest, safest drinking water for your family through innovation and quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[
              { title: 'Advanced Filtration', desc: 'Multi-stage technology removes impurities and bacteria.', icon: ShieldCheck },
              { title: 'Best Taste', desc: 'Preserves essential minerals for refreshing taste.', icon: Sparkles },
              { title: 'Cost-Effective', desc: 'Save money while enjoying premium quality water.', icon: Handshake },
              { title: 'Eco-Friendly', desc: 'Reduce plastic waste with your own purification system.', icon: Leaf },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-700/50 hover:bg-slate-800 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                  <item.icon className="w-7 h-7 text-slate-400 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight - Detailed Feature */}
      <section className="section-padding bg-slate-900 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4">
            <Link href="/products/ultrapure" className="order-2 lg:order-1 relative px-6 py-10 sm:px-8 sm:py-12 bg-slate-950 rounded-[2.5rem] group/card block overflow-hidden border border-slate-800 hover:border-blue-900/50 transition-colors">
              <div className="absolute inset-0 bg-pattern opacity-[0.05] rounded-[2.5rem]"></div>

              <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-2 shadow-2xl max-w-md mx-auto transform rotate-[-2deg] group-hover/card:rotate-0 transition-transform duration-500">
                <img
                  src="/assets/product.png"
                  alt="UltraPure Product detailed view"
                  className="w-full h-auto rounded-xl shadow-lg opacity-90 group-hover/card:opacity-100 transition-opacity"
                />
                <div className="flex justify-between items-center p-4">
                  <div>
                    <h4 className="font-bold text-white text-lg">UltraPure System</h4>
                    <p className="text-sm text-slate-500">Professional Grade</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center group-hover/card:bg-blue-600 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase tracking-wider text-sm justify-center lg:justify-start">
                <Sparkles className="w-4 h-4" />
                Signature Product
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Pure Water for <span className="text-blue-500">Every Household</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                Our UltraPure Water Purification System is a modern, cost-effective solution designed to ensure families have access to clean and safe drinking water directly from their tap.
              </p>
              <ul className="space-y-4 pt-4 text-left inline-block lg:block">
                {['Modern Filtration Technology', 'Eliminates Harmful Contaminants', 'Promotes Healthier Living'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link href="/products/ultrapure" className="btn btn-outline border-slate-700 text-white hover:bg-slate-800 w-full sm:w-auto">
                  See Full Specifications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist Dark */}
      <section className="py-32 bg-slate-950 relative overflow-hidden text-center px-4">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full filter blur-[100px]"></div>

        <div className="container relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">Ready for a Healthier Tomorrow?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Join thousands of families who trust Grely&apos;s Pharma for their clean water needs. Experience the difference of true purity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-900/20 px-10 py-5 text-lg w-full sm:w-auto">
              Get Your System Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
