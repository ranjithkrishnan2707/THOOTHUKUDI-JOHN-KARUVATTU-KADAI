import React from 'react';
import styles from './ProductCard.module.css';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    name: string;
    image: string;
    originalPrice: number;
    discountPercentage: number;
    finalPrice: number;
    onOrder: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    image,
    originalPrice,
    discountPercentage,
    finalPrice,
    onOrder,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={name} className={styles.image} />
                {discountPercentage > 0 && (
                    <span className={styles.discountBadge}>{discountPercentage}% OFF</span>
                )}
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.priceContainer}>
                    <span className={styles.finalPrice}>₹{finalPrice}</span>
                    {discountPercentage > 0 && (
                        <span className={styles.originalPrice}>₹{originalPrice}</span>
                    )}
                </div>
                <button className={styles.orderButton} onClick={onOrder}>
                    <ShoppingCart size={18} />
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
