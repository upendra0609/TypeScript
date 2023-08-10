//password 4 to 15 char alpha numeric with atleast 1 uppercase
var password = "Tohnrklf@123";
var regExp = /(?=.*[A-Z])\w{4,15}/;
if (password.match(regExp)) {
    console.log("".concat(password, " - Strong passowrd"));
}
else {
    if (password.length < 4) {
        console.log("".concat(password, " - poor password"));
    }
    else {
        console.log("".concat(password, " - weak passowrd"));
    }
}
