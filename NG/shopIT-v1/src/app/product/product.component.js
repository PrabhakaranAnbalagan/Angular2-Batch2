"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_1 = require("../model/product");
var ProductComponent = (function () {
    function ProductComponent() {
        this.qty = 0;
        this.currentTab = 1;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.tabChange = function (event, tabIndex) {
        event.preventDefault();
        this.currentTab = tabIndex;
    };
    ProductComponent.prototype.isTabSelected = function (tabIndex) {
        return this.currentTab === tabIndex;
    };
    ProductComponent.prototype.buy = function (event, product) {
        console.log('buying product...');
        console.dir("buying " + product.name + " with qty " + this.qty);
    };
    ProductComponent.prototype.upQty = function () {
        ++this.qty;
    };
    ProductComponent.prototype.downQty = function () {
        --this.qty;
    };
    return ProductComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", product_1.Product)
], ProductComponent.prototype, "product", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ProductComponent.prototype, "idx", void 0);
ProductComponent = __decorate([
    core_1.Component({
        selector: 'product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.css']
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map