var Database = /** @class */ (function () {
    function Database() {
        console.log("connected to database");
    }
    Database.prototype.Insert = function () {
        console.log("Inserted");
    };
    return Database;
}());
var oracle = new Database;
oracle.Insert();
