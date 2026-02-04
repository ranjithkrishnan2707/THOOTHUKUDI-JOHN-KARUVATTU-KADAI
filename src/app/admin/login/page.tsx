'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import {
    Mail,
    Lock,
    ArrowRight,
    Loader2,
    ShieldCheck,
    AlertCircle,
    ArrowLeft,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function AdminLogin() {
    const router = useRouter();
    const [step, setStep] = useState(1); // 1: Email, 2: OTP
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSendOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setMessage('');

        try {
            const res = await fetch('/api/auth/otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (data.success) {
                setStep(2);
                if (data.debugOtp) {
                    setMessage(`Demo Mode: Since email failed, your code is: ${data.debugOtp}`);
                    setOtp(data.debugOtp);
                } else {
                    setMessage('Verification code sent to your email.');
                }
            } else {
                setError(data.error || 'Failed to send OTP. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });

            const data = await res.json();

            if (data.success) {
                // Store session (simplified for now)
                localStorage.setItem('jk_admin_session', JSON.stringify({
                    email,
                    expiry: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
                }));

                router.push('/admin/dashboard');
            } else {
                setError(data.error || 'Invalid or expired code.');
            }
        } catch (err) {
            setError('Verification failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginCard}>
                <div className={styles.header}>
                    <div className={styles.logoArea}>
                        <ShieldCheck size={32} color="white" />
                    </div>
                    <h1>Admin Portal</h1>
                    <p>{step === 1 ? 'Unlock access to your store management dashboard.' : 'Enter the 6-digit code sent to your email.'}</p>
                </div>

                {error && (
                    <div className={styles.error}>
                        <AlertCircle size={18} />
                        <span>{error}</span>
                    </div>
                )}

                {message && (
                    <div className={styles.success}>
                        <CheckCircle2 size={18} />
                        <span>{message}</span>
                    </div>
                )}

                {step === 1 ? (
                    <form onSubmit={handleSendOTP} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>Registered Email</label>
                            <div className={styles.inputWrapper}>
                                <Mail className={styles.inputIcon} size={18} />
                                <input
                                    type="email"
                                    className={styles.input}
                                    placeholder="your-name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                            {isLoading ? (
                                <Loader2 className={styles.spinner} size={20} />
                            ) : (
                                <>
                                    <span>Continue</span>
                                    <ArrowRight size={20} />
                                </>
                            )}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOTP} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>Verification Code</label>
                            <div className={styles.inputWrapper}>
                                <Lock className={styles.inputIcon} size={18} />
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Enter 6-digit OTP"
                                    maxLength={6}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                            {isLoading ? (
                                <Loader2 className={styles.spinner} size={20} />
                            ) : (
                                <>
                                    <span>Verify & Login</span>
                                    <ArrowRight size={20} />
                                </>
                            )}
                        </button>
                        <button
                            type="button"
                            className={styles.backBtn}
                            onClick={() => setStep(1)}
                            style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '0.875rem', marginTop: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
                        >
                            <ArrowLeft size={16} />
                            Change Email
                        </button>
                    </form>
                )}

                <div className={styles.backToSite}>
                    <Link href="/">
                        <ArrowLeft size={16} />
                        Back to Shop
                    </Link>
                </div>
            </div>
        </div>
    );
}
