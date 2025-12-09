'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './page.module.css';

// --- TYPES ---
interface Agent {
    id: number;
    name: string;
    sales: number;
    commission: number;
    status: 'ACTIVE' | 'INACTIVE';
}

interface PayoutRequest {
    id: number;
    agent: string;
    amount: number;
    date: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

// --- MOCK DATA ---
const teamSalesData = [
    { name: 'Week 1', sales: 12000 },
    { name: 'Week 2', sales: 19000 },
    { name: 'Week 3', sales: 15000 },
    { name: 'Week 4', sales: 28000 },
];

// --- ICONS ---
const Icons = {
    Dashboard: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    Team: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    Payouts: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    Contact: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    Profile: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
};

export default function DistributorDashboard() {
    const [activeTab, setActiveTab] = useState<'DASHBOARD' | 'TEAM' | 'PAYOUTS' | 'CONTACT' | 'PROFILE'>('DASHBOARD');
    const [modalOpen, setModalOpen] = useState<'NONE' | 'CONTACT' | 'PROFILE'>('NONE'); // Kept for logic compatibility but mostly moving to tabs

    // Data State
    const [teamAgents, setTeamAgents] = useState<Agent[]>([
        { id: 1, name: 'John Doe', sales: 15, commission: 7500, status: 'ACTIVE' },
        { id: 2, name: 'Jane Smith', sales: 8, commission: 4000, status: 'ACTIVE' },
        { id: 3, name: 'Mike Ross', sales: 12, commission: 6000, status: 'ACTIVE' },
    ]);
    const [payouts, setPayouts] = useState<PayoutRequest[]>([
        { id: 101, agent: 'John Doe', amount: 5000, date: '2024-12-08', status: 'PENDING' },
        { id: 102, agent: 'Mike Ross', amount: 3000, date: '2024-12-07', status: 'PENDING' },
    ]);
    const [profile, setProfile] = useState({ name: 'Metro Manila Distributor', email: 'distrib@gpharma.com', password: '' });

    // Actions
    const handleApprovePayout = (id: number) => {
        setPayouts(prev => prev.filter(p => p.id !== id));
        alert('Payout Approved and sent to Admin for final processing.');
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent to Admin!');
        setActiveTab('DASHBOARD');
    };

    const handleUpdateProfile = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Profile updated successfully!');
    };

    // --- VIEWS ---

