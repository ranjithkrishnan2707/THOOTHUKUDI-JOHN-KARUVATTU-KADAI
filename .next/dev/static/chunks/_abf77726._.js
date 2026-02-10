(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ProductCard/ProductCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addToCartButton": "ProductCard-module__g-pugq__addToCartButton",
  "buttonGroup": "ProductCard-module__g-pugq__buttonGroup",
  "card": "ProductCard-module__g-pugq__card",
  "content": "ProductCard-module__g-pugq__content",
  "discountBadge": "ProductCard-module__g-pugq__discountBadge",
  "finalPrice": "ProductCard-module__g-pugq__finalPrice",
  "image": "ProductCard-module__g-pugq__image",
  "imageContainer": "ProductCard-module__g-pugq__imageContainer",
  "name": "ProductCard-module__g-pugq__name",
  "orderButton": "ProductCard-module__g-pugq__orderButton",
  "originalPrice": "ProductCard-module__g-pugq__originalPrice",
  "priceContainer": "ProductCard-module__g-pugq__priceContainer",
  "slideUp": "ProductCard-module__g-pugq__slideUp",
  "toast": "ProductCard-module__g-pugq__toast",
});
}),
"[project]/src/components/ProductCard/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard/ProductCard.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const ProductCard = ({ name, image, originalPrice, discountPercentage, finalPrice, onOrder, product })=>{
    _s();
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAddToCart = ()=>{
        addToCart(product, 0.5);
        setShowToast(true);
        setTimeout(()=>setShowToast(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: name,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    discountPercentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].discountBadge,
                        children: [
                            discountPercentage,
                            "% OFF"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].finalPrice,
                                children: [
                                    "₹",
                                    finalPrice
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            discountPercentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].originalPrice,
                                children: [
                                    "₹",
                                    originalPrice
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addToCartButton,
                                onClick: handleAddToCart,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orderButton,
                                onClick: onOrder,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Order Now"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            showToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toast,
                children: "Added to cart!"
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                lineNumber: 61,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductCard, "qBMn45qY0zzQ/oohVctS90WBglk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = ProductCard;
const __TURBOPACK__default__export__ = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductGrid/ProductGrid.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "grid": "ProductGrid-module__I0z52G__grid",
});
}),
"[project]/src/components/ProductGrid/ProductGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard/ProductCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductGrid$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ProductGrid/ProductGrid.module.css [app-client] (css module)");
'use client';
;
;
;
const ProductGrid = ({ products, onOrder })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductGrid$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...product,
                product: product,
                onOrder: ()=>onOrder(product)
            }, product.id, false, {
                fileName: "[project]/src/components/ProductGrid/ProductGrid.tsx",
                lineNumber: 25,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/ProductGrid/ProductGrid.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProductGrid;
const __TURBOPACK__default__export__ = ProductGrid;
var _c;
__turbopack_context__.k.register(_c, "ProductGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/OrderModal/OrderModal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeButton": "OrderModal-module__YB5KYa__closeButton",
  "field": "OrderModal-module__YB5KYa__field",
  "form": "OrderModal-module__YB5KYa__form",
  "modal": "OrderModal-module__YB5KYa__modal",
  "overlay": "OrderModal-module__YB5KYa__overlay",
  "productInfo": "OrderModal-module__YB5KYa__productInfo",
  "submitButton": "OrderModal-module__YB5KYa__submitButton",
  "title": "OrderModal-module__YB5KYa__title",
  "totalPrice": "OrderModal-module__YB5KYa__totalPrice",
});
}),
"[project]/src/components/OrderModal/OrderModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/OrderModal/OrderModal.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const OrderModal = ({ product, isOpen, onClose, onSubmit })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        quantity: 0.5,
        customerName: '',
        mobileNumber: '',
        address: ''
    });
    if (!isOpen || !product) return null;
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit({
            ...formData,
            productId: product.id,
            productName: product.name
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                    onClick: onClose,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "Place Your Order"
                }, void 0, false, {
                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productInfo,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Product: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                                    lineNumber: 48,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Price: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        "₹",
                                        product.finalPrice,
                                        " / Kg"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                                    lineNumber: 49,
                                    columnNumber: 31
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "quantity",
                                    children: "Quantity (Kg)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    id: "quantity",
                                    name: "quantity",
                                    min: "0.5",
                                    step: "0.5",
                                    value: formData.quantity,
                                    onChange: handleChange,
                                    required: true,
                                    suppressHydrationWarning: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "customerName",
                                    children: "Your Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    id: "customerName",
                                    name: "customerName",
                                    placeholder: "Enter your name",
                                    value: formData.customerName,
                                    onChange: handleChange,
                                    required: true,
                                    suppressHydrationWarning: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "mobileNumber",
                                    children: "Mobile Number"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "tel",
                                    id: "mobileNumber",
                                    name: "mobileNumber",
                                    placeholder: "e.g. 9876543210",
                                    value: formData.mobileNumber,
                                    onChange: handleChange,
                                    required: true,
                                    suppressHydrationWarning: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                            lineNumber: 79,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "address",
                                    children: "Full Delivery Address"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    id: "address",
                                    name: "address",
                                    placeholder: "House No, Street, Landmark, Pincode",
                                    value: formData.address,
                                    onChange: handleChange,
                                    rows: 3,
                                    required: true,
                                    suppressHydrationWarning: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].totalPrice,
                            children: [
                                "Total Amount: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "₹",
                                        product.finalPrice * formData.quantity
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                                    lineNumber: 106,
                                    columnNumber: 39
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                            suppressHydrationWarning: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Confirm Order"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/OrderModal/OrderModal.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OrderModal, "i+DraNEqwRjk95bx/8EXjxJy8ps=");
_c = OrderModal;
const __TURBOPACK__default__export__ = OrderModal;
var _c;
__turbopack_context__.k.register(_c, "OrderModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(user)/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "adminLink": "page-module__dMmvGa__adminLink",
  "buyComboBtn": "page-module__dMmvGa__buyComboBtn",
  "comboBadge": "page-module__dMmvGa__comboBadge",
  "comboCard": "page-module__dMmvGa__comboCard",
  "comboCardContent": "page-module__dMmvGa__comboCardContent",
  "comboCardImg": "page-module__dMmvGa__comboCardImg",
  "comboCardPrice": "page-module__dMmvGa__comboCardPrice",
  "comboCardTitle": "page-module__dMmvGa__comboCardTitle",
  "comboContainer": "page-module__dMmvGa__comboContainer",
  "comboDetails": "page-module__dMmvGa__comboDetails",
  "comboGrid": "page-module__dMmvGa__comboGrid",
  "comboPriceBox": "page-module__dMmvGa__comboPriceBox",
  "comboSection": "page-module__dMmvGa__comboSection",
  "comboTitle": "page-module__dMmvGa__comboTitle",
  "ctaButton": "page-module__dMmvGa__ctaButton",
  "footer": "page-module__dMmvGa__footer",
  "header": "page-module__dMmvGa__header",
  "headerActions": "page-module__dMmvGa__headerActions",
  "headerFlex": "page-module__dMmvGa__headerFlex",
  "hero": "page-module__dMmvGa__hero",
  "heroContent": "page-module__dMmvGa__heroContent",
  "langToggle": "page-module__dMmvGa__langToggle",
  "logo": "page-module__dMmvGa__logo",
  "main": "page-module__dMmvGa__main",
  "offerLabel": "page-module__dMmvGa__offerLabel",
  "offerPrice": "page-module__dMmvGa__offerPrice",
  "originalPrice": "page-module__dMmvGa__originalPrice",
  "sectionTitle": "page-module__dMmvGa__sectionTitle",
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
"[project]/src/components/MegaDealDisplay/MegaDealDisplay.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardImage": "MegaDealDisplay-module__OSIE8W__cardImage",
  "cardName": "MegaDealDisplay-module__OSIE8W__cardName",
  "cardValue": "MegaDealDisplay-module__OSIE8W__cardValue",
  "comboPriceLabel": "MegaDealDisplay-module__OSIE8W__comboPriceLabel",
  "container": "MegaDealDisplay-module__OSIE8W__container",
  "containerInline": "MegaDealDisplay-module__OSIE8W__containerInline",
  "contentSplit": "MegaDealDisplay-module__OSIE8W__contentSplit",
  "fadeInZoom": "MegaDealDisplay-module__OSIE8W__fadeInZoom",
  "headerSection": "MegaDealDisplay-module__OSIE8W__headerSection",
  "limitedBadge": "MegaDealDisplay-module__OSIE8W__limitedBadge",
  "mainTitle": "MegaDealDisplay-module__OSIE8W__mainTitle",
  "offerPrice": "MegaDealDisplay-module__OSIE8W__offerPrice",
  "orderBtn": "MegaDealDisplay-module__OSIE8W__orderBtn",
  "originalPrice": "MegaDealDisplay-module__OSIE8W__originalPrice",
  "overlay": "MegaDealDisplay-module__OSIE8W__overlay",
  "priceCard": "MegaDealDisplay-module__OSIE8W__priceCard",
  "productCard": "MegaDealDisplay-module__OSIE8W__productCard",
  "productsGrid": "MegaDealDisplay-module__OSIE8W__productsGrid",
  "rocketIcon": "MegaDealDisplay-module__OSIE8W__rocketIcon",
  "subTitle": "MegaDealDisplay-module__OSIE8W__subTitle",
  "titleRow": "MegaDealDisplay-module__OSIE8W__titleRow",
});
}),
"[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MegaDealDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OrderModal/OrderModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/MegaDealDisplay/MegaDealDisplay.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function MegaDealDisplay({ variant = 'popup' }) {
    _s();
    const [deal, setDeal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MegaDealDisplay.useEffect": ()=>{
            const fetchDeal = {
                "MegaDealDisplay.useEffect.fetchDeal": async ()=>{
                    try {
                        const res = await fetch('/api/mega-deal');
                        const data = await res.json();
                        if (data.success && data.data) {
                            setDeal(data.data);
                            // Add a small delay for the entrance animation for popup variant
                            if (variant === 'popup') {
                                setTimeout({
                                    "MegaDealDisplay.useEffect.fetchDeal": ()=>setIsVisible(true)
                                }["MegaDealDisplay.useEffect.fetchDeal"], 1000);
                            } else {
                                setIsVisible(true); // Always visible for inline variant
                            }
                        }
                    } catch (error) {
                        console.error("Failed to fetch mega deal", error);
                    }
                }
            }["MegaDealDisplay.useEffect.fetchDeal"];
            fetchDeal();
        }
    }["MegaDealDisplay.useEffect"], [
        variant
    ]);
    const handleClose = ()=>{
        setIsVisible(false);
    };
    const handleOrderClick = ()=>{
        setIsModalOpen(true);
    };
    const handleCloseModal = ()=>{
        setIsModalOpen(false);
    };
    const handleSubmitOrder = async (formData)=>{
        const orderId = `JK-MEGA-${Math.floor(1000 + Math.random() * 9000)}`;
        // We still save to local storage for user's own history
        const newOrder = {
            _id: Date.now().toString(),
            orderId: orderId,
            createdAt: new Date().toISOString(),
            customerName: formData.customerName,
            mobileNumber: formData.mobileNumber,
            address: formData.address,
            product: {
                name: `MEGA DEAL: ${deal?.products.map((p)=>p.name).join(' + ')}`,
                finalPrice: deal?.offerPrice || 0
            },
            quantity: Number(formData.quantity),
            status: 'PENDING'
        };
        const savedOrders = localStorage.getItem('jk_orders');
        const orders = savedOrders ? JSON.parse(savedOrders) : [];
        localStorage.setItem('jk_orders', JSON.stringify([
            newOrder,
            ...orders
        ]));
        // WhatsApp Redirect
        const message = `*MEGA COMBO DEAL ORDER* 🚀
Order ID: ${orderId}
Items: ${deal?.products.map((p)=>p.name).join(' + ')}
Price: ₹${deal?.offerPrice}
Name: ${formData.customerName}
Address: ${formData.address}
Phone: ${formData.mobileNumber}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919994960009?text=${encodedMessage}`;
        window.location.href = whatsappUrl;
        handleCloseModal();
        setIsVisible(false);
    };
    if (!deal) return null;
    const savings = deal.totalOriginalPrice - deal.offerPrice;
    const savingsPercent = Math.round(savings / deal.totalOriginalPrice * 100);
    const isInline = variant === 'inline';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isInline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay} ${isVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible : ''}`,
                onClick: handleClose
            }, void 0, false, {
                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                lineNumber: 118,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
                    ${isInline ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].containerInline : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container} 
                    ${isVisible || isInline ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible : ''}
                `,
                children: [
                    !isInline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                        "aria-label": "Close deal",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                            lineNumber: 133,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                        lineNumber: 128,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerBadge,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 16,
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Limited Time Mega Deal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                        lineNumber: 141,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                lineNumber: 139,
                                columnNumber: 21
                            }, this),
                            !isInline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageStack,
                                children: [
                                    deal.products.slice(0, 3).map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImageWrapper,
                                            style: {
                                                transform: `translateX(${index * 20}px) scale(${1 - index * 0.05})`,
                                                zIndex: 10 - index
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: product.image || '/placeholder-product.png',
                                                alt: product.name,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImage,
                                                onError: (e)=>{
                                                    e.target.src = 'https://placehold.co/100x100?text=Product';
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                lineNumber: 153,
                                                columnNumber: 37
                                            }, this)
                                        }, product._id, false, {
                                            fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                            lineNumber: 148,
                                            columnNumber: 33
                                        }, this)),
                                    deal.products.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].moreCount,
                                        children: [
                                            "+",
                                            deal.products.length - 3
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                        lineNumber: 164,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                lineNumber: 146,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productsGrid,
                                children: deal.products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: product.image || '/placeholder-product.png',
                                                alt: product.name,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImage,
                                                onError: (e)=>{
                                                    e.target.src = 'https://placehold.co/100x100?text=Product';
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                lineNumber: 173,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardName,
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                lineNumber: 181,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, product._id, true, {
                                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                        lineNumber: 172,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                lineNumber: 170,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                        children: "Super Combo Pack"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this),
                                    !isInline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productList,
                                        children: deal.products.map((p)=>p.name).join(' + ')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                        lineNumber: 192,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceBlock,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].originalPrice,
                                                        children: [
                                                            "₹",
                                                            deal.totalOriginalPrice
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].discountBadge,
                                                        children: [
                                                            "SAVE ",
                                                            savingsPercent,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                lineNumber: 198,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offerPrice,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].currency,
                                                        children: "₹"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 33
                                                    }, this),
                                                    deal.offerPrice
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                lineNumber: 202,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                        lineNumber: 197,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleOrderClick,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaButton,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                lineNumber: 211,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Grab Deal Now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                lineNumber: 212,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                lineNumber: 213,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                        lineNumber: 207,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                lineNumber: 217,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Offer ends soon!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                                lineNumber: 218,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                        lineNumber: 216,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                                lineNumber: 188,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                        lineNumber: 137,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        product: {
                            id: deal._id,
                            name: "MEGA COMBO DEAL",
                            finalPrice: deal.offerPrice
                        },
                        isOpen: isModalOpen,
                        onClose: handleCloseModal,
                        onSubmit: handleSubmitOrder
                    }, void 0, false, {
                        fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                        lineNumber: 223,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(MegaDealDisplay, "THPelCbPBitfr5ncW3RurvgdJis=");
_c = MegaDealDisplay;
var _c;
__turbopack_context__.k.register(_c, "MegaDealDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(user)/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductGrid$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductGrid/ProductGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OrderModal/OrderModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$user$292f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(user)/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MegaDealDisplay/MegaDealDisplay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Home() {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('EN');
    // Sync with Admin changes via localStorage (still used for regular products)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const loadProducts = {
                "Home.useEffect.loadProducts": ()=>{
                    const saved = localStorage.getItem('jk_products');
                    if (saved) {
                        const parsed = JSON.parse(saved).map({
                            "Home.useEffect.loadProducts.parsed": (p)=>({
                                    ...p,
                                    id: p._id || p.id
                                })
                        }["Home.useEffect.loadProducts.parsed"]);
                        setProducts(parsed);
                    } else {
                        setProducts(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_PRODUCTS"]);
                    }
                }
            }["Home.useEffect.loadProducts"];
            loadProducts();
            window.addEventListener('storage', loadProducts);
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener('storage', loadProducts);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const handleOpenOrder = (product)=>{
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    const handleCloseOrder = ()=>{
        setIsModalOpen(false);
        setSelectedProduct(null);
    };
    const handleSubmitOrder = async (formData)=>{
        // 1. Generate Order ID
        const orderId = `JK${Math.floor(1000 + Math.random() * 9000)}`;
        // 2. Save Order to localStorage
        const newOrder = {
            _id: Date.now().toString(),
            orderId: orderId,
            createdAt: new Date().toISOString(),
            customerName: formData.customerName,
            mobileNumber: formData.mobileNumber,
            address: formData.address,
            product: {
                name: formData.productName,
                finalPrice: selectedProduct?.finalPrice || 0
            },
            quantity: Number(formData.quantity),
            status: 'PENDING'
        };
        const savedOrders = localStorage.getItem('jk_orders');
        const orders = savedOrders ? JSON.parse(savedOrders) : [];
        localStorage.setItem('jk_orders', JSON.stringify([
            newOrder,
            ...orders
        ]));
        // 3. Open WhatsApp
        let message = `New Order Received 🐟
Order ID: ${orderId}
Product: ${formData.productName}
Qty: ${formData.quantity} Kg
Customer: ${formData.customerName}
Phone: ${formData.mobileNumber}
Address: ${formData.address}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919994960009?text=${encodedMessage}`;
        window.location.href = whatsappUrl;
        handleCloseOrder();
    };
    const texts = {
        EN: {
            heroTitle: 'Authentic Sea-Fresh Dry Fish',
            heroSub: 'From the shores of Thoothukudi to your kitchen doorstep.',
            shopNow: 'Shop Now',
            ourProducts: 'Our Products'
        },
        TA: {
            heroTitle: 'சுவையான கடல் மீன் கருவாடு',
            heroSub: 'தூத்துக்குடி கடற்கரையில் இருந்து உங்கள் இல்லத்திற்கு.',
            shopNow: 'இப்போதே வாங்குங்கள்',
            ourProducts: 'எங்கள் தயாரிப்புகள்'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$user$292f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$user$292f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$user$292f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: texts[language].heroTitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/(user)/page.tsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: texts[language].heroSub
                            }, void 0, false, {
                                fileName: "[project]/src/app/(user)/page.tsx",
                                lineNumber: 111,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$user$292f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaButton,
                                onClick: ()=>document.getElementById('products')?.scrollIntoView({
                                        behavior: 'smooth'
                                    }),
                                children: texts[language].shopNow
                            }, void 0, false, {
                                fileName: "[project]/src/app/(user)/page.tsx",
                                lineNumber: 112,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(user)/page.tsx",
                        lineNumber: 109,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(user)/page.tsx",
                    lineNumber: 108,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(user)/page.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                style: {
                    position: 'relative',
                    zIndex: 10,
                    marginTop: '-2rem',
                    marginBottom: '2rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MegaDealDisplay$2f$MegaDealDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "inline"
                }, void 0, false, {
                    fileName: "[project]/src/app/(user)/page.tsx",
                    lineNumber: 121,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(user)/page.tsx",
                lineNumber: 120,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "products",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$user$292f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].products,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$user$292f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                            children: texts[language].ourProducts
                        }, void 0, false, {
                            fileName: "[project]/src/app/(user)/page.tsx",
                            lineNumber: 126,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductGrid$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            products: products,
                            onOrder: (p)=>handleOpenOrder(p)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(user)/page.tsx",
                            lineNumber: 127,
                            columnNumber: 21
                        }, this),
                        products.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$user$292f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                            children: "No products found."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(user)/page.tsx",
                            lineNumber: 131,
                            columnNumber: 47
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(user)/page.tsx",
                    lineNumber: 125,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(user)/page.tsx",
                lineNumber: 124,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderModal$2f$OrderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                product: selectedProduct,
                isOpen: isModalOpen,
                onClose: handleCloseOrder,
                onSubmit: handleSubmitOrder
            }, void 0, false, {
                fileName: "[project]/src/app/(user)/page.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(user)/page.tsx",
        lineNumber: 106,
        columnNumber: 9
    }, this);
}
_s(Home, "MFfOQPnOS0+hRd6q3pi87l0Vleo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ShoppingBag
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
            d: "M16 10a4 4 0 0 1-8 0",
            key: "1ltviw"
        }
    ],
    [
        "path",
        {
            d: "M3.103 6.034h17.794",
            key: "awc11p"
        }
    ],
    [
        "path",
        {
            d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
            key: "o988cm"
        }
    ]
];
const ShoppingBag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shopping-bag", __iconNode);
;
 //# sourceMappingURL=shopping-bag.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShoppingBag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Send
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
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("send", __iconNode);
;
 //# sourceMappingURL=send.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Timer
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
        "line",
        {
            x1: "10",
            x2: "14",
            y1: "2",
            y2: "2",
            key: "14vaq8"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "15",
            y1: "14",
            y2: "11",
            key: "17fdiu"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "14",
            r: "8",
            key: "1e1u0o"
        }
    ]
];
const Timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("timer", __iconNode);
;
 //# sourceMappingURL=timer.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sparkles
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
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }
    ],
    [
        "path",
        {
            d: "M20 2v4",
            key: "1rf3ol"
        }
    ],
    [
        "path",
        {
            d: "M22 4h-4",
            key: "gwowj6"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sparkles", __iconNode);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronRight
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
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-right", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_abf77726._.js.map