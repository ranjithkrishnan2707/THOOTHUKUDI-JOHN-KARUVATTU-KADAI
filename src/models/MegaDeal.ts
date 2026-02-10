import mongoose from 'mongoose';

const MegaDealSchema = new mongoose.Schema({
    products: [{
        _id: String,
        name: String,
        finalPrice: Number,
        image: String,
        // Store localized snapshot of product data to avoid issues if product is deleted
    }],
    totalOriginalPrice: {
        type: Number,
        required: true,
    },
    offerPrice: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
});

export default mongoose.models.MegaDeal || mongoose.model('MegaDeal', MegaDealSchema);
