import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Order from '@/models/Order';

export async function GET() {
    await dbConnect();
    try {
        const orders = await Order.find({}).populate('product').sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: orders });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to fetch orders' }, { status: 400 });
    }
}

export async function POST(request: NextRequest) {
    await dbConnect();
    try {
        const body = await request.json();
        // Generate Order ID (e.g., JK1023)
        const count = await Order.countDocuments();
        const orderId = `JK${1000 + count}`;

        const order = await Order.create({ ...body, orderId });
        return NextResponse.json({ success: true, data: order }, { status: 201 });
    } catch (error) {
        console.error('Order creation error:', error);
        return NextResponse.json({ success: false, error: 'Failed to place order' }, { status: 400 });
    }
}
