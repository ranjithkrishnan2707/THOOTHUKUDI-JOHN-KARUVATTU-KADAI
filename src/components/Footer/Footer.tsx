import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
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
