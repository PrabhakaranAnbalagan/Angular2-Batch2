import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  newReview: any = { stars: 1, author: '', comment: '' };

  @Input()
  idx: number;

  qty: number = 0;
  currentTab: number = 1

  constructor() { }

  ngOnInit() {
  }

  handleReviewFormSubmit(event: any, reviewForm: NgForm) {
    event.preventDefault();
    // send this review to server
    this.product.reviews.push(this.newReview);  // adding localy
    this.newReview = { stars: 1, author: '', comment: '' };
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