import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Admin from '@/models/Admin';
import OTP from '@/models/OTP';
import { sendOTPEmail } from '@/lib/mailer';

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const { email } = await request.json();

        // Check if email is in admin allow list
        const ALLOWED_ADMINS = ['johnkaruvattukadai@gmail.com', 'odinfotech2024@gmail.com'];
        let admin = await Admin.findOne({ email });

        if (!admin && ALLOWED_ADMINS.includes(email)) {
            // Auto-create admin if it matches our initial list
            admin = await Admin.create({ email, role: email === ALLOWED_ADMINS[0] ? 'SUPER_ADMIN' : 'ADMIN' });
        }

        if (!admin) {
            return NextResponse.json({ success: false, error: 'Access denied. Email not authorized.' }, { status: 403 });
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

        // Save OTP to DB
        await OTP.findOneAndUpdate(
            { email },
            { otp, expiresAt },
            { upsert: true, new: true }
        );

        // Send Email
        const emailSent = await sendOTPEmail(email, otp);

        if (!emailSent) {
            console.log('\n=========================================');
            console.log('🔑 DEBUG OTP for:', email);
            console.log('👉 CODE:', otp);
            console.log('=========================================\n');

            return NextResponse.json({
                success: true,
                debugOtp: otp, // Bypass for demo/dev purposes
                message: 'Demo Mode: OTP logged to terminal since email failed.'
            });
        }

        return NextResponse.json({ success: true, message: 'OTP sent successfully' });
    } catch (error: any) {
        console.error('CRITICAL OTP ROUTE ERROR:', error);
        return NextResponse.json({
            success: false,
            error: error.message || 'Internal server error'
        }, { status: 500 });
    }
}
