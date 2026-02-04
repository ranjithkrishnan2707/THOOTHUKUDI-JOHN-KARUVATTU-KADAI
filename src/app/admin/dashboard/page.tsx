'use client';

import React, { useState, useEffect } from 'react';
import styles from './dashboard-home.module.css';
import {
    ShoppingBag,
    Users,
    IndianRupee,
    TrendingUp,
    Package
} from 'lucide-react';
import { INITIAL_PRODUCTS, INITIAL_ORDERS } from '@/lib/mockData';

export default function AdminDashboardHome() {
    const [stats, setStats] = useState({
        totalOrders: 0,
        totalRevenue: 0,
        totalCustomers: 0,
        activeProducts: 0,
        topSelling: [] as any[]
    });

    useEffect(() => {
        const savedProducts = localStorage.getItem('jk_products');
        const savedOrders = localStorage.getItem('jk_orders');

        const products = savedProducts ? JSON.parse(savedProducts) : INITIAL_PRODUCTS;
        const orders = savedOrders ? JSON.parse(savedOrders) : INITIAL_ORDERS;

        // Calculate Stats
        const totalOrders = orders.length;
        const totalRevenue = orders.reduce((acc: number, o: any) =>
            o.status !== 'CANCELLED' ? acc + (o.product.finalPrice * o.quantity) : acc, 0
        );

        // Unique mobile numbers as customers
        const customers = new Set(orders.map((o: any) => o.mobileNumber)).size;

        const activeProducts = products.length;

        // Simplified Top Selling (by count)
        const productCounts: Record<string, number> = {};
        orders.forEach((o: any) => {
            const name = o.product.name;
            productCounts[name] = (productCounts[name] || 0) + o.quantity;
        });

        const topSelling = Object.entries(productCounts)
            .map(([name, sales]) => ({ name, sales }))
            .sort((a, b) => (b.sales as number) - (a.sales as number))
            .slice(0, 3);

        setStats({
            totalOrders,
            totalRevenue,
            totalCustomers: customers,
            activeProducts,
            topSelling
        });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={`${styles.icon} ${styles.blue}`}>
                        <ShoppingBag size={24} />
                    </div>
                    <div className={styles.statInfo}>
                        <p>Total Orders</p>
                        <h3>{stats.totalOrders}</h3>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={`${styles.icon} ${styles.green}`}>
                        <IndianRupee size={24} />
                    </div>
                    <div className={styles.statInfo}>
                        <p>Total Revenue</p>
                        <h3>₹{stats.totalRevenue}</h3>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={`${styles.icon} ${styles.orange}`}>
                        <Users size={24} />
                    </div>
                    <div className={styles.statInfo}>
                        <p>Customers</p>
                        <h3>{stats.totalCustomers}</h3>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={`${styles.icon} ${styles.purple}`}>
                        <Package size={24} />
                    </div>
                    <div className={styles.statInfo}>
                        <p>Active Products</p>
                        <h3>{stats.activeProducts}</h3>
                    </div>
                </div>
            </div>

            <div className={styles.chartsGrid}>
                <div className={styles.chartCard}>
                    <h4>Sales Overview</h4>
                    <div className={styles.placeholderChart}>
                        <TrendingUp size={48} color="#e2e8f0" />
                        <p>Sales trend based on {stats.totalOrders} total orders</p>
                    </div>
                </div>
                <div className={styles.chartCard}>
                    <h4>Top Selling Items</h4>
                    <ul className={styles.topList}>
                        {stats.topSelling.map((item: any, idx: number) => (
                            <li key={idx}>
                                <span>{item.name}</span>
                                <strong>{item.sales} Kg</strong>
                            </li>
                        ))}
                        {stats.topSelling.length === 0 && <li style={{ color: '#94a3b8' }}>No sales data yet</li>}
                    </ul>
                </div>
            </div>
        </div>
    );
}
