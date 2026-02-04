import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Order from '@/models/Order';
import Product from '@/models/Product';

export async function GET() {
    await dbConnect();
    try {
        const totalOrders = await Order.countDocuments();
        const activeProducts = await Product.countDocuments();

        // Calculate total revenue
        const orders = await Order.find({ status: { $ne: 'CANCELLED' } }).populate('product');
        const totalRevenue = orders.reduce((sum, order: any) => {
            const price = order.product?.finalPrice || 0;
            return sum + (price * order.quantity);
        }, 0);

        // Get unique customers (by mobile number)
        const totalCustomers = await Order.distinct('mobileNumber').then(res => res.length);

        // Top selling items
        const topSelling = await Order.aggregate([
            { $match: { status: { $ne: 'CANCELLED' } } },
            { $group: { _id: '$product', count: { $sum: '$quantity' } } },
            { $sort: { count: -1 } },
            { $limit: 3 },
            {
                $lookup: {
                    from: 'products',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'productInfo'
                }
            },
            { $unwind: '$productInfo' }
        ]);

        return NextResponse.json({
            success: true,
            data: {
                totalOrders,
                totalRevenue,
                totalCustomers,
                activeProducts,
                topSelling: topSelling.map(item => ({
                    name: item.productInfo.name,
                    sales: item.count
                }))
            }
        });
    } catch (error) {
        console.error('Analytics error:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch analytics' }, { status: 400 });
    }
}
