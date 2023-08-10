"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var ProductTemplate_1 = require("../Templates/ProductTemplate");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = "";
        _this.Price = 0;
        _this.QTY = 0;
        return _this;
    }
    Product.prototype.Total = function () {
        return this.QTY * this.Price;
    };
    Product.prototype.Print = function () {
        console.log("Name=".concat(this.Name, "\nQty=").concat(this.QTY, "\ntotal = ").concat(this.Total()));
    };
    return Product;
}(ProductTemplate_1.ProductTemplate));
exports.Product = Product;
