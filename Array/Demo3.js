var category = ["electronics"];
function printLis() {
    for (var property in category) {
        console.log("".concat(property, " : ").concat(category[property]));
    }
}
// printLis();
// category.push("mobile","footware");
// printLis();
// category.unshift("mobile","footware");
// printLis();
// category.splice(0,0,"AA","BB");
// printLis();
