'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X, ShoppingCart } from 'lucide-react';
import styles from './Header.module.css';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
    const pathname = usePathname();
    const [language, setLanguage] = useState<'EN' | 'TA'>('EN');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getCartCount } = useCart();

    // Don't render public header on admin pages to prevent overlap
    if (pathname.startsWith('/admin')) {
        return null;
    }

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'EN' ? 'TA' : 'EN');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Track Order', path: '/track' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const tamilLinks: Record<string, string> = {
        'Home': 'முகப்பு',
        'Track Order': 'ஆர்டர் டிராக்கிங்',
        'About Us': 'எங்களைப் பற்றி',
        'Contact': 'தொடர்பு',
    };

    const cartCount = getCartCount();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerFlex}`}>
                <Link href="/" className={styles.logo}>
                    THOOTHUKUDI <br /> <span>JOHN KARUVATTU KADAI</span>
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <button className={`${styles.menuButton} ${styles.closeButton}`} onClick={closeMenu}>
                        <X size={24} />
                    </button>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`${styles.navLink} ${pathname === link.path ? styles.navLinkActive : ''}`}
                            onClick={closeMenu}
                        >
                            {language === 'EN' ? link.name : tamilLinks[link.name]}
                        </Link>
                    ))}
                </nav>

                <div className={styles.headerActions}>
                    <Link href="/cart" className={styles.cartButton}>
                        <ShoppingCart size={20} />
                        {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
                    </Link>
                    <button className={styles.langToggle} onClick={toggleLanguage}>
                        <Globe size={18} />
                        {language === 'EN' ? 'தமிழ்' : 'English'}
                    </button>
                    <button className={styles.menuButton} onClick={toggleMenu}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
