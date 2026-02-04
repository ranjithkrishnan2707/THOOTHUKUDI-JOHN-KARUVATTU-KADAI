import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Admin from '@/models/Admin';
import OTP from '@/models/OTP';

export async function POST(request: NextRequest) {
    await dbConnect();
    try {
        const { email, newAdminOtp, superAdminOtp } = await request.json();

        const newOtpRecord = await OTP.findOne({ email, otp: newAdminOtp, type: 'INVITE_NEW' });
        const superOtpRecord = await OTP.findOne({ email: 'johnkaruvattukadai@gmail.com', otp: superAdminOtp, type: 'INVITE_SUPER' });

        if (!newOtpRecord || !superOtpRecord) {
            return NextResponse.json({ success: false, error: 'Invalid or expired OTPs' }, { status: 400 });
        }

        // Both verified, create new admin
        await Admin.create({ email, role: 'ADMIN' });

        // Delete OTPs
        await OTP.deleteOne({ _id: newOtpRecord._id });
        await OTP.deleteOne({ _id: superOtpRecord._id });

        return NextResponse.json({ success: true, message: 'New admin added successfully' });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}
