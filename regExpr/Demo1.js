var regExp = /[A-Z]{4,10}/;
var userName = "JOHN";
if (userName.match(regExp)) {
    console.log("Hello ".concat(userName));
}
else {
    console.log("Mane must be in Uppercase and 4 to 10 char");
}
