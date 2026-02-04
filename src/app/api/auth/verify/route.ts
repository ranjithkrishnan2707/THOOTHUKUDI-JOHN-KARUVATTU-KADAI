import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import OTP from '@/models/OTP';

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const { email, otp } = await request.json();

        const otpRecord = await OTP.findOne({ email, otp });

        if (!otpRecord) {
            return NextResponse.json({ success: false, error: 'Invalid or expired OTP' }, { status: 400 });
        }

        if (new Date() > otpRecord.expiresAt) {
            await OTP.deleteOne({ _id: otpRecord._id });
            return NextResponse.json({ success: false, error: 'OTP expired' }, { status: 400 });
        }

        // OTP verified, delete it
        await OTP.deleteOne({ _id: otpRecord._id });

        // In a real app, generate a JWT here
        // For now, we'll return success and handle session on client/server side
        return NextResponse.json({
            success: true,
            message: 'OTP verified successfully',
            // token: 'mock-jwt-token' 
        });
    } catch (error: any) {
        console.error('Verify OTP Error:', error);
        return NextResponse.json({ success: false, error: error.message || 'Internal server error' }, { status: 500 });
    }
}
