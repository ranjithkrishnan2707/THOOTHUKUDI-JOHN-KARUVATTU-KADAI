'use client';

import React, { useState, useEffect } from 'react';
import { Timer, ShoppingBag, Sparkles, X, ChevronRight, Rocket } from 'lucide-react';
import OrderModal from '@/components/OrderModal/OrderModal';
import styles from './MegaDealDisplay.module.css';

interface MegaDealProduct {
    _id: string;
    name: string;
    finalPrice: number;
    image?: string;
}

interface MegaDeal {
    _id: string; // MongoDB ID uses _id
    products: MegaDealProduct[];
    totalOriginalPrice: number;
    offerPrice: number;
    createdAt: string;
    isActive: boolean;
}

interface MegaDealDisplayProps {
    variant?: 'popup' | 'inline';
}

export default function MegaDealDisplay({ variant = 'popup' }: MegaDealDisplayProps) {
    const [deal, setDeal] = useState<MegaDeal | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchDeal = async () => {
            try {
                const res = await fetch('/api/mega-deal');
                const data = await res.json();
                if (data.success && data.data) {
                    setDeal(data.data);
                    // Add a small delay for the entrance animation for popup variant
                    if (variant === 'popup') {
                        setTimeout(() => setIsVisible(true), 1000);
                    } else {
                        setIsVisible(true); // Always visible for inline variant
                    }
                }
            } catch (error) {
                console.error("Failed to fetch mega deal", error);
            }
        };

        fetchDeal();
    }, [variant]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleOrderClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleSubmitOrder = async (formData: any) => {
        const orderId = `JK-MEGA-${Math.floor(1000 + Math.random() * 9000)}`;

        // We still save to local storage for user's own history
        const newOrder = {
            _id: Date.now().toString(),
            orderId: orderId,
            createdAt: new Date().toISOString(),
            customerName: formData.customerName,
            mobileNumber: formData.mobileNumber,
            address: formData.address,
            product: {
                name: `MEGA DEAL: ${deal?.products.map(p => p.name).join(' + ')}`,
                finalPrice: deal?.offerPrice || 0
            },
            quantity: Number(formData.quantity),
            status: 'PENDING'
        };

        const savedOrders = localStorage.getItem('jk_orders');
        const orders = savedOrders ? JSON.parse(savedOrders) : [];
        localStorage.setItem('jk_orders', JSON.stringify([newOrder, ...orders]));

        // WhatsApp Redirect
        const message = `*MEGA COMBO DEAL ORDER* 🚀
Order ID: ${orderId}
Items: ${deal?.products.map(p => p.name).join(' + ')}
Price: ₹${deal?.offerPrice}
Name: ${formData.customerName}
Address: ${formData.address}
Phone: ${formData.mobileNumber}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919994960009?text=${encodedMessage}`;

        window.location.href = whatsappUrl;
        handleCloseModal();
        setIsVisible(false);
    };


    if (!deal) return null;

    const savings = deal.totalOriginalPrice - deal.offerPrice;
    const savingsPercent = Math.round((savings / deal.totalOriginalPrice) * 100);

    const isInline = variant === 'inline';

    return (
        <div className={styles.containerInline}>
            {/* Badge */}
            <div className={styles.limitedBadge}>
                <Timer size={14} />
                Limited Time Offer
            </div>

            {/* Header */}
            <div className={styles.headerSection}>
                <div className={styles.titleRow}>
                    <Rocket size={32} className={styles.rocketIcon} />
                    <h2 className={styles.mainTitle}>Mega Combo Deal</h2>
                </div>
                <p className={styles.subTitle}>Grab this exclusive bundle prepared just for you!</p>
            </div>

            {/* Content Split: Products Left, Price Right */}
            <div className={styles.contentSplit}>
                {/* 1. Products Grid */}
                <div className={styles.productsGrid}>
                    {deal.products.map(product => (
                        <div key={product._id} className={styles.productCard}>
                            <img
                                src={product.image || '/placeholder-product.png'}
                                alt={product.name}
                                className={styles.cardImage}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://placehold.co/100x100?text=Product';
                                }}
                            />
                            <span className={styles.cardName}>{product.name}</span>
                            <span className={styles.cardValue}>Value: ₹{product.finalPrice}</span>
                        </div>
                    ))}
                </div>

                {/* Divider Line */}
                <div className={styles.divider}></div>

                {/* 2. Price Card */}
                <div className={styles.priceCard}>
                    <span className={styles.originalPrice}>₹{deal.totalOriginalPrice}</span>
                    <span className={styles.offerPrice}>₹{deal.offerPrice}</span>
                    <span className={styles.comboPriceLabel}>COMBO PRICE</span>

                    <button
                        onClick={handleOrderClick}
                        className={styles.orderBtn}
                    >
                        ORDER NOW
                    </button>
                </div>
            </div>

            <OrderModal
                product={{
                    id: deal._id,
                    name: "MEGA COMBO DEAL",
                    finalPrice: deal.offerPrice,
                }}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmitOrder}
            />
        </div>
    );
}
