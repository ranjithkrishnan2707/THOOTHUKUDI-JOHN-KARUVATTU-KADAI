'use client';

import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import styles from './page.module.css';

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Thank you for your message! WE will get back to you soon.');
    };

    return (
        <div className={styles.main}>
            <div className="container">
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.subtitle}>Have questions or want to place a custom bulk order? Reach out to us, and we'll be happy to help.</p>

                <div className={styles.grid}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <div className={styles.icon}><MapPin size={24} /></div>
                            <div className={styles.infoText}>
                                <h3>Our Location</h3>
                                <p>123, Beach Road, Fishermen Colony,<br />Thoothukudi, Tamil Nadu - 628001</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}><Phone size={24} /></div>
                            <div className={styles.infoText}>
                                <h3>Call Us</h3>
                                <p>+91 9994960009<br />+91 9944991750</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}><Mail size={24} /></div>
                            <div className={styles.infoText}>
                                <h3>Email Us</h3>
                                <p>johnkaruvattukadai@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}><MessageSquare size={24} /></div>
                            <div className={styles.infoText}>
                                <h3>WhatsApp Support</h3>
                                <p>Available 24/7 for your dry fish orders.<br />Chat with us: +91 9994960009</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formCard}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="John Doe" required suppressHydrationWarning />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" required suppressHydrationWarning />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="Bulk Order Inquiry" required suppressHydrationWarning />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" rows={5} placeholder="Tell us what you need..." required suppressHydrationWarning></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton} suppressHydrationWarning>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
