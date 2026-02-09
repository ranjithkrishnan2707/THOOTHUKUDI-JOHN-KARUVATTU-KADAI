import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext';

export const metadata: Metadata = {
    title: 'THOOTHUKUDI JOHN KARUVATTU KADAI | Buy Fresh Dry Fish Online',
    description: 'Pure and authentic dry fish from the shores of Thoothukudi. Wide range of dry fish including Sankara, Nethili, Vanjiram, and more. Best quality, traditional drying methods.',
    keywords: 'dry fish, Thoothukudi, Karuvattu Kadai, online dry fish, fresh karuvadu, Sankara Karuvadu, Nethili Karuvadu',
    openGraph: {
        title: 'THOOTHUKUDI JOHN KARUVATTU KADAI',
        description: 'Authentic Thoothukudi Dry Fish delivered to your doorstep.',
        url: 'https://thoothukudijohnkaruvattukadai.com',
        siteName: 'THOOTHUKUDI JOHN KARUVATTU KADAI',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'THOOTHUKUDI JOHN KARUVATTU KADAI Dry Fish',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Google Analytics Placeholder */}
            </head>
            <body>
                <CartProvider>
                    <main>{children}</main>
                </CartProvider>
            </body>
        </html>
    );
}
