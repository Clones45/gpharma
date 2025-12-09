"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function PortalPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // SIMULATED AUTHENTICATION DELAY
        setTimeout(() => {
            // MOCK CREDENTIALS
            if (email === 'admin@gpharma.com' && password === 'admin123') {
                router.push('/portal/admin');
            } else if (email === 'distrib@gpharma.com' && password === 'distrib123') {
                router.push('/portal/distributor');
            } else if (email === 'agent@gpharma.com' && password === 'agent123') {
                router.push('/portal/agent');
            } else {
                setError('Invalid Credentials.');
                setLoading(false);
            }
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Portal Access</h1>
                <p className={styles.subtitle}>Grely's Pharma Enterprise System</p>

                <form onSubmit={handleLogin}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            placeholder="name@gpharma.com"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p style={{ color: 'red', fontSize: '0.85rem', marginBottom: '1rem' }}>{error}</p>}

                    <button type="submit" className={`btn btn-primary ${styles.button}`} disabled={loading}>
                        {loading ? 'Verifying...' : 'Secure Login'}
                    </button>
                </form>

                {/* DEMO CREDENTIALS BOX */}
                <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Demo Credentials</p>

                    <div style={{ display: 'grid', gap: '0.5rem', fontSize: '0.85rem', color: '#334155' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>👨‍💼 <strong>Admin</strong></span>
                            <span style={{ fontFamily: 'monospace' }}>admin@gpharma.com</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>🏭 <strong>Distributor</strong></span>
                            <span style={{ fontFamily: 'monospace' }}>distrib@gpharma.com</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>👷 <strong>Agent</strong></span>
                            <span style={{ fontFamily: 'monospace' }}>agent@gpharma.com</span>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '0.5rem', color: '#94a3b8', fontSize: '0.75rem' }}>
                            Password for all: <code style={{ border: '1px solid #cbd5e1', padding: '0 4px', borderRadius: '4px' }}>admin123</code> / <code style={{ border: '1px solid #cbd5e1', padding: '0 4px', borderRadius: '4px' }}>distrib123</code>
                        </div>
                    </div>
                </div>

                <Link href="/" className={styles.backLink}>
                    ← Return to Home
                </Link>
            </div>
        </div>
    );
}
