(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/dashboard/dashboard-home.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "blue": "dashboard-home-module__VQzdHa__blue",
  "chartCard": "dashboard-home-module__VQzdHa__chartCard",
  "chartsGrid": "dashboard-home-module__VQzdHa__chartsGrid",
  "container": "dashboard-home-module__VQzdHa__container",
  "deliveredDot": "dashboard-home-module__VQzdHa__deliveredDot",
  "green": "dashboard-home-module__VQzdHa__green",
  "icon": "dashboard-home-module__VQzdHa__icon",
  "orange": "dashboard-home-module__VQzdHa__orange",
  "pendingDot": "dashboard-home-module__VQzdHa__pendingDot",
  "placeholderChart": "dashboard-home-module__VQzdHa__placeholderChart",
  "purple": "dashboard-home-module__VQzdHa__purple",
  "shippedDot": "dashboard-home-module__VQzdHa__shippedDot",
  "statCard": "dashboard-home-module__VQzdHa__statCard",
  "statInfo": "dashboard-home-module__VQzdHa__statInfo",
  "statsGrid": "dashboard-home-module__VQzdHa__statsGrid",
  "statusCard": "dashboard-home-module__VQzdHa__statusCard",
  "statusDot": "dashboard-home-module__VQzdHa__statusDot",
  "statusLabel": "dashboard-home-module__VQzdHa__statusLabel",
  "statusSection": "dashboard-home-module__VQzdHa__statusSection",
  "statusValue": "dashboard-home-module__VQzdHa__statusValue",
  "topList": "dashboard-home-module__VQzdHa__topList",
});
}),
"[project]/src/lib/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared initial products list
__turbopack_context__.s([
    "INITIAL_COMBO_OFFERS",
    ()=>INITIAL_COMBO_OFFERS,
    "INITIAL_ORDERS",
    ()=>INITIAL_ORDERS,
    "INITIAL_PRODUCTS",
    ()=>INITIAL_PRODUCTS
]);
const INITIAL_PRODUCTS = [
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
const INITIAL_ORDERS = [
    {
        _id: 'o1',
        orderId: 'JK8274',
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        customerName: 'Anbu Selvan',
        mobileNumber: '9845012345',
        address: '12, South Street, Thoothukudi',
        product: {
            name: 'Premium Sankara Karuvadu',
            finalPrice: 405
        },
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
        product: {
            name: 'Fried Nethili Karuvadu',
            finalPrice: 272
        },
        quantity: 1,
        status: 'PENDING'
    }
];
const INITIAL_COMBO_OFFERS = [
    {
        _id: 'c1',
        name: 'Family Pack',
        description: '1kg Sankara + 500g Nethili',
        price: 750,
        offerPrice: 650,
        image: '/images/sankara.png',
        products: [
            'Premium Sankara Karuvadu',
            'Fried Nethili Karuvadu'
        ]
    },
    {
        _id: 'c2',
        name: 'Mega Saver',
        description: '2kg Vanjiram + 1kg Sankara',
        price: 2850,
        offerPrice: 2600,
        image: '/images/vanjiram.png',
        products: [
            'Large Vanjiram Karuvadu',
            'Premium Sankara Karuvadu'
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboardHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/dashboard-home.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AdminDashboardHome() {
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        totalOrders: 0,
        totalRevenue: 0,
        totalCustomers: 0,
        activeProducts: 0,
        pendingOrders: 0,
        shippedOrders: 0,
        deliveredOrders: 0,
        topSelling: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardHome.useEffect": ()=>{
            const savedProducts = localStorage.getItem('jk_products');
            const savedOrders = localStorage.getItem('jk_orders');
            const products = savedProducts ? JSON.parse(savedProducts) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_PRODUCTS"];
            const orders = savedOrders ? JSON.parse(savedOrders) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ORDERS"];
            // Calculate Stats
            const totalOrders = orders.length;
            const totalRevenue = orders.reduce({
                "AdminDashboardHome.useEffect.totalRevenue": (acc, o)=>o.status !== 'CANCELLED' ? acc + o.product.finalPrice * o.quantity : acc
            }["AdminDashboardHome.useEffect.totalRevenue"], 0);
            // Unique mobile numbers as customers
            const customers = new Set(orders.map({
                "AdminDashboardHome.useEffect": (o)=>o.mobileNumber
            }["AdminDashboardHome.useEffect"])).size;
            const activeProducts = products.length;
            // Calculate Status Counts
            const pendingOrders = orders.filter({
                "AdminDashboardHome.useEffect": (o)=>o.status === 'PENDING'
            }["AdminDashboardHome.useEffect"]).length;
            const shippedOrders = orders.filter({
                "AdminDashboardHome.useEffect": (o)=>o.status === 'SHIPPED'
            }["AdminDashboardHome.useEffect"]).length;
            const deliveredOrders = orders.filter({
                "AdminDashboardHome.useEffect": (o)=>o.status === 'DELIVERED'
            }["AdminDashboardHome.useEffect"]).length;
            // Simplified Top Selling (by count)
            const productCounts = {};
            orders.forEach({
                "AdminDashboardHome.useEffect": (o)=>{
                    const name = o.product.name;
                    productCounts[name] = (productCounts[name] || 0) + o.quantity;
                }
            }["AdminDashboardHome.useEffect"]);
            const topSelling = Object.entries(productCounts).map({
                "AdminDashboardHome.useEffect.topSelling": ([name, sales])=>({
                        name,
                        sales
                    })
            }["AdminDashboardHome.useEffect.topSelling"]).sort({
                "AdminDashboardHome.useEffect.topSelling": (a, b)=>b.sales - a.sales
            }["AdminDashboardHome.useEffect.topSelling"]).slice(0, 3);
            setStats({
                totalOrders,
                totalRevenue,
                totalCustomers: customers,
                activeProducts,
                pendingOrders,
                shippedOrders,
                deliveredOrders,
                topSelling
            });
        }
    }["AdminDashboardHome.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blue}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Total Orders"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: stats.totalOrders
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].green}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Total Revenue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: [
                                            "₹",
                                            stats.totalRevenue
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orange}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Customers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: stats.totalCustomers
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 98,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].purple}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Active Products"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: stats.activeProducts
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 107,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusLabel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusDot} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pendingDot}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 25
                                    }, this),
                                    "Pending"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 116,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusValue,
                                children: stats.pendingOrders
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusLabel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusDot} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shippedDot}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 25
                                    }, this),
                                    "Shipped"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusValue,
                                children: stats.shippedOrders
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusLabel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusDot} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deliveredDot}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 25
                                    }, this),
                                    "Delivered"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 130,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusValue,
                                children: stats.deliveredOrders
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 134,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chartsGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chartCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: "Sales Overview"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 140,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].placeholderChart,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        size: 48,
                                        color: "#e2e8f0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Sales trend based on ",
                                            stats.totalOrders,
                                            " total orders"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chartCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: "Top Selling Items"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 147,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$dashboard$2d$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topList,
                                children: [
                                    stats.topSelling.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        item.sales,
                                                        " Kg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 29
                                        }, this)),
                                    stats.topSelling.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        style: {
                                            color: '#94a3b8'
                                        },
                                        children: "No sales data yet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 59
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 148,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 146,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard/page.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}
_s(AdminDashboardHome, "bFxDyWatZt3yikTLwofNK98pWvk=");
_c = AdminDashboardHome;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboardHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IndianRupee
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M6 3h12",
            key: "ggurg9"
        }
    ],
    [
        "path",
        {
            d: "M6 8h12",
            key: "6g4wlu"
        }
    ],
    [
        "path",
        {
            d: "m6 13 8.5 8",
            key: "u1kupk"
        }
    ],
    [
        "path",
        {
            d: "M6 13h3",
            key: "wdp6ag"
        }
    ],
    [
        "path",
        {
            d: "M9 13c6.667 0 6.667-10 0-10",
            key: "1nkvk2"
        }
    ]
];
const IndianRupee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("indian-rupee", __iconNode);
;
 //# sourceMappingURL=indian-rupee.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript) <export default as IndianRupee>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndianRupee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TrendingUp
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 7h6v6",
            key: "box55l"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.5 8.5-5-5L2 17",
            key: "1t1m79"
        }
    ]
];
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trending-up", __iconNode);
;
 //# sourceMappingURL=trending-up.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_2577389f._.js.map