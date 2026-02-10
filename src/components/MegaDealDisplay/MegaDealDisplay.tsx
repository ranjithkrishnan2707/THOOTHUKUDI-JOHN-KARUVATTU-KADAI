'use client';

import React, { useState, useEffect } from 'react';
import { Timer, ShoppingBag, Sparkles, X } from 'lucide-react';
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

export default function MegaDealDisplay() {
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
                    setIsVisible(true);
                }
            } catch (error) {
                console.error("Failed to fetch mega deal", error);
            }
        };

        fetchDeal();
    }, []);

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


    if (!deal || !isVisible) return null;

    const savings = deal.totalOriginalPrice - deal.offerPrice;
    const savingsPercent = Math.round((savings / deal.totalOriginalPrice) * 100);

    return (
        <div className={styles.container}>
            {/* Background decorations */}
            <div className={styles.decoCircle1}></div>
            <div className={styles.decoCircle2}></div>

            <button
                onClick={handleClose}
                className={styles.closeButton}
                aria-label="Close deal"
            >
                <X size={20} />
            </button>

            <div className={styles.contentWrapper}>

                {/* Left: Text & Timer */}
                <div className={styles.infoSection}>
                    <div className={styles.badge}>
                        <Sparkles size={14} />
                        Live Exclusive Deal
                    </div>
                    <h2 className={styles.title}>
                        Super Combo Offer
                    </h2>
                    <p className={styles.description}>
                        {deal.products.map(p => p.name).join(' + ')}
                    </p>

                    <div className={styles.priceContainer}>
                        <div className={styles.priceWrapper}>
                            <span className={styles.originalPrice}>₹{deal.totalOriginalPrice}</span>
                            <span className={styles.offerPrice}>₹{deal.offerPrice}</span>
                        </div>
                        <div className={styles.saveBadge}>
                            SAVE {savingsPercent}%
                        </div>
                    </div>
                </div>

                {/* Right: Action */}
                <div className={styles.actionSection}>
                    <button
                        onClick={handleOrderClick}
                        className={styles.orderButton}
                    >
                        <ShoppingBag size={20} />
                        Grab Deal Now
                    </button>
                    <p className={styles.timerText}>
                        <Timer size={12} style={{ display: 'inline', marginRight: '4px' }} />
                        Limited time offer
                    </p>
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
