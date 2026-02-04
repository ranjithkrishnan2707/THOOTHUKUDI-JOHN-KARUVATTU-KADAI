'use client';

import React, { useState } from 'react';
import styles from './OrderModal.module.css';
import { X, Send } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    finalPrice: number;
}

interface OrderModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formData: any) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ product, isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        quantity: 1,
        customerName: '',
        mobileNumber: '',
        address: '',
    });

    if (!isOpen || !product) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ ...formData, productId: product.id, productName: product.name });
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <X size={24} />
                </button>
                <h2 className={styles.title}>Place Your Order</h2>
                <div className={styles.productInfo}>
                    <p>Product: <strong>{product.name}</strong></p>
                    <p>Price: <strong>₹{product.finalPrice} / Kg</strong></p>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                        <label htmlFor="quantity">Quantity (Kg)</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            value={formData.quantity}
                            onChange={handleChange}
                            required
                            suppressHydrationWarning
                        />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="customerName">Your Name</label>
                        <input
                            type="text"
                            id="customerName"
                            name="customerName"
                            placeholder="Enter your name"
                            value={formData.customerName}
                            onChange={handleChange}
                            required
                            suppressHydrationWarning
                        />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            placeholder="e.g. 9876543210"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                            suppressHydrationWarning
                        />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="address">Full Delivery Address</label>
                        <textarea
                            id="address"
                            name="address"
                            placeholder="House No, Street, Landmark, Pincode"
                            value={formData.address}
                            onChange={handleChange}
                            rows={3}
                            required
                            suppressHydrationWarning
                        />
                    </div>
                    <div className={styles.totalPrice}>
                        Total Amount: <span>₹{product.finalPrice * formData.quantity}</span>
                    </div>
                    <button type="submit" className={styles.submitButton} suppressHydrationWarning>
                        <Send size={18} />
                        Confirm Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrderModal;
