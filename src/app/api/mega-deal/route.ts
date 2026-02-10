import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import MegaDeal from '@/models/MegaDeal';

export async function GET() {
    await dbConnect();
    try {
        // Find the most recent active deal
        const activeDeal = await MegaDeal.findOne({ isActive: true }).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: activeDeal });
    } catch (error) {
        console.error('Error fetching mega deal:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch mega deal' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    await dbConnect();
    try {
        const body = await request.json();

        // Deactivate all existing active deals to ensure only one runs at a time
        await MegaDeal.updateMany({ isActive: true }, { isActive: false });

        // Create the new deal
        const newDeal = await MegaDeal.create({
            ...body,
            isActive: true, // Force new deal to be active
            createdAt: new Date(),
        });

        return NextResponse.json({ success: true, data: newDeal }, { status: 201 });
    } catch (error) {
        console.error('Error creating mega deal:', error);
        return NextResponse.json({ success: false, error: 'Failed to create mega deal' }, { status: 500 });
    }
}
