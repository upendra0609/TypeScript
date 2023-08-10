var Name = prompt("Enter Name");
if (Name == null) {
    document.write("you canceled.....");
}
else if (Name == "") {
    document.write("Name can't be empty.....");
}
else {
    document.write("Hello !".concat(Name));
}
