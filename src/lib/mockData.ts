// Shared initial products list
export const INITIAL_PRODUCTS = [
    {
        _id: '1',
        id: '1',
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
        _id: '2',
        id: '2',
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
        _id: '3',
        id: '3',
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
        _id: '4',
        id: '4',
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
        _id: '5',
        id: '5',
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
        _id: '6',
        id: '6',
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
        _id: '7',
        id: '7',
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
        _id: '8',
        id: '8',
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
        _id: '9',
        id: '9',
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
        _id: '10',
        id: '10',
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
        _id: '11',
        id: '11',
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
        _id: '12',
        id: '12',
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

// Shared initial orders list
export const INITIAL_ORDERS = [
    {
        _id: 'o1',
        orderId: 'JK8274',
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        customerName: 'Anbu Selvan',
        mobileNumber: '9845012345',
        address: '12, South Street, Thoothukudi',
        product: { name: 'Premium Sankara Karuvadu', finalPrice: 405 },
        quantity: 2,
        status: 'DELIVERED'
    },
    {
        _id: 'o2',
        orderId: 'JK9102',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        customerName: 'Muthu Krishnan',
        mobileNumber: '9765109283',
        address: 'Beach Road, Tiruchendur',
        product: { name: 'Fried Nethili Karuvadu', finalPrice: 272 },
        quantity: 1,
        status: 'PENDING'
    }
];

// Shared initial combo offers list
export const INITIAL_COMBO_OFFERS = [
    {
        _id: 'c1',
        name: 'Family Pack',
        description: '1kg Sankara + 500g Nethili',
        price: 750,
        offerPrice: 650,
        image: '/images/sankara.png',
        products: ['Premium Sankara Karuvadu', 'Fried Nethili Karuvadu']
    },
    {
        _id: 'c2',
        name: 'Mega Saver',
        description: '2kg Vanjiram + 1kg Sankara',
        price: 2850,
        offerPrice: 2600,
        image: '/images/vanjiram.png',
        products: ['Large Vanjiram Karuvadu', 'Premium Sankara Karuvadu']
    }
];
