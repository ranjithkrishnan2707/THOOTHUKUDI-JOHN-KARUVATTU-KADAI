import React, { useState } from 'react';
import styles from './ProductCard.module.css';
import { ShoppingCart, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
    name: string;
    image: string;
    originalPrice: number;
    discountPercentage: number;
    finalPrice: number;
    onOrder: () => void;
    product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    image,
    originalPrice,
    discountPercentage,
    finalPrice,
    onOrder,
    product,
}) => {
    const { addToCart } = useCart();
    const [showToast, setShowToast] = useState(false);

    const handleAddToCart = () => {
        addToCart(product, 0.5);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

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
                <div className={styles.buttonGroup}>
                    <button className={styles.addToCartButton} onClick={handleAddToCart}>
                        <ShoppingCart size={18} />
                    </button>
                    <button className={styles.orderButton} onClick={onOrder}>
                        <ShoppingBag size={18} />
                        Order Now
                    </button>
                </div>
            </div>
            {showToast && (
                <div className={styles.toast}>
                    Added to cart!
                </div>
            )}
        </div>
    );
};

export default ProductCard;
