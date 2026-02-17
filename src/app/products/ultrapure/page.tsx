import Image from 'next/image';
import Link from 'next/link';
import {
    Droplets,
    ShieldCheck,
    Zap,
    Settings,
    Leaf,
    CheckCircle2,
    ArrowRight,
    Activity,
    Waves
} from 'lucide-react';
import styles from './page.module.css';

// ... imports remain the same

export default function UltraPurePage() {
    return (
        <main className={styles.container}>
            {/* SECTION 1: HERO */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.badge}>Next-Gen Filtration</span>
                    <h1 className={styles.luxuryTitle}>UltraPURE Plus</h1>
                    <p className={styles.luxurySubtitle}>
                        &quot;Pure Water, Pure Health&quot; &mdash; The billion-dollar standard in Philippine water purification, engineered for the future of wellness.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/portal" className="btn bg-blue-600 text-white hover:bg-blue-700 border-none shadow-lg shadow-blue-900/20">
                            Partner with Us <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <button className="btn btn-outline border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                            Technical Data
                        </button>
                    </div>

                    <div className="mt-12 flex gap-8 items-center">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">99%</div>
                            <p className="text-sm text-slate-400">Contaminant Removal</p>
                        </div>
                        <div className="w-px h-10 bg-slate-800"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">8.5+</div>
                            <p className="text-sm text-slate-400">pH Alkalinity</p>
                        </div>
                        <div className="w-px h-10 bg-slate-800"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">FDA</div>
                            <p className="text-sm text-slate-400">Certified Safety</p>
                        </div>
                    </div>
                </div>

                <div className={styles.heroVisual}>
                    <Image
                        src="/assets/product.png"
                        alt="UltraPURE Plus Premium Unit"
                        width={700}
                        height={700}
                        className={styles.productDisplay}
                        priority
                    />
                </div>
            </section>

            {/* SECTION 2: CORE TECHNOLOGY */}
            <section className={styles.compositionSection}>
                <div className={styles.section}>
                    <div className={styles.compositionGrid}>
                        <div className={styles.compositionImageWrapper}>
                            <Image
                                src="/products/ultrapure-tech.png"
                                alt="UltraPURE Technical Breakdown"
                                width={600}
                                height={600}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-white">Advanced 6-Stage Molecular Architecture</h2>
                            <p className="text-slate-400 mb-12 text-lg">
                                Unlike standard filters, UltraPURE uses a proprietary multi-layer system researched specifically under Philippine water conditions.
                            </p>

                            <ul className={styles.compositionList}>
                                <li className={styles.compositionItem}>
                                    <strong className="text-white">Precision Multi-Filtration</strong>
                                    <p className="text-sm text-slate-400">Initial sediment and particulate removal to protect the core heart.</p>
                                </li>
                                <li className={styles.compositionItem}>
                                    <strong className="text-white">High-Grade Activated Carbon (HGAC)</strong>
                                    <p className="text-sm text-slate-400">Locally sourced coconut shell carbon with massive adsorptive surface area.</p>
                                </li>
                                <li className={styles.compositionItem}>
                                    <strong className="text-white">Mineral Alkaline Core</strong>
                                    <p className="text-sm text-slate-400">Adds Magnesium, Calcium, and Potassium for healthy, refreshing water.</p>
                                </li>
                                <li className={styles.compositionItem}>
                                    <strong className="text-white">Triple Filter Screens</strong>
                                    <p className="text-sm text-slate-400">Final micro-polishing layers for crystal-clear output.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE GAC ADVANTAGE */}
            <section className={styles.section}>
                <h2 className="text-center text-4xl font-bold mb-4 text-white">Scientific Purity: The HGAC Factor</h2>
                <p className="text-center text-slate-400 mb-16 max-width-800 mx-auto">
                    Granular Activated Carbon is the industry secret to removing invisible threats that standard filters miss.
                </p>

                <div className={styles.infoGrid}>
                    {[
                        {
                            icon: <Droplets />,
                            title: "Adsorption Power",
                            desc: "Porous structure captures organic compounds and chlorine on a molecular level."
                        },
                        {
                            icon: <Zap />,
                            title: "Chemical Neutralization",
                            desc: "Effectively removes VOCs, pesticides, and harsh industrial herbicides."
                        },
                        {
                            icon: <ShieldCheck />,
                            title: "Heavy Metal Binding",
                            desc: "Targets Lead, Mercury, and Copper to prevent long-term neurological health risks."
                        },
                        {
                            icon: <Activity />,
                            title: "Taste & Odor Perfection",
                            desc: "Eliminates hydrogen sulfide (rotten egg smell) and unpleasant organic decay odors."
                        },
                        {
                            icon: <ShieldCheck />,
                            title: "THM Elimination",
                            desc: "Removes cancer-linked Trihalomethanes, common by-products of chlorine disinfection."
                        },
                        {
                            icon: <Leaf />,
                            title: "Eco-Friendly Source",
                            desc: "Sourced sustainably from Philippine coconut shells, reducing global carbon footprint."
                        }
                    ].map((benefit, i) => (
                        <div key={i} className={styles.benefitBox}>
                            <div className={styles.cardIcon}>{benefit.icon}</div>
                            <h3 className={styles.cardTitle}>{benefit.title}</h3>
                            <p className={styles.cardText}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 4: ALKALINITY & WELLNESS */}
            <section className={`${styles.section} bg-slate-950 border-y border-slate-900`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-white">Hydration Reimagined: Alkalinity & ORP</h2>
                        <p className="text-lg text-slate-400 mb-8">
                            True health isn&apos;t just about what you take out, it&apos;s about what you give back. UltraPURE transforms acidic tap water into living, alkaline hydration.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Waves className="text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">pH Optimization</h4>
                                    <p className="text-sm text-slate-400">Raises pH to 8.5+, helping neutralize body acidity and oxidative stress.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Mineral Release</h4>
                                    <p className="text-sm text-slate-400">Slow-release Magnesium and Calcium improve bone density and metabolism.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Zap className="text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Anti-Oxidant (Negative ORP)</h4>
                                    <p className="text-sm text-slate-400">Reduces Oxidation-Reduction Potential, giving water natural antioxidant properties.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.glassCard}>
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">Emergency & Rural Readiness</h3>
                        <p className="mb-6 text-center text-slate-300">UltraPURE is engineered for the unexpected. From regular city tap to unreliable rural sources.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                <div className="font-bold text-white mb-1">Disaster-Resistant</div>
                                <p className="text-xs text-slate-400">Portable design for immediate water safety during emergencies.</p>
                            </div>
                            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                <div className="font-bold text-white mb-1">No Power Needed</div>
                                <p className="text-xs text-slate-400">Works purely on water pressure, 100% mechanical reliability.</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                            <div className="text-sm text-blue-400 mb-2">Extended Lifespan</div>
                            <div className="text-xl font-bold text-white">Reusable & Rejuvenatable</div>
                            <p className="text-xs text-slate-400 mt-2">Special GAC filters can be cleaned and maintained for long-term ROI.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: INSTALLATION */}
            <section className={styles.section}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Seamless Integration</h2>
                    <p className="text-slate-400">Fits your kitchen, your lifestyle, and your needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className={styles.glassCard}>
                        <Settings className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="font-bold mb-2 text-white">Outside Thread</h3>
                        <p className="text-sm text-slate-400">1. Remove Aerator<br />2. Attach Diverter Directly</p>
                    </div>
                    <div className={styles.glassCard}>
                        <Settings className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="font-bold mb-2 text-white">Inside Thread</h3>
                        <p className="text-sm text-slate-400">1. Remove Aerator<br />2. Attach Adapter<br />3. Connect Diverter</p>
                    </div>
                    <div className={styles.glassCard}>
                        <Settings className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="font-bold mb-2 text-white">No Thread</h3>
                        <p className="text-sm text-slate-400">1. Use Universal Rubber Adapter<br />2. Tighten Securely<br />3. Connect Diverter</p>
                    </div>
                </div>

                <div className="mt-16 p-12 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-2xl">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">The Global Investment View</h3>
                        <p className="text-slate-400 max-w-md">Addressing the multi-billion dollar clean water crisis in Southeast Asia with high-margin, scalable wellness technology.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-center px-6">
                            <div className="text-2xl font-bold">10M+</div>
                            <div className="text-xs text-slate-400">Target Households</div>
                        </div>
                        <div className="text-center px-6 border-l border-slate-700">
                            <div className="text-2xl font-bold">45%</div>
                            <div className="text-xs text-slate-400">Agent Growth rate</div>
                        </div>
                    </div>
                    <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                        View Investor Pitch
                    </button>
                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="bg-slate-950 py-24 text-center text-white border-t border-slate-900">
                <h2 className="text-5xl font-bold mb-6">Invest in Purity. Invest in Life.</h2>
                <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                    Join Grely&apos;s Pharma in delivering the gold standard of water filtration to every home in the Philippines.
                </p>
                <Link href="/portal" className="btn bg-blue-600 hover:bg-blue-700 text-white border-none px-10 py-4 shadow-lg shadow-blue-900/20">
                    Become an Authorized Agent
                </Link>
            </section>
        </main>
    );
}
