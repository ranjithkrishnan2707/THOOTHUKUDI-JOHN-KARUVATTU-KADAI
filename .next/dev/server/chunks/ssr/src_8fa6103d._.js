module.exports = [
"[project]/src/app/admin/dashboard/orders/orders.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cancelled": "orders-module__V7Nroq__cancelled",
  "container": "orders-module__V7Nroq__container",
  "delivered": "orders-module__V7Nroq__delivered",
  "empty": "orders-module__V7Nroq__empty",
  "header": "orders-module__V7Nroq__header",
  "loading": "orders-module__V7Nroq__loading",
  "mobile": "orders-module__V7Nroq__mobile",
  "orderTableWrapper": "orders-module__V7Nroq__orderTableWrapper",
  "pending": "orders-module__V7Nroq__pending",
  "resetBtn": "orders-module__V7Nroq__resetBtn",
  "rotate": "orders-module__V7Nroq__rotate",
  "shipped": "orders-module__V7Nroq__shipped",
  "spinner": "orders-module__V7Nroq__spinner",
  "statusSelect": "orders-module__V7Nroq__statusSelect",
  "table": "orders-module__V7Nroq__table",
});
}),
"[project]/src/lib/mockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/MZ/MZ/UL/3120615/salted-red-snapper-fish-500x500.jpg',
        originalPrice: 450,
        discountPercentage: 10,
        finalPrice: 405,
        category: 'Premium'
    },
    {
        _id: '2',
        id: '2',
        name: 'Fried Nethili Karuvadu (Anchovies)',
        description: 'Choice silver anchovies, perfectly dried and cleaned. High in protein.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/IO/IO/QZ/3120615/dried-nethili-fish-500x500.jpg',
        originalPrice: 320,
        discountPercentage: 15,
        finalPrice: 272,
        category: 'Regular'
    },
    {
        _id: '3',
        id: '3',
        name: 'Large Vanjiram Karuvadu',
        description: 'Elite King Fish slices, meticulously cured for the best taste of Thoothukudi.',
        image: 'https://5.imimg.com/data5/ANDROID/Default/2021/3/ZM/GD/XV/39260172/product-jpeg-500x500.jpg',
        originalPrice: 1200,
        discountPercentage: 5,
        finalPrice: 1140,
        category: 'VVIP'
    },
    {
        _id: '4',
        id: '4',
        name: 'Dry Anchovy (Nethili Karuvadu)',
        description: 'Premium quality dry Nethili, thoroughly cleaned and sun-dried.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/356525752/dry-anchovy-fish-500x500.jpg',
        originalPrice: 700,
        discountPercentage: 14,
        finalPrice: 600,
        category: 'Regular'
    },
    {
        _id: '5',
        id: '5',
        name: 'Dry Sardine (Mathi Karuvadu)',
        description: 'Rich in Omega-3, tasty Mathi fish dried to perfection.',
        image: 'https://5.imimg.com/data5/ANDROID/Default/2021/10/PL/QO/MC/139363321/product-jpeg.jpg',
        originalPrice: 500,
        discountPercentage: 10,
        finalPrice: 450,
        category: 'Regular'
    },
    {
        _id: '6',
        id: '6',
        name: 'Dry Mackerel (Bangda Karuvadu)',
        description: 'Classic Mackerel dry fish, famous for its distinct flavor.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/VK/VK/VK/52253303/dry-mackerel-fish-500x500.jpg',
        originalPrice: 650,
        discountPercentage: 15,
        finalPrice: 550,
        category: 'Premium'
    },
    {
        _id: '7',
        id: '7',
        name: 'Dry Seer Fish (Vanjiram Karuvadu)',
        description: 'The King of Fish (Vanjiram), premium slices, top quality.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/ZM/GD/XV/39260172/product-jpeg-500x500.jpg',
        originalPrice: 1400,
        discountPercentage: 14,
        finalPrice: 1200,
        category: 'VVIP'
    },
    {
        _id: '8',
        id: '8',
        name: 'Dry Barracuda (Seela Karuvadu)',
        description: 'Tasty Seela dry fish, great for curries and fries.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/IJ/IJ/II/156643666/seela-karuvadu-500x500.jpeg',
        originalPrice: 950,
        discountPercentage: 15,
        finalPrice: 800,
        category: 'Premium'
    },
    {
        _id: '9',
        id: '9',
        name: 'Dry Tuna (Soorai Karuvadu)',
        description: 'High meat content Tuna fish, solid and savory.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/NP/ZO/ZO/13264627/dry-tuna-fish-500x500.jpg',
        originalPrice: 800,
        discountPercentage: 12,
        finalPrice: 700,
        category: 'Regular'
    },
    {
        _id: '10',
        id: '10',
        name: 'Dry Croaker (Kothamalli Karuvadu)',
        description: 'Traditional Kothamalli fish, sun-dried with care.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/308945620/F-GF-104-1-500x500.jpg',
        originalPrice: 750,
        discountPercentage: 13,
        finalPrice: 650,
        category: 'Regular'
    },
    {
        _id: '11',
        id: '11',
        name: 'Dry Ribbon Fish (Oosi Karuvadu)',
        description: 'Long and thin Oosi Karuvadu, crispy when fried.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/VY/VY/13264627/ribbon-fish-dry-500x500.jpeg',
        originalPrice: 600,
        discountPercentage: 16,
        finalPrice: 500,
        category: 'Regular'
    },
    {
        _id: '12',
        id: '12',
        name: 'Dry Shark (Sura Karuvadu)',
        description: 'Famous Sura Puttu special, bone-free chunks.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/QY/QY/13264627/shark-dry-fish-500x500.jpg',
        originalPrice: 1000,
        discountPercentage: 10,
        finalPrice: 900,
        category: 'Premium'
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
        image: 'https://images.unsplash.com/photo-1544253051-bd2e236528d2?q=80&w=400',
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
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400',
        products: [
            'Large Vanjiram Karuvadu',
            'Premium Sankara Karuvadu'
        ]
    }
];
}),
"[project]/src/app/admin/dashboard/orders/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminOrders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$orders$2f$orders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/orders/orders.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function AdminOrders() {
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem('jk_orders');
        if (saved) {
            setOrders(JSON.parse(saved));
        } else {
            setOrders(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_ORDERS"]);
            localStorage.setItem('jk_orders', JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_ORDERS"]));
        }
    }, []);
    const handleStatusChange = (id, newStatus)=>{
        const newOrders = orders.map((o)=>o._id === id ? {
                ...o,
                status: newStatus
            } : o);
        setOrders(newOrders);
        localStorage.setItem('jk_orders', JSON.stringify(newOrders));
    };
    const handleReset = ()=>{
        if (confirm('Reset orders history?')) {
            setOrders(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_ORDERS"]);
            localStorage.setItem('jk_orders', JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_ORDERS"]));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$orders$2f$orders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$orders$2f$orders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Manage Orders"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$orders$2f$orders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resetBtn,
                        onClick: handleReset,
                        children: "Reset History"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$orders$2f$orders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orderTableWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$orders$2f$orders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].table,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Order ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Product"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Qty"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                lineNumber: 43,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                orders.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: o.orderId
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: new Date(o.createdAt).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$orders$2f$orders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customerDetail,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$orders$2f$orders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].custName,
                                                            children: o.customerName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$orders$2f$orders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].custMobile,
                                                            children: o.mobileNumber
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$orders$2f$orders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].custAddr,
                                                            children: o.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: o.product?.name || 'Unknown'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: [
                                                    o.quantity,
                                                    " Kg"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: [
                                                    "₹",
                                                    (o.product?.finalPrice || 0) * o.quantity
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: o.status,
                                                    onChange: (e)=>handleStatusChange(o._id, e.target.value),
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$orders$2f$orders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusSelect} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$orders$2f$orders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][o.status.toLowerCase()]}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "PENDING",
                                                            children: "Pending"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "SHIPPED",
                                                            children: "Shipped"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "DELIVERED",
                                                            children: "Delivered"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "CANCELLED",
                                                            children: "Cancelled"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, o._id, true, {
                                        fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 29
                                    }, this)),
                                orders.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 7,
                                        style: {
                                            textAlign: 'center',
                                            padding: '2rem'
                                        },
                                        children: "No orders found."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard/orders/page.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_8fa6103d._.js.map