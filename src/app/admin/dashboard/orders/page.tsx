'use client';

import React, { useState, useEffect } from 'react';
import styles from './orders.module.css';
import { INITIAL_ORDERS, INITIAL_PRODUCTS } from '@/lib/mockData';
import {
    Search,
    Calendar,
    User,
    Phone,
    MapPin,
    Package,
    IndianRupee,
    RefreshCcw,
    ChevronRight,
    Filter,
    ClipboardList
} from 'lucide-react';

export default function AdminOrders() {
    const [orders, setOrders] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('ALL');

    useEffect(() => {
        const saved = localStorage.getItem('jk_orders');
        if (saved) {
            setOrders(JSON.parse(saved));
        } else {
            setOrders(INITIAL_ORDERS);
            localStorage.setItem('jk_orders', JSON.stringify(INITIAL_ORDERS));
        }
    }, []);

    const handleStatusChange = (id: string, newStatus: string) => {
        const newOrders = orders.map(o => o._id === id ? { ...o, status: newStatus } : o);
        setOrders(newOrders);
        localStorage.setItem('jk_orders', JSON.stringify(newOrders));
    };

    const handleReset = () => {
        if (confirm('Reset orders history?')) {
            setOrders(INITIAL_ORDERS);
            localStorage.setItem('jk_orders', JSON.stringify(INITIAL_ORDERS));
        }
    };

    // Filter Logic
    const filteredOrders = orders.filter(o => {
        const matchesSearch =
            o.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            o.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            o.mobileNumber.includes(searchTerm);

        const matchesStatus = statusFilter === 'ALL' || o.status === statusFilter;

        return matchesSearch && matchesStatus;
    }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    // Helper to get HSN Code for a product name
    const getProductHSN = (productName: string) => {
        const product = INITIAL_PRODUCTS.find(p => p.name === productName);
        return product?.hsnCode || '030559'; // Default HSN for Dry Fish
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h1>Manage Orders</h1>
                    <p>Track and manage your customer orders effortlessly.</p>
                </div>
                <button className={styles.resetBtn} onClick={handleReset}>
                    <RefreshCcw size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Reset History
                </button>
            </div>

            <div className={styles.controls}>
                <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder="Search by ID, Customer Name or Mobile..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className={styles.filterGroup}>
                    {['ALL', 'PENDING', 'SHIPPED', 'DELIVERED', 'CANCELLED'].map(status => (
                        <button
                            key={status}
                            className={`${styles.filterChip} ${statusFilter === status ? styles.activeChip : ''}`}
                            onClick={() => setStatusFilter(status)}
                        >
                            {status === 'ALL' ? 'All Orders' : status.charAt(0) + status.slice(1).toLowerCase()}
                        </button>
                    ))}
                </div>
            </div>

            {filteredOrders.length > 0 ? (
                <div className={styles.listView}>
                    {filteredOrders.map((o) => (
                        <div key={o._id} className={styles.orderCard}>
                            <div className={styles.cardHeader}>
                                <div>
                                    <div className={styles.orderId}>{o.orderId}</div>
                                    <div className={styles.orderDate}>
                                        <Calendar size={14} />
                                        {new Date(o.createdAt).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                </div>
                                <span className={`${styles.statusBadge} ${styles[o.status.toLowerCase()]}`}>
                                    {o.status}
                                </span>
                            </div>

                            <div className={styles.customerInfo}>
                                <span className={styles.custName}>
                                    <User size={16} style={{ marginRight: '8px', verticalAlign: 'middle', color: '#6b46c1' }} />
                                    {o.customerName}
                                </span>
                                <div className={styles.custContact}>
                                    <Phone size={14} />
                                    {o.mobileNumber}
                                </div>
                                <div className={styles.custAddr}>
                                    <MapPin size={14} style={{ marginTop: '3px' }} />
                                    {o.address}
                                </div>
                            </div>

                            <div className={styles.productSection}>
                                <div className={styles.productName}>
                                    {o.product?.name || 'Unknown Product'}
                                </div>
                                <div className={styles.productMeta}>
                                    <span className={styles.hsnTag}>HSN: {getProductHSN(o.product?.name)}</span>
                                    <div className={styles.priceInfo}>
                                        <span className={styles.qtyLabel}>{o.quantity} Kg × ₹{o.product?.finalPrice || 0}</span>
                                        <span className={styles.totalPrice}>₹{(o.product?.finalPrice || 0) * o.quantity}</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cardFooter}>
                                <select
                                    value={o.status}
                                    onChange={(e) => handleStatusChange(o._id, e.target.value)}
                                    className={styles.statusSelect}
                                >
                                    <option value="PENDING">Mark as Pending</option>
                                    <option value="SHIPPED">Mark as Shipped</option>
                                    <option value="DELIVERED">Mark as Delivered</option>
                                    <option value="CANCELLED">Mark as Cancelled</option>
                                </select>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.emptyState}>
                    <ClipboardList size={64} className={styles.emptyIcon} />
                    <h3>No orders found</h3>
                    <p>Try adjusting your search or filters to find what you're looking for.</p>
                </div>
            )}
        </div>
    );
}
