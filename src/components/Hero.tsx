import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={`${styles.blob} ${styles.blob1}`} />
                <div className={`${styles.blob} ${styles.blob2}`} />
            </div>

            <div className={styles.content}>
                <div className={styles.logoWrapper}>
                    <Image
                        src="/assets/logo.png"
                        alt="Grely's Pharma"
                        width={120}
                        height={120}
                        className={styles.logoLg}
                        priority
                    />
                </div>

                <h1 className={styles.title}>
                    Grely's Pharma Enterprise INC
                </h1>

                <p className={styles.subtitle}>
                    Pioneering the future of pharmaceutical solutions with premium care, advanced research, and global standards.
                </p>

                <div className={styles.actions}>
                    <Link href="/portal" className="btn btn-primary">
                        Enter Portal
                    </Link>
                    <Link href="#contact" className="btn btn-glass">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
