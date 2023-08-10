var products = [
    { Name: "Samsung TV", Category: "Electronics" },
    { Name: "Nike Casuals", Category: "Footwear" },
    { Name: "Speakers", Category: "Electronics" }
];
var results = products.filter(function (product) { return product.Category == "Electronics"; });
var count = products.filter(function (product) { return product.Category == "Electronics"; }).length;
for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
    var item = results_1[_i];
    console.log(item.Name);
}
console.log(count);
