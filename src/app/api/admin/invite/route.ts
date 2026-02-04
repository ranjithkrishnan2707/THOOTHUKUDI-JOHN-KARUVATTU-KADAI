import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Admin from '@/models/Admin';
import OTP from '@/models/OTP';
import { sendOTPEmail } from '@/lib/mailer';

export async function POST(request: NextRequest) {
    await dbConnect();
    try {
        const { email } = await request.json();

        // Check if new admin already exists
        const existing = await Admin.findOne({ email });
        if (existing) {
            return NextResponse.json({ success: false, error: 'Admin already exists' }, { status: 400 });
        }

        // Generate OTP for New Admin
        const newAdminOtp = Math.floor(100000 + Math.random() * 900000).toString();
        // Generate OTP for Super Admin
        const superAdminOtp = Math.floor(100000 + Math.random() * 900000).toString();

        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

        // Save OTPs
        await OTP.findOneAndUpdate({ email: email, type: 'INVITE_NEW' }, { otp: newAdminOtp, expiresAt }, { upsert: true });
        await OTP.findOneAndUpdate({ email: 'johnkaruvattukadai@gmail.com', type: 'INVITE_SUPER' }, { otp: superAdminOtp, expiresAt }, { upsert: true });

        // Send Emails
        await sendOTPEmail(email, newAdminOtp);
        await sendOTPEmail('johnkaruvattukadai@gmail.com', superAdminOtp);

        return NextResponse.json({ success: true, message: 'OTPs sent to both addresses' });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}
