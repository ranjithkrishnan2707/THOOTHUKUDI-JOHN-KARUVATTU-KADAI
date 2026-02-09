'use client';

import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import styles from './page.module.css';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import OrderModal from '@/components/OrderModal/OrderModal';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCheckout = () => {
        setIsModalOpen(true);
    };

    const handleSubmitOrder = async (formData: any) => {
        // Generate Order ID
        const orderId = `JK${Math.floor(1000 + Math.random() * 9000)}`;

        // Create order items list
        const orderItems = cart.map(item =>
            `${item.name} (${item.quantity} Kg) - ₹${item.finalPrice * item.quantity}`
        ).join('\n');

        // Save Order to localStorage for Admin visibility
        const newOrder = {
            _id: Date.now().toString(),
            orderId: orderId,
            createdAt: new Date().toISOString(),
            customerName: formData.customerName,
            mobileNumber: formData.mobileNumber,
            address: formData.address,
            items: cart.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.finalPrice
            })),
            totalAmount: getCartTotal(),
            status: 'PENDING'
        };

        const savedOrders = localStorage.getItem('jk_orders');
        const orders = savedOrders ? JSON.parse(savedOrders) : [];
        localStorage.setItem('jk_orders', JSON.stringify([newOrder, ...orders]));

        // Open WhatsApp
        const message = `New Cart Order 🛒
Order ID: ${orderId}
Items:
${orderItems}

Total: ₹${getCartTotal()}
Customer: ${formData.customerName}
Phone: ${formData.mobileNumber}
Address: ${formData.address}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919994960009?text=${encodedMessage}`;

        window.location.href = whatsappUrl;

        // Clear cart after order
        clearCart();
        setIsModalOpen(false);
    };

    if (cart.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <ShoppingBag size={80} strokeWidth={1} />
                <h2>Your cart is empty</h2>
                <p>Add some delicious dry fish to your cart!</p>
                <Link href="/" className={styles.shopButton}>
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.cartPage}>
            <div className="container">
                <div className={styles.header}>
                    <Link href="/" className={styles.backButton}>
                        <ArrowLeft size={20} />
                        Continue Shopping
                    </Link>
                    <h1 className={styles.title}>Shopping Cart</h1>
                    <p className={styles.itemCount}>{cart.length} {cart.length === 1 ? 'item' : 'items'}</p>
                </div>

                <div className={styles.cartContent}>
                    <div className={styles.cartItems}>
                        {cart.map((item) => (
                            <div key={item.id} className={styles.cartItem}>
                                <img src={item.image} alt={item.name} className={styles.itemImage} />
                                <div className={styles.itemDetails}>
                                    <h3 className={styles.itemName}>{item.name}</h3>
                                    <p className={styles.itemPrice}>₹{item.finalPrice} / Kg</p>
                                    {item.discountPercentage > 0 && (
                                        <span className={styles.discount}>{item.discountPercentage}% OFF</span>
                                    )}
                                </div>
                                <div className={styles.itemActions}>
                                    <div className={styles.quantityControl}>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 0.5)}
                                            className={styles.quantityButton}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className={styles.quantity}>{item.quantity} Kg</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 0.5)}
                                            className={styles.quantityButton}
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                    <p className={styles.itemTotal}>₹{item.finalPrice * item.quantity}</p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className={styles.removeButton}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cartSummary}>
                        <h2 className={styles.summaryTitle}>Order Summary</h2>
                        <div className={styles.summaryRow}>
                            <span>Subtotal</span>
                            <span>₹{getCartTotal()}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span>Delivery</span>
                            <span className={styles.free}>FREE</span>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={`${styles.summaryRow} ${styles.total}`}>
                            <span>Total</span>
                            <span>₹{getCartTotal()}</span>
                        </div>
                        <button onClick={handleCheckout} className={styles.checkoutButton}>
                            <ShoppingBag size={20} />
                            Proceed to Checkout
                        </button>
                        <button onClick={clearCart} className={styles.clearButton}>
                            Clear Cart
                        </button>
                    </div>
                </div>
            </div>

            <OrderModal
                product={{ id: 'cart', name: 'Cart Items', finalPrice: getCartTotal() }}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmitOrder}
            />
        </div>
    );
}
