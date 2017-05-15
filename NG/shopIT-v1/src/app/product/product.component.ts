import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  @Input()
  idx: number;

  qty: number = 0;
  currentTab: number = 1

  constructor() { }

  ngOnInit() {
  }

  tabChange(event: any, tabIndex: number) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }

  buy(event: any, product: Product) {
    console.log('buying product...');
    console.dir(`buying ${product.name} with qty ${this.qty}`);
  }

  upQty() {
    ++this.qty
  }
  downQty() {
    --this.qty
  }

}