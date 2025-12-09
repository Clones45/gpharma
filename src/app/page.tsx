import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Sparkles,
  Handshake,
  Building2,
  Droplets,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-pattern opacity-[0.4]"></div>

        {/* Subtle Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/50 via-transparent to-blue-50/30"></div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20">
          <div className="space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium shadow-sm animate-in fade-in slide-in-from-bottom-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Trusted Medical & Wellness Partner
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 text-slate-900">
              Healthier Lives, <br />
              <span className="title-gradient">Brighter Futures.</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-100 leading-relaxed font-light">
              Grely’s Pharma Enterprise Inc. is your dependable partner for pharmaceutical needs, medical supplies, and advanced water purification solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
              <Link href="/services" className="btn btn-primary text-lg group">
                Explore Our Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn btn-outline text-lg">
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 hidden lg:block">
            {/* Abstract Luxury Glass Card */}
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Main Floating Card */}
              <div className="absolute inset-8 bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white/60 flex items-center justify-center p-12 z-10 transform hover:scale-[1.02] transition-all duration-700">
                <div className="text-center space-y-8 w-full">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl mx-auto flex items-center justify-center text-white shadow-xl shadow-blue-900/20">
                    <Droplets className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">UltraPure Verification</h3>
                    <p className="text-slate-500 font-light">Advanced purification technology</p>
                  </div>

                  {/* Fake Metric Visualization */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <span>Purity Level</span>
                      <span>99.9%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[99.9%] h-full bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section - Clean Minimalist */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Founded', value: '2020+', desc: 'Years of Excellence' },
              { label: 'Products', value: '500+', desc: 'Medical Essentials' },
              { label: 'Community', value: '1000+', desc: 'Families Served' },
              { label: 'Quality', value: '100%', desc: 'Certified Safe' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">{stat.label}</div>
                <div className="text-sm text-slate-400 font-medium">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Glass Tiles */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Why Choose Grely’s Pharma?</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              We are dedicated to innovation and community growth, ensuring every product meets strict standards for safety and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Trusted', desc: 'Verified by families, clinics, and local businesses.', icon: ShieldCheck },
              { title: 'Quality Assured', desc: 'Strict standards and reliable products throughout.', icon: Sparkles },
              { title: 'Accessible', desc: 'Consistent and reliable service you can count on.', icon: Handshake },
              { title: 'Community', desc: 'Dedicated to uplifting health standards locally.', icon: Building2 },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                  <item.icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Spotlight - Clean Left/Right Layout */}
      <section className="section-padding bg-white relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative px-8 py-12 bg-slate-50 rounded-[2.5rem]">
              <div className="absolute inset-0 bg-pattern opacity-[0.5] rounded-[2.5rem]"></div>
              <div className="relative bg-white rounded-2xl border border-slate-100 p-10 shadow-2xl max-w-md mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mb-8">
                  <Droplets className="w-16 h-16 text-blue-500 opacity-80" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">UltraPure System</h4>
                    <p className="text-sm text-slate-500">Professional Grade</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm">
                <Sparkles className="w-4 h-4" />
                Signature Product
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                Pure Water for <span className="text-blue-600">Every Household</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                One of our signature innovations is the UltraPure Water Purification System—a modern, cost-effective solution designed to ensure families have access to clean and safe drinking water.
              </p>
              <ul className="space-y-4 pt-4">
                {['Modern Filtration Technology', 'Cost-Effective Solution', 'Promotes Healthier Living'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link href="/services" className="btn btn-outline">
                  Learn More About UltraPure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist Dark */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full filter blur-[100px]"></div>

        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">Ready for a Healthier Tomorrow?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Join thousands of families who trust Grely’s Pharma for their health and wellness needs. Experience the difference of true quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn bg-white text-slate-900 hover:bg-slate-100 shadow-xl shadow-blue-900/20 px-10 py-5 text-lg">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
