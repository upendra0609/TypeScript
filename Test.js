function f1() {
    window.x = 20;
    console.log("x in f1 ".concat(window.x));
}
function f2() {
    console.log("x in f2 ".concat(window.x));
}
f1();
f2();
