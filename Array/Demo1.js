var sales = [1000, 2000, 3000, 4000, 5000, 6000];
// console.log(sales.filter(function(sale){
//     return sale>2000;
// }));
for (var _i = 0, sales_1 = sales; _i < sales_1.length; _i++) {
    var value = sales_1[_i];
    console.log(value);
}
for (var property in sales) {
    console.log(property);
}
