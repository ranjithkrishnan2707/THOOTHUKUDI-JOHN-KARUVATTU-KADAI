const nodemailer = require('nodemailer');

const EMAIL_USER = 'johnkaruvattukadai@gmail.com';
const EMAIL_PASS = 'zG1h99BUR2eouyMW';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

async function testMail() {
    console.log('📬 Attempting to send test email to johnkaruvattukadai@gmail.com...');

    try {
        await transporter.sendMail({
            from: `"JK Test" <${EMAIL_USER}>`,
            to: EMAIL_USER,
            subject: 'Email Configuration Test',
            text: 'If you are reading this, your email configuration is working perfectly!',
            html: '<b>If you are reading this, your email configuration is working perfectly!</b>'
        });
        console.log('✅ Success! Test email sent successfully.');
    } catch (error) {
        console.error('❌ Failed! Email error details:');
        console.error(error.message);
        if (error.message.includes('Username and Password not accepted')) {
            console.log('\n💡 SUGGESTION: The 16-digit App Password you provided might be incorrect or expired.');
            console.log('Please ensure you copied all 16 characters correctly from Google without extra spaces.');
        }
    }
}

testMail();
