import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
    orderId: string;
    product: mongoose.Types.ObjectId;
    quantity: number;
    customerName: string;
    mobileNumber: string;
    address: string;
    status: 'PENDING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
    createdAt: Date;
    updatedAt: Date;
}

const OrderSchema: Schema = new Schema(
    {
        orderId: { type: String, required: true, unique: true },
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        customerName: { type: String, required: true },
        mobileNumber: { type: String, required: true },
        address: { type: String, required: true },
        status: { type: String, enum: ['PENDING', 'SHIPPED', 'DELIVERED', 'CANCELLED'], default: 'PENDING' },
    },
    { timestamps: true }
);

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
