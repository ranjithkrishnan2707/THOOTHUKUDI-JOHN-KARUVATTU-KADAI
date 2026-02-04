import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    image: string;
    originalPrice: number;
    discountPercentage: number;
    finalPrice: number;
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        originalPrice: { type: Number, required: true },
        discountPercentage: { type: Number, default: 0 },
        finalPrice: { type: Number, required: true },
    },
    { timestamps: true }
);

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
