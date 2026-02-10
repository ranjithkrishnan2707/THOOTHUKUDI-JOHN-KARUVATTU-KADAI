'use client';

import React, { useState, useEffect } from 'react';
import styles from './combo-offers.module.css';
import { INITIAL_PRODUCTS } from '@/lib/mockData';
import {
    Search,
    Check,
    X,
    Rocket,
    Package,
    IndianRupee,
    Tag,
    Loader2
} from 'lucide-react';

export default function AdminComboOffers() {
    const [allProducts, setAllProducts] = useState<any[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
    const [offerPrice, setOfferPrice] = useState<string>('');
    const [activeOffer, setActiveOffer] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    // Load products and active offer on mount
    useEffect(() => {
        // Load Products (Simulated from existing logic)
        const savedProducts = localStorage.getItem('jk_products');
        if (savedProducts) {
            setAllProducts(JSON.parse(savedProducts));
        } else {
            setAllProducts(INITIAL_PRODUCTS);
        }

        fetchActiveOffer();
    }, []);

    const fetchActiveOffer = async () => {
        try {
            const res = await fetch('/api/mega-deal');
            const data = await res.json();
            if (data.success && data.data) {
                setActiveOffer(data.data);
            }
        } catch (error) {
            console.error('Failed to fetch active offer:', error);
        }
    };

    const toggleProduct = (product: any) => {
        const isSelected = selectedProducts.find(p => p._id === product._id);
        if (isSelected) {
            setSelectedProducts(selectedProducts.filter(p => p._id !== product._id));
        } else {
            setSelectedProducts([...selectedProducts, product]);
        }
    };

    const removeProduct = (productId: string) => {
        setSelectedProducts(selectedProducts.filter(p => p._id !== productId));
    };

    const totalOriginalPrice = selectedProducts.reduce((sum, p) => sum + (Number(p.finalPrice) || 0), 0);
    const offerPriceNum = Number(offerPrice);
    const isValid = selectedProducts.length > 0 && offerPriceNum > 0 && offerPriceNum < totalOriginalPrice;

    const handleReleaseOffer = async () => {
        if (!isValid) return;
        setLoading(true);

        const newOfferPayload = {
            products: selectedProducts.map(({ _id, name, finalPrice, category, hsnCode, image }) => ({
                _id,
                name,
                finalPrice,
                category,
                hsnCode,
                image // Keep image URL if possible
            })),
            totalOriginalPrice,
            offerPrice: offerPriceNum,
        };

        try {
            const res = await fetch('/api/mega-deal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newOfferPayload),
            });

            const data = await res.json();

            if (data.success) {
                setActiveOffer(data.data);
                // Reset form
                setSelectedProducts([]);
                setOfferPrice('');
                alert('New Mega Combo Deal Released to All Devices! 🚀');
            } else {
                throw new Error(data.error || 'Failed to release offer');
            }
        } catch (error) {
            console.error('API Error:', error);
            alert('Error releasing offer. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const filteredProducts = allProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Combo Offers Manager (DB)</h1>
                <p>Curate and release the single active mega-deal for all customers.</p>
            </div>

            {activeOffer && (
                <div className={styles.activeOfferBanner}>
                    <div className={styles.activeInfo}>
                        <h3>🚀 Current Active Offer</h3>
                        <p className={styles.activeProducts}>
                            {activeOffer.products.map((p: any) => p.name).join(' + ')}
                        </p>
                    </div>
                    <div className={styles.activePrice}>
                        <span className={styles.label}>Offer Price</span>
                        <span className={styles.amount}>₹{activeOffer.offerPrice}</span>
                    </div>
                </div>
            )}

            <div className={styles.gridContainer}>
                {/* LEFT: Selection Area */}
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>1. Select Products</div>

                    <div className={styles.searchBox}>
                        <Search size={20} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className={styles.productList}>
                        {filteredProducts.map(product => {
                            const isSelected = selectedProducts.some(p => p._id === product._id);
                            return (
                                <div
                                    key={product._id}
                                    className={`${styles.productItem} ${isSelected ? styles.selected : ''}`}
                                    onClick={() => toggleProduct(product)}
                                >
                                    <img src={product.image} alt={product.name} className={styles.itemThumb} />
                                    <div className={styles.itemInfo}>
                                        <h4>{product.name}</h4>
                                        <span>₹{product.finalPrice}</span>
                                    </div>
                                    <div className={styles.checkIcon}>
                                        <Check size={20} strokeWidth={3} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT: Configuration & Review */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className={styles.section} style={{ flex: 1 }}>
                        <div className={styles.sectionTitle}>2. Selected Items ({selectedProducts.length})</div>

                        {selectedProducts.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '2rem', color: '#cbd5e1' }}>
                                <Package size={48} style={{ marginBottom: '1rem' }} />
                                <p>No products selected yet.</p>
                            </div>
                        ) : (
                            <div className={styles.selectedContainer}>
                                {selectedProducts.map(product => (
                                    <div key={product._id} className={styles.selectedCard}>
                                        <img src={product.image} alt="" className={styles.itemThumb} />
                                        <div className={styles.itemInfo}>
                                            <h4>{product.name}</h4>
                                            <span>₹{product.finalPrice}</span>
                                        </div>
                                        <button
                                            className={styles.removeBtn}
                                            onClick={() => removeProduct(product._id)}
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={styles.pricingSection}>
                        <div className={styles.priceRow}>
                            <span className={styles.priceLabel}>Total Original Price</span>
                            <span className={styles.priceValue}>₹{totalOriginalPrice}</span>
                        </div>

                        <div className={styles.offerInputGroup}>
                            <label>Set Combo Offer Price (₹)</label>
                            <input
                                type="number"
                                className={styles.offerInput}
                                placeholder="Enter amount..."
                                value={offerPrice}
                                onChange={(e) => setOfferPrice(e.target.value)}
                            />
                        </div>

                        {offerPriceNum > 0 && offerPriceNum < totalOriginalPrice && (
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', textAlign: 'center', fontSize: '0.9rem' }}>
                                Savings: <strong style={{ color: '#34d399' }}>₹{totalOriginalPrice - offerPriceNum} ({Math.round(((totalOriginalPrice - offerPriceNum) / totalOriginalPrice) * 100)}%)</strong>
                            </div>
                        )}

                        <button
                            className={styles.releaseBtn}
                            disabled={!isValid || loading}
                            onClick={handleReleaseOffer}
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : <Rocket size={20} />}
                            {loading ? 'Releasing...' : 'Release New Combo Offer'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
