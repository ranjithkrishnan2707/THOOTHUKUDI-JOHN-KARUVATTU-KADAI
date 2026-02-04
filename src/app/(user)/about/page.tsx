import React from 'react';
import styles from './page.module.css';

export default function About() {
    return (
        <div className={styles.main}>
            <div className="container">
                <section className={styles.hero}>
                    <h1>Our Story</h1>
                    <p>Bringing the authentic taste of Thoothukudi to your kitchen.</p>
                </section>

                <section className={styles.section}>
                    <div className={styles.grid}>
                        <div className={styles.imageContainer}>
                            <img src="https://images.unsplash.com/photo-1544253051-bd2e236528d2?q=80&w=800" alt="Traditional Drying" />
                        </div>
                        <div className={styles.content}>
                            <h2>Heritage of Quality</h2>
                            <p>
                                At THOOTHUKUDI JOHN KARUVATTU KADAI, we believe in the timeless tradition of sun-dried fish.
                                For generations, the shores of Thoothukudi have provided the finest sea-fresh catch,
                                and we honor that legacy by using only traditional methods of salt-curing and natural drying.
                            </p>
                            <p>
                                Our process is simple but meticulous. Every fish is hand-selected by experts,
                                thoroughly cleaned, and dried under the intense Tuticorin sun.
                                We use zero chemical preservatives, ensuring that you get the most authentic and healthy dry fish available.
                            </p>

                            <div className={styles.stats}>
                                <div className={styles.statItem}>
                                    <h3>100%</h3>
                                    <p>Natural</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h3>20+</h3>
                                    <p>Varieties</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h3>5k+</h3>
                                    <p>Happy Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.grid} style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <div className={styles.content}>
                            <h2>Our Commitment</h2>
                            <p>
                                We are committed to hygiene and taste. Every batch of karuvadu that leaves our facility
                                is checked for quality. We understand that dry fish is a staple in many South Indian households,
                                and we strive to make it accessible, clean, and delicious.
                            </p>
                            <p>
                                From the classic Sankara and Nethili to the premium Vanjiram,
                                our range caters to every palate. Experience the true essence of Thoothukudi
                                with every bite of our premium dry fish.
                            </p>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800" alt="Fresh Catch" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