    const DashboardView = () => (
        <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Stats KPI */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div className={styles.card}>
                    <h3 style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>My Agents</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>{teamAgents.length}</p>
                </div>
                <div className={styles.card}>
                    <h3 style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Total Team Sales</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-secondary)' }}>₱ 450,000</p>
                </div>
                <div className={styles.card} style={payouts.length > 0 ? { border: '1px solid orange' } : {}}>
                    <h3 style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Pending Payouts</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'orange' }}>{payouts.length}</p>
                </div>
            </div>

            {/* Chart */}
            <div className={styles.card} style={{ height: '400px' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text)' }}>Weekly Team Sales</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={teamSalesData}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0052CC" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#0052CC" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} />
                        <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }} />
                        <Area type="monotone" dataKey="sales" stroke="#0052CC" fillOpacity={1} fill="url(#colorSales)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );

    const TeamView = () => (
        <div className={styles.card}>
            <h2 className="text-xl font-bold text-slate-800">My Team</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Performance of agents in your network.</p>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <th style={{ padding: '1rem', color: '#64748b' }}>Agent Name</th>
                        <th style={{ padding: '1rem', color: '#64748b' }}>Sales (Month)</th>
                        <th style={{ padding: '1rem', color: '#64748b' }}>Commission</th>
                        <th style={{ padding: '1rem', color: '#64748b' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {teamAgents.map(agent => (
                        <tr key={agent.id} style={{ borderBottom: '1px solid #f8fafc' }}>
                            <td style={{ padding: '1rem', fontWeight: 600 }}>{agent.name}</td>
                            <td style={{ padding: '1rem' }}>{agent.sales} Units</td>
                            <td style={{ padding: '1rem', color: 'var(--color-secondary)', fontWeight: 500 }}>₱ {agent.commission.toLocaleString()}</td>
                            <td style={{ padding: '1rem' }}><span style={{ background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>{agent.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const PayoutsView = () => (
        <div className={styles.card} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="text-xl font-bold text-slate-800">Payout Requests</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Approve withdrawals from your agents.</p>
            {payouts.length === 0 ? (
                <div style={{ padding: '3rem', textAlign: 'center', color: '#cbd5e1' }}>No pending requests.</div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {payouts.map(req => (
                        <div key={req.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', border: '1px solid #f1f5f9', borderRadius: '12px', background: '#f8fafc' }}>
                            <div>
                                <h4 style={{ margin: 0 }}>{req.agent}</h4>
                                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>{req.date}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a' }}>₱ {req.amount.toLocaleString()}</span>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button className="btn btn-primary" onClick={() => handleApprovePayout(req.id)}>Approve</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    const ProfileView = () => (
        <div className={styles.card} style={{ maxWidth: '600px' }}>
            <h2>Distributor Profile</h2>
            <form onSubmit={handleUpdateProfile} style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <label className={styles.label}>Distributor Name</label>
                    <input className={styles.input} value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} />
                </div>
                <div>
                    <label className={styles.label}>Email Address</label>
                    <input className={styles.input} value={profile.email} onChange={e => setProfile({ ...profile, email: e.target.value })} />
                </div>
                <div>
                    <label className={styles.label}>Password</label>
                    <input className={styles.input} type="password" placeholder="Leave blank to keep current" />
                </div>
                <button className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    );

    const ContactView = () => (
        <div className={styles.card} style={{ maxWidth: '600px' }}>
            <h2>Contact Admin</h2>
            <form onSubmit={handleSendMessage} style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <label className={styles.label}>Subject</label>
                    <select className={styles.input}>
                        <option>Request Product Codes</option>
                        <option>Report Issue</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <label className={styles.label}>Message</label>
                    <textarea className={styles.input} rows={5} placeholder="Type your message here..." />
                </div>
                <button className="btn btn-primary">Send Message</button>
            </form>
        </div>
    );

    const getTitle = () => {
        switch (activeTab) {
            case 'TEAM': return 'My Team';
            case 'PAYOUTS': return 'Payout Requests';
            case 'PROFILE': return 'Profile Settings';
            case 'CONTACT': return 'Contact Support';
            default: return 'Distributor Dashboard';
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
                    Grely's Partner
                </div>

                <nav className={styles.nav}>
                    <button className={`${styles.navItem} ${activeTab === 'DASHBOARD' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('DASHBOARD')}>
                        <Icons.Dashboard /> Dashboard
                    </button>
                    <button className={`${styles.navItem} ${activeTab === 'TEAM' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('TEAM')}>
                        <Icons.Team /> My Team
                    </button>
                    <button className={`${styles.navItem} ${activeTab === 'PAYOUTS' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('PAYOUTS')}>
                        <Icons.Payouts /> Payouts
                        {payouts.length > 0 && <span className={styles.alertBadge}>{payouts.length}</span>}
                    </button>
                    <button className={`${styles.navItem} ${activeTab === 'PROFILE' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('PROFILE')}>
                        <Icons.Profile /> Profile
                    </button>
                    <button className={`${styles.navItem} ${activeTab === 'CONTACT' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('CONTACT')}>
                        <Icons.Contact /> Contact Admin
                    </button>
                </nav>

                <div className={styles.userProfile}>
                    <div className={styles.avatar}>D</div>
                    <div className={styles.userInfo}>
                        <p className={styles.userName}>Metro Manila</p>
                        <p className={styles.userRole}>Distributor</p>
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
                        {activeTab === 'DASHBOARD' && <p className={styles.pageSubtitle}>Overview of your distribution network.</p>}
                    </div>
                </header>

                {activeTab === 'DASHBOARD' && <DashboardView />}
                {activeTab === 'TEAM' && <TeamView />}
                {activeTab === 'PAYOUTS' && <PayoutsView />}
                {activeTab === 'PROFILE' && <ProfileView />}
                {activeTab === 'CONTACT' && <ContactView />}
            </main>
        </div>
    );
}
