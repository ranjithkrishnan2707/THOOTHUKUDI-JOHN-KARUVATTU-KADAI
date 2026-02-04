'use client';

import React, { useState, useEffect } from 'react';
import styles from './access.module.css';
import { UserPlus, ShieldAlert, Loader2, CheckCircle2 } from 'lucide-react';

export default function AdminAccess() {
    const [admins, setAdmins] = useState<any[]>([]);
    const [newEmail, setNewEmail] = useState('');
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [otps, setOtps] = useState({ newAdminOtp: '', superAdminOtp: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        // In a real app, fetch from /api/admin
        setAdmins([
            { email: 'johnkaruvattukadai@gmail.com', role: 'SUPER_ADMIN' }
        ]);
    }, []);

    const handleInvite = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            const res = await fetch('/api/admin/invite', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: newEmail }),
            });
            const data = await res.json();
            if (data.success) {
                setStep(2);
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('Failed to send OTPs');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            const res = await fetch('/api/admin/verify-invite', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: newEmail,
                    newAdminOtp: otps.newAdminOtp,
                    superAdminOtp: otps.superAdminOtp
                }),
            });
            const data = await res.json();
            if (data.success) {
                alert('New Admin Added Successfully!');
                setAdmins([...admins, { email: newEmail, role: 'ADMIN' }]);
                setStep(1);
                setNewEmail('');
                setOtps({ newAdminOtp: '', superAdminOtp: '' });
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('Verification failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <h1>Admin Access Management</h1>
                    <p>Only Super Admins can manage access levels and invite collaborators.</p>
                </div>
            </div>

            {error && <div className={styles.error}>{error}</div>}

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3><UserPlus size={24} color="#6b46c1" /> {step === 1 ? 'Invite New Admin' : 'Verify Invitation'}</h3>
                    {step === 1 ? (
                        <form onSubmit={handleInvite} className={styles.form}>
                            <div className={styles.field}>
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="e.g. admin@johnkaruvattu.com"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                                {isLoading ? <Loader2 className={styles.spinner} /> : 'Send Verification OTPs'}
                            </button>
                            <div className={styles.note}>
                                <ShieldAlert size={18} />
                                <div>
                                    <strong>Security Note:</strong> Verification OTPs will be sent to both the new invitee and the primary super admin for authorization.
                                </div>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleVerify} className={styles.form}>
                            <div className={styles.field}>
                                <label>OTP sent to New Admin ({newEmail})</label>
                                <input
                                    type="text"
                                    placeholder="6-digit code"
                                    value={otps.newAdminOtp}
                                    onChange={(e) => setOtps({ ...otps, newAdminOtp: e.target.value })}
                                    required
                                />
                            </div>
                            <div className={styles.field}>
                                <label>OTP sent to Super Admin</label>
                                <input
                                    type="text"
                                    placeholder="6-digit code"
                                    value={otps.superAdminOtp}
                                    onChange={(e) => setOtps({ ...otps, superAdminOtp: e.target.value })}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                                {isLoading ? <Loader2 className={styles.spinner} /> : 'Verify Both & Grant Access'}
                            </button>
                            <button type="button" className={styles.backBtn} onClick={() => setStep(1)}>
                                Cancel and go back
                            </button>
                        </form>
                    )}
                </div>

                <div className={styles.card}>
                    <h3>Current Management Team</h3>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Admin Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admins.map((a, idx) => (
                                    <tr key={idx}>
                                        <td style={{ fontWeight: 600, color: '#1e293b' }}>{a.email}</td>
                                        <td><span className={styles.roleBadge}>{a.role.replace('_', ' ')}</span></td>
                                        <td><span className={styles.statusActive}><CheckCircle2 size={16} /> Active</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
