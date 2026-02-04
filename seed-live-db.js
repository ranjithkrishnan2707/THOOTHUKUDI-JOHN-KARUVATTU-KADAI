const { MongoClient } = require('mongodb');

// The live URI you provided
const MONGODB_URI = "mongodb+srv://admin_john:zG1h99BUR2eouyMW@karuvattu-kadai.rwfvnvi.mongodb.net/karuvattu_kadai?retryWrites=true&w=majority&appName=karuvattu-kadai";

const FULL_PRODUCT_LIST = [
    {
        name: 'Premium Sankara Karuvadu (Red Snapper)',
        description: 'Premium red snapper dry fish, salted and sun-dried naturally. No preservatives.',
        image: '/images/sankara.png',
        originalPrice: 450,
        discountPercentage: 10,
        finalPrice: 405,
        category: 'Premium',
        hsnCode: '030559'
    },
    {
        name: 'Fried Nethili Karuvadu (Anchovies)',
        description: 'Choice silver anchovies, perfectly dried and cleaned. High in protein.',
        image: '/images/nethili.png',
        originalPrice: 320,
        discountPercentage: 15,
        finalPrice: 272,
        category: 'Regular',
        hsnCode: '030559'
    },
    {
        name: 'Large Vanjiram Karuvadu',
        description: 'Elite King Fish slices, meticulously cured for the best taste of Thoothukudi.',
        image: '/images/vanjiram.png',
        originalPrice: 1200,
        discountPercentage: 5,
        finalPrice: 1140,
        category: 'VVIP',
        hsnCode: '030559'
    },
    {
        name: 'Dry Anchovy (Nethili Karuvadu)',
        description: 'Premium quality dry Nethili, thoroughly cleaned and sun-dried.',
        image: '/images/nethili.png',
        originalPrice: 700,
        discountPercentage: 14,
        finalPrice: 600,
        category: 'Regular',
        hsnCode: '030559'
    },
    {
        name: 'Dry Sardine (Mathi Karuvadu)',
        description: 'Rich in Omega-3, tasty Mathi fish dried to perfection.',
        image: '/images/mathi.png',
        originalPrice: 500,
        discountPercentage: 10,
        finalPrice: 450,
        category: 'Regular',
        hsnCode: '030559'
    },
    {
        name: 'Dry Mackerel (Bangda Karuvadu)',
        description: 'Classic Mackerel dry fish, famous for its distinct flavor.',
        image: '/images/bangda.png',
        originalPrice: 650,
        discountPercentage: 15,
        finalPrice: 550,
        category: 'Premium',
        hsnCode: '030559'
    },
    {
        name: 'Dry Seer Fish (Vanjiram Karuvadu)',
        description: 'The King of Fish (Vanjiram), premium slices, top quality.',
        image: '/images/vanjiram.png',
        originalPrice: 1400,
        discountPercentage: 14,
        finalPrice: 1200,
        category: 'VVIP',
        hsnCode: '030559'
    },
    {
        name: 'Dry Barracuda (Seela Karuvadu)',
        description: 'Tasty Seela dry fish, great for curries and fries.',
        image: '/images/seela.png',
        originalPrice: 950,
        discountPercentage: 15,
        finalPrice: 800,
        category: 'Premium',
        hsnCode: '030559'
    },
    {
        name: 'Dry Tuna (Soorai Karuvadu)',
        description: 'High meat content Tuna fish, solid and savory.',
        image: '/images/seela.png',
        originalPrice: 800,
        discountPercentage: 12,
        finalPrice: 700,
        category: 'Regular',
        hsnCode: '030559'
    },
    {
        name: 'Dry Croaker (Kothamalli Karuvadu)',
        description: 'Traditional Kothamalli fish, sun-dried with care.',
        image: '/images/sankara.png',
        originalPrice: 750,
        discountPercentage: 13,
        finalPrice: 650,
        category: 'Regular',
        hsnCode: '030559'
    },
    {
        name: 'Dry Ribbon Fish (Oosi Karuvadu)',
        description: 'Long and thin Oosi Karuvadu, crispy when fried.',
        image: '/images/seela.png',
        originalPrice: 600,
        discountPercentage: 16,
        finalPrice: 500,
        category: 'Regular',
        hsnCode: '030559'
    },
    {
        name: 'Dry Shark (Sura Karuvadu)',
        description: 'Famous Sura Puttu special, bone-free chunks.',
        image: '/images/vanjiram.png',
        originalPrice: 1000,
        discountPercentage: 10,
        finalPrice: 900,
        category: 'Premium',
        hsnCode: '030559'
    }
];

async function seed() {
    console.log('🚀 Syncing ALL products to live MongoDB Atlas...');
    const client = new MongoClient(MONGODB_URI);

    try {
        await client.connect();
        const db = client.db('karuvattu_kadai');
        const productsCollection = db.collection('products');

        // Clear existing products to ensure a clean sync of the full list
        console.log('Clearing old product entries...');
        await productsCollection.deleteMany({});

        console.log('Importing complete product catalog (12 items)...');
        await productsCollection.insertMany(FULL_PRODUCT_LIST);

        console.log('\n✅ Success! All 12 products are now live in your MongoDB.');
        console.log(' - Premium Sankara, Nethili, Vanjiram, Mathi, Bangda, Seela, etc.');

    } catch (error) {
        console.error('❌ Error during product sync:', error);
    } finally {
        await client.close();
    }
}

seed();
