var newArray = [0, "", true, [], function () { }];
newArray[0] = 10;
newArray[1] = "Hello";
newArray[2] = true;
newArray[3] = [10, "a"];
newArray[4] = function f1() {
    console.log("function inside array");
};
for (var _i = 0, _a = newArray[3]; _i < _a.length; _i++) {
    var item = _a[_i];
    console.log(item);
}
newArray[4]();
