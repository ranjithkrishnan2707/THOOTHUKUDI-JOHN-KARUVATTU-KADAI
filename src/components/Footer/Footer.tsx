'use client';

import React from 'react';
import styles from './Footer.module.css';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    if (pathname.startsWith('/admin')) {
        return null;
    }

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} THOOTHUKUDI JOHN KARUVATTU KADAI. All rights reserved.</p>
                    <p>Contact: +91 9994960009, +91 9944991750 | Email: johnkaruvattukadai@gmail.com</p>
                    <p>Premium Quality Dry Fish from the Shores of Thoothukudi</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
