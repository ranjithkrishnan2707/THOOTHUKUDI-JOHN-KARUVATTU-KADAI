'use client';

import React from 'react';
import styles from './dashboard.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Package,
    ShoppingBag,
    Home,
    Menu,
    X,
    Users,
    Layers
} from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const menuItems = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Products', href: '/admin/dashboard/products', icon: Package },
        { name: 'Orders', href: '/admin/dashboard/orders', icon: ShoppingBag },
        { name: 'Combo Offers', href: '/admin/dashboard/combo-offers', icon: Layers },
        { name: 'Admin Access', href: '/admin/dashboard/access', icon: Users },
    ];

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className={styles.layout}>
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className={styles.overlay} onClick={closeSidebar} />
            )}

            <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
                <div className={styles.sidebarHeader}>
                    <div className={styles.headerTitleRow}>
                        <h3>JKUDI Admin</h3>
                        <button className={styles.mobileCloseBtn} onClick={closeSidebar}>
                            <X size={24} />
                        </button>
                    </div>
                    <span>v1.0 (Mock Mode)</span>
                </div>
                <nav className={styles.nav}>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                                onClick={closeSidebar}
                            >
                                <Icon size={20} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
                <Link href="/" className={styles.logoutBtn}>
                    <Home size={20} />
                    <span>View Site</span>
                </Link>
            </aside>
            <main className={styles.content}>
                <header className={styles.topBar}>
                    <div className={styles.topBarLeft}>
                        <button className={styles.hamburgerBtn} onClick={toggleSidebar}>
                            <Menu size={24} />
                        </button>
                        <h2>{menuItems.find(m => m.href === pathname)?.name || 'Overview'}</h2>
                    </div>
                    <div className={styles.adminProfile}>
                        <span>Admin Mode</span>
                    </div>
                </header>
                <div className={styles.mainArea}>
                    {children}
                </div>
            </main>
        </div>
    );
}
