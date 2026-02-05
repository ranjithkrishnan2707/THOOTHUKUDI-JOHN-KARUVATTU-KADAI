'use client';

import React, { useState } from 'react';
import styles from './track.module.css';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';

export default function TrackOrder() {
    const [orderId, setOrderId] = useState('');
    const [foundOrder, setFoundOrder] = useState<any>(null);
    const [error, setError] = useState('');

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setFoundOrder(null);

        const savedOrders = localStorage.getItem('jk_orders');
        if (savedOrders) {
            const orders = JSON.parse(savedOrders);
            const order = orders.find((o: any) => o.orderId.toUpperCase() === orderId.toUpperCase());
            if (order) {
                setFoundOrder(order);
            } else {
                setError('Order ID not found. Please check and try again.');
            }
        } else {
            setError('No orders found in your recent history.');
        }
    };

    const getStatusStep = (status: string) => {
        switch (status) {
            case 'PENDING': return 1;
            case 'SHIPPED': return 2;
            case 'DELIVERED': return 3;
            default: return 1;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Track Your Order</h1>
                <p className={styles.subtitle}>Enter your Order ID (e.g., JK1234) to see the live status of your dry fish delivery.</p>

                <form onSubmit={handleTrack} className={styles.searchForm}>
                    <div className={styles.inputWrapper}>
                        <Search className={styles.searchIcon} size={20} />
                        <input
                            type="text"
                            placeholder="Enter Order ID"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            className={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.trackBtn}>Track Now</button>
                </form>

                {error && <div className={styles.error}>{error}</div>}

                {foundOrder && (
                    <div className={styles.result}>
                        <div className={styles.orderHeader}>
                            <div>
                                <span className={styles.label}>Order ID:</span>
                                <span className={styles.val}>{foundOrder.orderId}</span>
                            </div>
                            <div>
                                <span className={styles.label}>Date:</span>
                                <span className={styles.val}>{new Date(foundOrder.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>

                        <div className={styles.stepper}>
                            <div className={`${styles.step} ${getStatusStep(foundOrder.status) >= 1 ? styles.active : ''}`}>
                                <div className={styles.stepIcon}><Clock size={20} /></div>
                                <span>Pending</span>
                            </div>
                            <div className={styles.line}></div>
                            <div className={`${styles.step} ${getStatusStep(foundOrder.status) >= 2 ? styles.active : ''}`}>
                                <div className={styles.stepIcon}><Package size={20} /></div>
                                <span>Shipped</span>
                            </div>
                            <div className={styles.line}></div>
                            <div className={`${styles.step} ${getStatusStep(foundOrder.status) >= 3 ? styles.active : ''}`}>
                                <div className={styles.stepIcon}><Truck size={20} /></div>
                                <span>Delivered</span>
                            </div>
                        </div>

                        <div className={styles.orderInfo}>
                            <h3>Order Summary</h3>
                            <div className={styles.infoRow}>
                                <span>Customer:</span>
                                <strong>{foundOrder.customerName}</strong>
                            </div>
                            <div className={styles.infoRow}>
                                <span>Product:</span>
                                <strong>{foundOrder.product.name}</strong>
                            </div>
                            <div className={styles.infoRow}>
                                <span>Quantity:</span>
                                <strong>{foundOrder.quantity} Kg</strong>
                            </div>
                            <div className={styles.infoRow}>
                                <span>Delivery Address:</span>
                                <p>{foundOrder.address}</p>
                            </div>
                        </div>

                        <div className={`${styles.statusBadge} ${styles[foundOrder.status.toLowerCase()]}`}>
                            {foundOrder.status === 'DELIVERED' && <CheckCircle size={18} />}
                            Current Status: {foundOrder.status}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
