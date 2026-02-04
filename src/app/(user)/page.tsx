'use client';

import React, { useState, useEffect } from 'react';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import OrderModal from '@/components/OrderModal/OrderModal';
import styles from './page.module.css';
import { INITIAL_PRODUCTS } from '@/lib/mockData';
import Link from 'next/link';
import { Rocket, CheckCircle } from 'lucide-react';

export default function Home() {
    const [products, setProducts] = useState<any[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [language, setLanguage] = useState<'EN' | 'TA'>('EN');
    const [activeCombo, setActiveCombo] = useState<any>(null);

    // Sync with Admin changes via localStorage
    useEffect(() => {
        const loadProducts = () => {
            const saved = localStorage.getItem('jk_products');
            if (saved) {
                const parsed = JSON.parse(saved).map((p: any) => ({
                    ...p,
                    id: p._id || p.id
                }));
                setProducts(parsed);
            } else {
                setProducts(INITIAL_PRODUCTS);
            }
        };

        const loadCombo = () => {
            const savedCombo = localStorage.getItem('jk_active_combo_v2');
            const savedProducts = localStorage.getItem('jk_products');
            const products = savedProducts ? JSON.parse(savedProducts) : INITIAL_PRODUCTS;

            if (savedCombo) {
                const combo = JSON.parse(savedCombo);
                // Re-attach images since they are stripped for storage efficiency
                const hydratedProducts = combo.products.map((cp: any) => {
                    const match = products.find((p: any) => p._id === cp._id || p.id === cp.id);
                    return { ...cp, image: match?.image || '/placeholder-fish.png' };
                });
                setActiveCombo({ ...combo, products: hydratedProducts });
            } else {
                setActiveCombo(null);
            }
        };

        loadProducts();
        loadCombo();

        window.addEventListener('storage', loadProducts);
        window.addEventListener('storage', loadCombo); // Listen for combo updates too

        return () => {
            window.removeEventListener('storage', loadProducts);
            window.removeEventListener('storage', loadCombo);
        };
    }, []);

    const handleOpenOrder = (product: any) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseOrder = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleBuyCombo = () => {
        if (!activeCombo) return;

        // Construct a special product object for the order modal
        const comboProduct = {
            name: `COMBO: ${activeCombo.products.length} Items Deal`,
            finalPrice: activeCombo.offerPrice,
            isCombo: true
        };
        handleOpenOrder(comboProduct);
    };

    const handleSubmitOrder = async (formData: any) => {
        // 1. Generate Order ID
        const orderId = `JK${Math.floor(1000 + Math.random() * 9000)}`;

        // 2. Save Order to localStorage for Admin visibility
        const newOrder = {
            _id: Date.now().toString(),
            orderId: orderId,
            createdAt: new Date().toISOString(),
            customerName: formData.customerName,
            mobileNumber: formData.mobileNumber,
            address: formData.address,
            product: {
                name: formData.productName,
                finalPrice: selectedProduct?.finalPrice || 0
            },
            quantity: Number(formData.quantity),
            status: 'PENDING'
        };

        const savedOrders = localStorage.getItem('jk_orders');
        const orders = savedOrders ? JSON.parse(savedOrders) : [];
        localStorage.setItem('jk_orders', JSON.stringify([newOrder, ...orders]));

        // 3. Open WhatsApp
        let message = '';

        if (selectedProduct?.isCombo) {
            message = `New COMBO Order 🚀
Order ID: ${orderId}
Deal: ${formData.productName}
Price: ₹${selectedProduct.finalPrice}
Customer: ${formData.customerName}
Phone: ${formData.mobileNumber}
Address: ${formData.address}`;
        } else {
            message = `New Order Received 🐟
Order ID: ${orderId}
Product: ${formData.productName}
Qty: ${formData.quantity} Kg
Customer: ${formData.customerName}
Phone: ${formData.mobileNumber}
Address: ${formData.address}`;
        }

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919994960009?text=${encodedMessage}`;

        window.location.href = whatsappUrl;
        handleCloseOrder();
    };

    const texts = {
        EN: {
            heroTitle: 'Authentic Sea-Fresh Dry Fish',
            heroSub: 'From the shores of Thoothukudi to your kitchen doorstep.',
            shopNow: 'Shop Now',
            ourProducts: 'Our Products',
        },
        TA: {
            heroTitle: 'சுவையான கடல் மீன் கருவாடு',
            heroSub: 'தூத்துக்குடி கடற்கரையில் இருந்து உங்கள் இல்லத்திற்கு.',
            shopNow: 'இப்போதே வாங்குங்கள்',
            ourProducts: 'எங்கள் தயாரிப்புகள்',
        }
    };

    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h2>{texts[language].heroTitle}</h2>
                        <p>{texts[language].heroSub}</p>
                        <button className={styles.ctaButton} onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                            {texts[language].shopNow}
                        </button>
                    </div>
                </div>
            </section>

            {/* COMBO OFFER SECTION */}
            {activeCombo && (
                <section className={styles.comboSection}>
                    <div className="container">
                        <div className={styles.comboContainer}>
                            <div className={styles.comboBadge}>
                                LIMITED TIME OFFER ⏳
                            </div>
                            <div className={styles.comboDetails}>
                                <h3 className={styles.comboTitle}>
                                    <Rocket size={32} color="#10b981" />
                                    Mega Combo Deal
                                </h3>
                                <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
                                    Grab this exclusive bundle prepared just for you!
                                </p>
                                <div className={styles.comboGrid}>
                                    {activeCombo.products.map((p: any) => (
                                        <div key={p._id} className={styles.comboCard}>
                                            <img src={p.image} alt={p.name} className={styles.comboCardImg} />
                                            <div className={styles.comboCardContent}>
                                                <div className={styles.comboCardTitle}>{p.name}</div>
                                                <div className={styles.comboCardPrice}>Value: ₹{p.finalPrice}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.comboPriceBox}>
                                <div className={styles.originalPrice}>₹{activeCombo.totalOriginalPrice}</div>
                                <div className={styles.offerPrice}>₹{activeCombo.offerPrice}</div>
                                <div className={styles.offerLabel}>COMBO PRICE</div>
                                <button className={styles.buyComboBtn} onClick={handleBuyCombo}>
                                    ORDER NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section id="products" className={styles.products}>
                <div className="container">
                    <h3 className={styles.sectionTitle}>{texts[language].ourProducts}</h3>
                    <ProductGrid
                        products={products}
                        onOrder={(p: any) => handleOpenOrder(p)}
                    />
                    {products.length === 0 && <p className={styles.empty}>No products found.</p>}
                </div>
            </section>

            <OrderModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseOrder}
                onSubmit={handleSubmitOrder}
            />
        </div>
    );
}
