"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCTS = [
    {
        id: 1,
        name: 'Laptop',
        price: 198000,
        description: 'New Macpro',
        canBuy: true,
        make: Date.now(),
        inStock: 5,
        image: 'images/Laptop.png',
        reviews: [
            { stars: 5, author: 'nag@gmail.com', comment: 'Good one' },
            { stars: 3, author: 'ria@gmail.com', comment: 'costly..' }
        ]
    },
    {
        id: 2,
        name: 'Mobile',
        price: 80000,
        description: 'New Iphone',
        canBuy: true,
        make: Date.now(),
        inStock: 10,
        image: 'images/Mobile.png',
        reviews: [
            { stars: 5, author: 'nag@gmail.com', comment: 'Good one' },
            { stars: 3, author: 'ria@gmail.com', comment: 'costly..' }
        ]
    }
];
//# sourceMappingURL=product.js.map