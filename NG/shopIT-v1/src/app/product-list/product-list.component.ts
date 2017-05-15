


import { Component } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../mocks/product';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    products: Array<Product> = [];

    getTotalProductsCount() {
        return this.products.reduce((acc, product) => product.inStock + acc, 0);
    }

    ngOnInit() {
        this.products = PRODUCTS;
    }

}







