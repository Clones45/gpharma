
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function UltraPurePage() {
    return (
        <main className={styles.container}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.productTitle}>UltraPURE Plus</h1>
                    <p className={styles.productSlogan}>"Pure Water, Pure Health"</p>

                    <Image
                        src="/products/ultrapure-1.jpg"
                        alt="UltraPURE Water Purifier Unit"
                        width={800}
                        height={500}
                        className={styles.heroImage}
                        priority
                    />

                    <div style={{ marginTop: '2rem' }}>
                        <Link href="/portal" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem' }}>
                            Order Now via Agent
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className={styles.featuresSection}>
                <h2 className={styles.sectionTitle}>Why Choose UltraPURE?</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>💧</div>
                        <h3 className={styles.cardTitle}>Multi-Stage Filtration</h3>
                        <p className={styles.cardText}>
                            Advanced 6-stage filtration system combining Ceramic, Granular Activated Carbon (GAC), and Mineral stones to remove 99% of harmful contaminants.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>🛡️</div>
                        <h3 className={styles.cardTitle}>Certified Safety</h3>
                        <p className={styles.cardText}>
                            FDA Registered (No: O-13-303). Proven to remove Bacteria, Viruses, and Heavy Metals like Lead and Mercury ensuring your family's safety.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>💰</div>
                        <h3 className={styles.cardTitle}>Economical & Eco-Friendly</h3>
                        <p className={styles.cardText}>
                            Stop buying bottled water. One UltraPURE cartridge replaces thousands of plastic bottles, saving you money and protecting the environment.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>🛠️</div>
                        <h3 className={styles.cardTitle}>Versatile Installation</h3>
                        <p className={styles.cardText}>
                            Easy DIY installation. Compatible with standard faucets (Inside/Outside thread) or can be wall-mounted. No electricity required.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Specs from Brochure */}
            <section className={styles.featuresSection} style={{ background: 'white' }}>
                <h2 className={styles.sectionTitle}>Technical Composition</h2>
                <div className={styles.grid} style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
                    <div>
                        <Image
                            src="/products/ultrapure-2.jpg"
                            alt="UltraPURE Technical Breakdown"
                            width={600}
                            height={800}
                            style={{ borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                    <div>
                        <ul style={{ listStyle: 'none' }}>
                            <li className={styles.card} style={{ marginBottom: '1rem' }}>
                                <strong>Granular Activated Carbon (HGAC)</strong>: Sourced locally, highly effective in removing impurities and contaminants.
                            </li>
                            <li className={styles.card} style={{ marginBottom: '1rem' }}>
                                <strong>Alkaline Water</strong>: Increases pH level to potential 8.5+, neutralizing body acidity and boosting immunity.
                            </li>
                            <li className={styles.card} style={{ marginBottom: '1rem' }}>
                                <strong>Mineral Stones</strong>: Adds essential minerals like Calcium, Magnesium, and Potassium back into your water.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Ready to transform your water?</h2>
                <p className={styles.ctaText}>Contact an authorized Grely's Pharma Agent today.</p>
                <Link href="/portal" className="btn" style={{ background: 'white', color: 'var(--color-primary)' }}>
                    Partner Login
                </Link>
            </section>
        </main>
    );
}
