'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

// Placeholder Components for Views
const DashboardView = () => (
    <div className={styles.dashboardGrid}>
        <div className={styles.card} style={{ gridColumn: '1 / -1' }}>
            <h2 className="text-xl font-bold text-slate-800">Welcome back, Candidate!</h2>
            <p className={styles.pageSubtitle}>Here's what's happening today.</p>
        </div>
        <div className={styles.card}>
            <h3 className="text-sm text-slate-500 font-medium mb-1">Total Sales</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-text)' }}>₱ 12,500</p>
            <span style={{ color: 'var(--color-secondary)', fontSize: '0.875rem' }}>+12% from last month</span>
        </div>
        <div className={styles.card}>
            <h3 className="text-sm text-slate-500 font-medium mb-1">Active Clients</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-text)' }}>24</p>
            <span className="text-sm text-orange-500">4 Payment Due</span>
        </div>
        <div className={styles.card}>
            <h3 className="text-sm text-slate-500 font-medium mb-1">Commission Rate</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-text)' }}>15%</p>
            <span className="text-sm text-slate-400">Silver Tier</span>
        </div>
    </div>
);

const ClientsView = () => (
    <div className={styles.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
            <h2 className="text-xl font-bold text-slate-800">My Customers</h2>
            <button className="btn btn-primary text-sm px-4 py-2">+ New Sale</button>
        </div>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                    <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Customer</th>
                    <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Product</th>
                    <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Payment</th>
                    <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr style={{ borderBottom: '1px solid #f8fafc' }}>
                    <td style={{ padding: '1rem', fontWeight: 500 }}>Maria Clara</td>
                    <td style={{ padding: '1rem' }}>UltraPURE Plus</td>
                    <td style={{ padding: '1rem' }}>Installment (3/12)</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: 'orange', background: '#fff7ed', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem' }}>Payment Due</span></td>
                </tr>
                <tr>
                    <td style={{ padding: '1rem', fontWeight: 500 }}>Juan Dela Cruz</td>
                    <td style={{ padding: '1rem' }}>UltraPURE Plus</td>
                    <td style={{ padding: '1rem' }}>Cash</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: 'green', background: '#f0fdf4', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem' }}>Completed</span></td>
                </tr>
            </tbody>
        </table>
    </div>
);

const WalletView = () => (
    <div className={styles.card} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '3rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>Available Balance</h3>
        <h1 className={styles.gradientText} style={{ fontSize: '4rem', margin: '0 0 2rem 0', fontWeight: 800 }}>₱ 12,500.00</h1>
        <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem', borderRadius: '50px' }}>Request Payout</button>

        <div style={{ marginTop: '3rem', textAlign: 'left' }}>
            <h4 className="font-bold text-slate-800 mb-4">Recent Transactions</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                <span className="text-slate-600">Commission (Maria Clara)</span>
                <span style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>+ ₱ 500.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                <span className="text-slate-600">Payout Withdrawal</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>- ₱ 2,000.00</span>
            </div>
        </div>
    </div>
);

const ProfileView = () => (
    <div className={styles.card} style={{ maxWidth: '600px' }}>
        <h2 className="text-xl font-bold text-slate-800">Profile Settings</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Full Name</label>
                <input type="text" defaultValue="Candidate Name" className={styles.input} disabled />
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Email Address</label>
                <input type="email" defaultValue="agent@gpharma.com" className={styles.input} />
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Phone Number</label>
                <input type="tel" defaultValue="0917 123 4567" className={styles.input} />
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>New Password</label>
                <input type="password" placeholder="Leave blank to keep current" className={styles.input} />
            </div>
            <button className="btn btn-primary" type="button">Save Changes</button>
        </form>
    </div>
);

const SupportView = () => (
    <div className={styles.card} style={{ maxWidth: '600px' }}>
        <h2 className="text-xl font-bold text-slate-800">Contact Admin</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Need help? Send a message to the support team.</p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Subject</label>
                <select className={styles.input}>
                    <option>Commission Issue</option>
                    <option>System Problem</option>
                    <option>General Inquiry</option>
                </select>
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Message</label>
                <textarea rows={5} className={styles.input}></textarea>
            </div>
            <button className="btn btn-primary" type="button">Send Message</button>
        </form>
    </div>
);

// Sidebar Icons (Simple SVGs)
const Icons = {
    Dashboard: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    Clients: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    Wallet: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
    Profile: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    Support: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>
};

export default function AgentDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');

    const renderContent = () => {
        switch (activeTab) {
            case 'clients': return <ClientsView />;
            case 'wallet': return <WalletView />;
            case 'profile': return <ProfileView />;
            case 'support': return <SupportView />;
            case 'dashboard':
            default: return <DashboardView />;
        }
    };

    const getTitle = () => {
        switch (activeTab) {
            case 'clients': return 'My Customers';
            case 'wallet': return 'Commission Wallet';
            case 'profile': return 'My Profile';
            case 'support': return 'Support Center';
            default: return 'Agent Dashboard';
        }
    };

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    <div style={{ position: 'relative', width: '30px', height: '30px', marginRight: '0.5rem' }}>
                        <Image
                            src="/assets/logo.png"
                            alt="Grely's Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    Grely's
                </div>

                <nav className={styles.nav}>
                    <button
                        className={`${styles.navItem} ${activeTab === 'dashboard' ? styles.navItemActive : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        <Icons.Dashboard /> Dashboard
                    </button>
                    <button
                        className={`${styles.navItem} ${activeTab === 'clients' ? styles.navItemActive : ''}`}
                        onClick={() => setActiveTab('clients')}
                    >
                        <Icons.Clients /> My Customers
                    </button>
                    <button
                        className={`${styles.navItem} ${activeTab === 'wallet' ? styles.navItemActive : ''}`}
                        onClick={() => setActiveTab('wallet')}
                    >
                        <Icons.Wallet /> Wallet
                    </button>
                    <button
                        className={`${styles.navItem} ${activeTab === 'profile' ? styles.navItemActive : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        <Icons.Profile /> Profile
                    </button>
                    <button
                        className={`${styles.navItem} ${activeTab === 'support' ? styles.navItemActive : ''}`}
                        onClick={() => setActiveTab('support')}
                    >
                        <Icons.Support /> Contact Admin
                    </button>
                </nav>

                <div className={styles.userProfile}>
                    <div className={styles.avatar}>CN</div>
                    <div className={styles.userInfo}>
                        <p className={styles.userName}>Candidate Name</p>
                        <p className={styles.userRole}>Sales Agent</p>
                    </div>
                    <Link href="/portal" style={{ color: '#ef4444' }} title="Logout">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                <header className={styles.header}>
                    <div>
                        <h1 className={styles.pageTitle}>{getTitle()}</h1>
                        {activeTab === 'dashboard' && <p className={styles.pageSubtitle}>Track your sales and performance.</p>}
                    </div>
                </header>
                {renderContent()}
            </main>
        </div>
    );
}
