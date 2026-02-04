'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const router = useRouter();

    useEffect(() => {
        const session = localStorage.getItem('jk_admin_session');
        if (session) {
            const parsed = JSON.parse(session);
            if (Date.now() < parsed.expiry) {
                router.push('/admin/dashboard');
                return;
            }
        }
        router.push('/admin/login');
    }, [router]);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#0f172a', color: 'white' }}>
            <p>Authenticating...</p>
        </div>
    );
}
