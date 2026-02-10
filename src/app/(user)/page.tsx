'use client';

import React, { useState, useEffect } from 'react';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import OrderModal from '@/components/OrderModal/OrderModal';
import styles from './page.module.css';
import { INITIAL_PRODUCTS } from '@/lib/mockData';
import MegaDealDisplay from '@/components/MegaDealDisplay/MegaDealDisplay';

export default function Home() {
    const [products, setProducts] = useState<any[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [language, setLanguage] = useState<'EN' | 'TA'>('EN');

    // Sync with Admin changes via localStorage (still used for regular products)
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

        loadProducts();

        window.addEventListener('storage', loadProducts);

        return () => {
            window.removeEventListener('storage', loadProducts);
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

    const handleSubmitOrder = async (formData: any) => {
        // 1. Generate Order ID
        const orderId = `JK${Math.floor(1000 + Math.random() * 9000)}`;

        // 2. Save Order to localStorage
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
        let message = `New Order Received 🐟
Order ID: ${orderId}
Product: ${formData.productName}
Qty: ${formData.quantity} Kg
Customer: ${formData.customerName}
Phone: ${formData.mobileNumber}
Address: ${formData.address}`;

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

            {/* MEGA DEAL SECTION */}
            <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
                <MegaDealDisplay />
            </div>

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
