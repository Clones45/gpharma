'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import styles from './page.module.css';

// --- TYPES ---
interface ProductCode {
    code: string;
    status: 'AVAILABLE' | 'SOLD' | 'DEFECT' | 'RETURNED';
    assignedTo?: string; // Agent
    distributor?: string; // Distributor
}

interface User {
    id: number;
    name: string;
    role: 'AGENT' | 'DISTRIBUTOR';
    email: string;
    status: 'ACTIVE' | 'INACTIVE';
}

interface Payout {
    id: number;
    agent: string;
    amount: number;
    date: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

// --- MOCK DATA ---
const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
    { name: 'Aug', sales: 5200 },
    { name: 'Sep', sales: 6100 },
    { name: 'Oct', sales: 4300 },
    { name: 'Nov', sales: 7500 },
    { name: 'Dec', sales: 8100 },
];

const distributorData = [
    { name: 'Metro Manila', value: 450000 },
    { name: 'Cebu Branch', value: 210000 },
    { name: 'Davao Branch', value: 139000 },
];
const COLORS = ['#0052CC', '#38BDF8', '#F59E0B', '#F87171']; // Adjusted to match theme somewhat better, though charts can keep some color variance

// --- ICONS ---
const Icons = {
    Dashboard: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    Users: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    Codes: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4h-4v-4H8m1-4v4m-4 4a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5z" /></svg>,
    Payouts: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    Settings: () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
};

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<'DASHBOARD' | 'USERS' | 'CODES' | 'PAYOUTS' | 'SETTINGS'>('DASHBOARD');
    const [modalOpen, setModalOpen] = useState<'NONE' | 'GENERATE' | 'ADD_USER'>('NONE');

    // State for Data
    const [codes, setCodes] = useState<ProductCode[]>(
        Array.from({ length: 8 }, (_, i) => ({
            code: `GP-2024-${1000 + i}`,
            status: i % 3 === 0 ? 'SOLD' : 'AVAILABLE',
            assignedTo: i % 3 === 0 ? 'Agent John' : '-',
            distributor: i % 3 === 0 ? 'Metro Manila' : '-'
        }))
    );
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'John Doe', role: 'AGENT', email: 'john@gmail.com', status: 'ACTIVE' },
        { id: 2, name: 'Metro Manila', role: 'DISTRIBUTOR', email: 'mm_dist@gpharma.com', status: 'ACTIVE' },
        { id: 3, name: 'Cebu Branch', role: 'DISTRIBUTOR', email: 'cebu@gpharma.com', status: 'ACTIVE' },
    ]);
    const [payouts, setPayouts] = useState<Payout[]>([
        { id: 1, agent: 'Agent John', amount: 5000, date: '2024-12-08', status: 'PENDING' },
        { id: 2, agent: 'Agent Sarah', amount: 3500, date: '2024-12-07', status: 'PENDING' },
    ]);

    // Forms
    const [generateCount, setGenerateCount] = useState(10);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'AGENT', password: '' });

    // Actions
    const handleGenerate = () => {
        const newCodes: ProductCode[] = Array.from({ length: generateCount }, (_, i) => ({
            code: `GP-2024-${Math.floor(Math.random() * 9000) + 1000}`,
            status: 'AVAILABLE'
        }));
        setCodes(prev => [...newCodes, ...prev]);
        setModalOpen('NONE');
        alert(`Successfully generated ${generateCount} new product codes!`);
    };

    const handleAddUser = (e: React.FormEvent) => {
        e.preventDefault();
        setUsers(prev => [...prev, { id: Date.now(), name: newUser.name, role: newUser.role as any, email: newUser.email, status: 'ACTIVE' }]);
        setModalOpen('NONE');
        alert(`Successfully created account for ${newUser.name}`);
    };

    const handleApprovePayout = (id: number) => {
        setPayouts(prev => prev.filter(p => p.id !== id));
        alert('Payout Approved!');
    };

    // --- VIEWS ---

    const DashboardView = () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                {[
                    { title: 'Total Sales', value: '₱ 799k', color: '#0052CC' },
                    { title: 'Distributors', value: '5', color: '#8b5cf6' },
                    { title: 'Active Agents', value: '526', color: '#10b981' },
                    { title: 'Defects', value: '93', color: '#ef4444' },
                ].map((stat, i) => (
                    <div key={i} className={styles.statCard}>
                        <h3 style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{stat.title}</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: stat.color }}>{stat.value}</p>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                {/* Monthly Sales */}
                <div className={styles.card} style={{ height: '400px' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text)' }}>Monthly Sales Performance</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} />
                            <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="sales" fill="#0052CC" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Distributor Share */}
                <div className={styles.card} style={{ height: '400px' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text)' }}>Sales by Distributor</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={distributorData} cx="50%" cy="50%" innerRadius={80} outerRadius={100} paddingAngle={5} dataKey="value">
                                {distributorData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );

    const UsersView = () => (
        <div className={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 className="text-xl font-bold text-slate-800">User Management</h2>
                <button className="btn btn-primary" onClick={() => setModalOpen('ADD_USER')}>+ Create Account</button>
            </div>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <th style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Name</th>
                        <th style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Role</th>
                        <th style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Email</th>
                        <th style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} style={{ borderBottom: '1px solid #f8fafc' }}>
                            <td style={{ padding: '1rem', fontWeight: 600 }}>{user.name}</td>
                            <td style={{ padding: '1rem' }}><span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', background: '#f1f5f9', fontWeight: 600 }}>{user.role}</span></td>
                            <td style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>{user.email}</td>
                            <td style={{ padding: '1rem', color: 'green' }}>{user.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const CodesView = () => (
        <div className={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 className="text-xl font-bold text-slate-800">Inventory Codes</h2>
                <button className="btn btn-primary" onClick={() => setModalOpen('GENERATE')}>+ Generate Codes</button>
            </div>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <th style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Code</th>
                        <th style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Status</th>
                        <th style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Distributor</th>
                        <th style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Assigned To</th>
                    </tr>
                </thead>
                <tbody>
                    {codes.map((item, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                            <td style={{ padding: '1rem', fontFamily: 'monospace', fontWeight: 600 }}>{item.code}</td>
                            <td style={{ padding: '1rem' }}>
                                <span style={{
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '99px',
                                    background: item.status === 'AVAILABLE' ? '#dcfce7' : item.status === 'SOLD' ? '#dbeafe' : item.status === 'DEFECT' ? '#fee2e2' : '#fef3c7',
                                    color: item.status === 'AVAILABLE' ? '#166534' : item.status === 'SOLD' ? '#1e40af' : item.status === 'DEFECT' ? '#991b1b' : '#b45309',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold'
                                }}>
                                    {item.status}
                                </span>
                            </td>
                            <td style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>{item.distributor || '-'}</td>
                            <td style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>{item.assignedTo || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const PayoutsView = () => (
        <div className={styles.card} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="text-xl font-bold text-slate-800">Payout Requests</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Review and approve agent withdrawal requests.</p>
            {payouts.length === 0 ? (
                <div style={{ padding: '3rem', textAlign: 'center', color: '#cbd5e1' }}>No pending requests</div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {payouts.map((p) => (
                        <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', border: '1px solid #f1f5f9', borderRadius: '12px', background: '#f8fafc' }}>
                            <div>
                                <h4 style={{ margin: 0 }}>{p.agent}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Requested: {p.date}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a' }}>₱ {p.amount.toLocaleString()}</span>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button className="btn btn-primary" onClick={() => handleApprovePayout(p.id)}>Approve</button>
                                    <button className="btn btn-glass" style={{ color: 'red', borderColor: '#fee2e2' }}>Revenue</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    const SettingsView = () => (
        <div className={styles.card} style={{ maxWidth: '600px' }}>
            <h2 className="text-xl font-bold text-slate-800">System Settings</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Configure global settings for the Gpharma portals.</p>
        </div>
    );

    const getTitle = () => {
        switch (activeTab) {
            case 'USERS': return 'User Management';
            case 'CODES': return 'Inventory & Codes';
            case 'PAYOUTS': return 'Payout Requests';
            case 'SETTINGS': return 'Settings';
            default: return 'Admin Dashboard';
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
                    Grely's Admin
                </div>

                <nav className={styles.nav}>
                    <button className={`${styles.navItem} ${activeTab === 'DASHBOARD' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('DASHBOARD')}>
                        <Icons.Dashboard /> Dashboard
                    </button>
                    <button className={`${styles.navItem} ${activeTab === 'USERS' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('USERS')}>
                        <Icons.Users /> Users
                    </button>
                    <button className={`${styles.navItem} ${activeTab === 'CODES' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('CODES')}>
                        <Icons.Codes /> Inventory Codes
                    </button>
                    <button className={`${styles.navItem} ${activeTab === 'PAYOUTS' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('PAYOUTS')}>
                        <Icons.Payouts /> Payouts
                        {payouts.length > 0 && <span style={{ marginLeft: 'auto', background: '#ef4444', color: 'white', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '99px' }}>{payouts.length}</span>}
                    </button>
                    <button className={`${styles.navItem} ${activeTab === 'SETTINGS' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('SETTINGS')}>
                        <Icons.Settings /> Settings
                    </button>
                </nav>

                <div className={styles.userProfile}>
                    <div className={styles.avatar}>A</div>
                    <div className={styles.userInfo}>
                        <p className={styles.userName}>Administrator</p>
                        <p className={styles.userRole}>Super User</p>
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
                        {activeTab === 'DASHBOARD' && <p className={styles.pageSubtitle}>System overview and performance metrics.</p>}
                    </div>
                    {/* Header Actions if needed */}
                </header>

                {activeTab === 'DASHBOARD' && <DashboardView />}
                {activeTab === 'USERS' && <UsersView />}
                {activeTab === 'CODES' && <CodesView />}
                {activeTab === 'PAYOUTS' && <PayoutsView />}
                {activeTab === 'SETTINGS' && <SettingsView />}
            </main>

            {/* --- MODALS --- */}
            {modalOpen === 'GENERATE' && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h2>Generate Product Codes</h2>
                            <button className={styles.closeButton} onClick={() => setModalOpen('NONE')}>×</button>
                        </div>
                        <label className={styles.label}>Quantity to Generate</label>
                        <input
                            type="number"
                            value={generateCount}
                            onChange={(e) => setGenerateCount(Number(e.target.value))}
                            className={styles.input}
                            style={{ marginBottom: '1.5rem' }}
                        />
                        <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleGenerate}>Generate Codes</button>
                    </div>
                </div>
            )}

            {modalOpen === 'ADD_USER' && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h2>Create New Account</h2>
                            <button className={styles.closeButton} onClick={() => setModalOpen('NONE')}>×</button>
                        </div>
                        <form onSubmit={handleAddUser}>
                            <div style={{ marginBottom: '1rem' }}>
                                <label className={styles.label}>Full Name</label>
                                <input className={styles.input} required value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label className={styles.label}>Email Address</label>
                                <input type="email" className={styles.input} required value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label className={styles.label}>Role</label>
                                <select className={styles.input} value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} >
                                    <option value="AGENT">Agent</option>
                                    <option value="DISTRIBUTOR">Distributor</option>
                                </select>
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label className={styles.label}>Initial Password</label>
                                <input type="password" className={styles.input} required value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Create Account</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
