var product = new Map();
product.set(1, "TV");
product.set(2, "Book");
console.log(product.get(1));
console.log("--------------------KEYS------------------");
for (var _i = 0, _a = Array.from(product.keys()); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
console.log("--------------------VALUES------------------");
for (var _b = 0, _c = Array.from(product.values()); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log(value);
}
console.log("--------------------ENTRIES------------------");
for (var _d = 0, _e = Array.from(product.entries()); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry);
}
