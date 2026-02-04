'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import OrderModal from '@/components/OrderModal/OrderModal';

const COMBO_OFFERS = [
    {
        id: 'c1',
        name: 'Family Starter Pack',
        description: 'Perfect for small families! Includes Sankara (500g), Nethili (500g), and complimentary Chilli Powder.',
        image: 'https://images.unsplash.com/photo-1544253051-bd2e236528d2?q=80&w=600',
        originalPrice: 850,
        finalPrice: 699,
        discount: '18% OFF'
    },
    {
        id: 'c2',
        name: 'Thoothukudi Special Combo',
        description: 'The best of the shores. Vanjiram (500g), Premium Sankara (500g), and Dried Squid (250g).',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600',
        originalPrice: 1500,
        finalPrice: 1249,
        discount: '17% OFF'
    },
    {
        id: 'c3',
        name: 'Party Feast Box',
        description: 'Big gathering? We got you. 1kg Large Vanjiram, 1kg Nethili, and 500g Prawns.',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600',
        originalPrice: 2800,
        finalPrice: 2299,
        discount: '18% OFF'
    }
];

export default function ComboOffers() {
    const [selectedCombo, setSelectedCombo] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenOrder = (combo: any) => {
        setSelectedCombo(combo);
        setIsModalOpen(true);
    };

    const handleCloseOrder = () => {
        setIsModalOpen(false);
        setSelectedCombo(null);
    };

    const handleSubmitOrder = async (formData: any) => {
        const orderId = `JKC${Math.floor(1000 + Math.random() * 9000)}`;

        const newOrder = {
            _id: Date.now().toString(),
            orderId: orderId,
            createdAt: new Date().toISOString(),
            customerName: formData.customerName,
            mobileNumber: formData.mobileNumber,
            address: formData.address,
            product: {
                name: formData.productName,
                finalPrice: selectedCombo?.finalPrice || 0
            },
            quantity: Number(formData.quantity),
            status: 'PENDING'
        };

        const savedOrders = localStorage.getItem('jk_orders');
        const orders = savedOrders ? JSON.parse(savedOrders) : [];
        localStorage.setItem('jk_orders', JSON.stringify([newOrder, ...orders]));

        const message = `New Combo Order Received 🐟📦
Order ID: ${orderId}
Combo: ${formData.productName}
Qty: ${formData.quantity}
Customer: ${formData.customerName}
Phone: ${formData.mobileNumber}
Address: ${formData.address}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919994960009?text=${encodedMessage}`;

        window.location.href = whatsappUrl;
        handleCloseOrder();
    };

    return (
        <div className={styles.main}>
            <div className="container">
                <h1 className={styles.title}>Exclusive Combo Offers</h1>
                <p className={styles.subtitle}>Save big with our handpicked dry fish combos. Freshly packed and delivered to your doorstep.</p>

                <div className={styles.grid}>
                    {COMBO_OFFERS.map((combo) => (
                        <div key={combo.id} className={styles.card}>
                            <div className={styles.badge}>{combo.discount}</div>
                            <img src={combo.image} alt={combo.name} className={styles.image} />
                            <div className={styles.content}>
                                <h2 className={styles.cardTitle}>{combo.name}</h2>
                                <p className={styles.description}>{combo.description}</p>
                                <div className={styles.priceContainer}>
                                    <span className={styles.finalPrice}>₹{combo.finalPrice}</span>
                                    <span className={styles.originalPrice}>₹{combo.originalPrice}</span>
                                </div>
                                <button
                                    className={styles.orderButton}
                                    onClick={() => handleOpenOrder(combo)}
                                >
                                    Order via WhatsApp
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <OrderModal
                product={selectedCombo ? { id: selectedCombo.id, name: selectedCombo.name, finalPrice: selectedCombo.finalPrice } : null}
                isOpen={isModalOpen}
                onClose={handleCloseOrder}
                onSubmit={handleSubmitOrder}
            />
        </div>
    );
}
