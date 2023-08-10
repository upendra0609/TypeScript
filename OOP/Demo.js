var product = {
    name: "tv",
    price: 1000,
    qty: 2,
    total: function () {
        return this.qty * this.price;
    }
};
console.log("Name->".concat(product.name, "\nprice->").concat(product.price, "\nqty->").concat(product.qty, "\nTotal->").concat(product.total()));
