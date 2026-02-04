import mongoose, { Schema, Document } from 'mongoose';

export interface IAdmin extends Document {
    email: string;
    role: 'SUPER_ADMIN' | 'ADMIN';
    createdAt: Date;
}

const AdminSchema: Schema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        role: { type: String, enum: ['SUPER_ADMIN', 'ADMIN'], default: 'ADMIN' },
    },
    { timestamps: true }
);

export default mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);
