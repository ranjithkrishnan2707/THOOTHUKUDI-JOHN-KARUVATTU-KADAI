import mongoose, { Schema, Document } from 'mongoose';

export interface IOTP extends Document {
    email: string;
    otp: string;
    type: string;
    expiresAt: Date;
}

const OTPSchema: Schema = new Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    type: { type: String, default: 'AUTH' },
    expiresAt: { type: Date, required: true, index: { expires: '5m' } },
});

export default mongoose.models.OTP || mongoose.model<IOTP>('OTP', OTPSchema);
