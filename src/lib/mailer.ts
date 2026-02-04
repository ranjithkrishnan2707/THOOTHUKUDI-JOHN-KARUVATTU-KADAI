import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendOTPEmail = async (email: string, otp: string) => {
    const mailOptions = {
        from: `"THOOTHUKUDI JOHN KARUVATTU KADAI" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Admin Login OTP - THOOTHUKUDI JOHN KARUVATTU KADAI',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #002b5b; text-align: center;">Admin Verification</h2>
        <p>Hello,</p>
        <p>Your OTP for admin login is:</p>
        <div style="background-color: #f0f4f8; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; color: #2b7a78; border-radius: 5px; margin: 20px 0;">
          ${otp}
        </div>
        <p>This OTP is valid for <strong>5 minutes</strong>. Do not share this code with anyone.</p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
        <p style="font-size: 12px; color: #777; text-align: center;">
          THOOTHUKUDI JOHN KARUVATTU KADAI <br />
          Pure & Authentic Dry Fish Online
        </p>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Email send error:', error);
        return false;
    }
};
