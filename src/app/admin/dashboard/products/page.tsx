'use client';

import React, { useState, useEffect } from 'react';
import styles from './products.module.css';
import { INITIAL_PRODUCTS } from '@/lib/mockData';
import {
    Plus,
    Edit2,
    Trash2,
    Image as ImageIcon,
    X,
    Tag,
    FileText,
    IndianRupee,
    Percent,
    Link as LinkIcon,
    Search,
    RefreshCcw,
    Filter
} from 'lucide-react';

export default function AdminProducts() {
    const [products, setProducts] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('ALL');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<any>(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        originalPrice: '',
        discountPercentage: '',
        image: '',
        category: 'Regular',
        hsnCode: '030559'
    });

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    useEffect(() => {
        const savedProducts = localStorage.getItem('jk_products');
        if (savedProducts) {
            setProducts(JSON.parse(savedProducts));
        } else {
            setProducts(INITIAL_PRODUCTS);
            localStorage.setItem('jk_products', JSON.stringify(INITIAL_PRODUCTS));
        }
    }, []);

    const updateProducts = (newProducts: any[]) => {
        setProducts(newProducts);
        localStorage.setItem('jk_products', JSON.stringify(newProducts));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setFormData({ ...formData, image: base64String });
                setImagePreview(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleOpenModal = (product: any = null) => {
        if (product) {
            setEditingProduct(product);
            setFormData({
                name: product.name,
                description: product.description,
                originalPrice: product.originalPrice.toString(),
                discountPercentage: product.discountPercentage.toString(),
                image: product.image,
                category: product.category || 'Regular',
                hsnCode: product.hsnCode || '030559'
            });
            setImagePreview(product.image);
        } else {
            setEditingProduct(null);
            setFormData({
                name: '',
                description: '',
                originalPrice: '',
                discountPercentage: '',
                image: '',
                category: 'Regular',
                hsnCode: '030559'
            });
            setImagePreview(null);
        }
        setIsModalOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        const finalPrice = Math.round(Number(formData.originalPrice) * (1 - Number(formData.discountPercentage) / 100));

        let newProducts;
        if (editingProduct) {
            newProducts = products.map(p => p._id === editingProduct._id ? {
                ...p,
                ...formData,
                originalPrice: Number(formData.originalPrice),
                discountPercentage: Number(formData.discountPercentage),
                finalPrice
            } as any : p);
        } else {
            const newProduct = {
                _id: Date.now().toString(),
                ...formData,
                originalPrice: Number(formData.originalPrice),
                discountPercentage: Number(formData.discountPercentage),
                finalPrice
            } as any;
            newProducts = [...products, newProduct];
        }

        updateProducts(newProducts);
        setIsModalOpen(false);
    };

    const handleDelete = (id: string) => {
        if (confirm('Delete this product?')) {
            const newProducts = products.filter(p => p._id !== id);
            updateProducts(newProducts);
        }
    };

    const handleReset = () => {
        if (confirm('Reset to default products?')) {
            updateProducts(INITIAL_PRODUCTS);
        }
    };

    const categories = ['ALL', ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))];

    const filteredProducts = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'ALL' || p.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <h1>Manage Products</h1>
                    <p>Curate your inventory with the finest dry fish selection.</p>
                </div>
                <div className={styles.headerActions}>
                    <button className={styles.resetBtn} onClick={handleReset}>
                        <RefreshCcw size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                        Reset
                    </button>
                    <button className={styles.addBtn} onClick={() => handleOpenModal()}>
                        <Plus size={20} /> Add Product
                    </button>
                </div>
            </div>

            <div className={styles.controls}>
                <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder="Search products by name or description..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className={styles.filterGroup}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.filterChip} ${categoryFilter === cat ? styles.activeChip : ''}`}
                            onClick={() => setCategoryFilter(cat)}
                        >
                            {cat === 'ALL' ? 'All Categories' : cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.productGrid}>
                {filteredProducts.map((p) => (
                    <div key={p._id} className={styles.productCard}>
                        <div className={styles.productImg}>
                            {p.image ? (
                                <img src={p.image} alt={p.name} />
                            ) : (
                                <div className={styles.imgPlaceholder}>
                                    <ImageIcon size={48} />
                                </div>
                            )}
                            <div className={styles.cardBadge}>{p.discountPercentage}% OFF</div>
                        </div>
                        <div className={styles.productInfo}>
                            <h3>{p.name}</h3>
                            <p className={styles.desc}>{p.description}</p>
                            <div className={styles.priceContainer}>
                                <div className={styles.priceRow}>
                                    <span className={styles.finalPrice}>₹{p.finalPrice}</span>
                                    <span className={styles.originalPrice}>₹{p.originalPrice}</span>
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.4rem' }}>
                                    HSN: {p.hsnCode || '030559'} | Category: {p.category || 'Regular'}
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <button className={styles.editBtn} onClick={() => handleOpenModal(p)}>
                                    <Edit2 size={16} /> Edit
                                </button>
                                <button className={styles.deleteBtn} onClick={() => handleDelete(p._id)}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <div className={styles.modalTitleArea}>
                                <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
                                <p>{editingProduct ? 'Update product details and pricing' : 'Create a new item for your store'}</p>
                            </div>
                            <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleSave} className={styles.form}>
                            <div className={styles.formBody}>
                                <div className={styles.formLeft}>
                                    <div className={styles.inputGroup}>
                                        <label><Tag size={16} /> Product Name</label>
                                        <div className={styles.inputWrapper}>
                                            <input
                                                type="text"
                                                placeholder="e.g. Sankara Karuvadu"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label><FileText size={16} /> Description</label>
                                        <textarea
                                            placeholder="Describe the product quality..."
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            style={{ minHeight: '80px' }}
                                            required
                                        />
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.inputGroup}>
                                            <label><IndianRupee size={16} /> Price (₹)</label>
                                            <div className={styles.inputWrapper}>
                                                <input
                                                    type="number"
                                                    value={formData.originalPrice}
                                                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label><Percent size={16} /> Discount (%)</label>
                                            <div className={styles.inputWrapper}>
                                                <input
                                                    type="number"
                                                    value={formData.discountPercentage}
                                                    onChange={(e) => setFormData({ ...formData, discountPercentage: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.inputGroup}>
                                            <label>Category</label>
                                            <select
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}
                                            >
                                                <option value="Regular">Regular</option>
                                                <option value="Premium">Premium</option>
                                                <option value="VVIP">VVIP</option>
                                            </select>
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label>HSN Code</label>
                                            <input
                                                type="text"
                                                value={formData.hsnCode}
                                                onChange={(e) => setFormData({ ...formData, hsnCode: e.target.value })}
                                                style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.formRight}>
                                    <div className={styles.imageUploadArea}>
                                        <label>Product Image</label>
                                        <div className={styles.imagePreviewContainer}>
                                            {imagePreview ? (
                                                <>
                                                    <img src={imagePreview} alt="Preview" className={styles.previewImg} />
                                                    <button
                                                        type="button"
                                                        className={styles.removeImageBtn}
                                                        onClick={() => {
                                                            setImagePreview(null);
                                                            setFormData({ ...formData, image: '' });
                                                        }}
                                                        style={{ position: 'absolute', top: '10px', right: '10px', background: 'white', borderRadius: '50%', padding: '5px' }}
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </>
                                            ) : (
                                                <div className={styles.uploadPlaceholder}>
                                                    <ImageIcon size={40} />
                                                    <span>No image selected</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className={styles.fileInputWrapper}>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                id="product-image"
                                                className={styles.fileInput}
                                            />
                                            <label htmlFor="product-image" className={styles.uploadBtn}>
                                                <LinkIcon size={16} /> {imagePreview ? 'Change Image' : 'Upload Image'}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.formActions}>
                                <button type="button" className={styles.cancelBtn} onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className={styles.saveBtn}>
                                    {editingProduct ? 'Update Product' : 'Create Product'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
