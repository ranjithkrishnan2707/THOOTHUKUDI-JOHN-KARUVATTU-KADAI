'use client';

import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

interface Product {
    id: string;
    name: string;
    image: string;
    originalPrice: number;
    discountPercentage: number;
    finalPrice: number;
}

interface ProductGridProps {
    products: Product[];
    onOrder: (product: any) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onOrder }) => {
    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    {...product}
                    onOrder={() => onOrder(product)}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
