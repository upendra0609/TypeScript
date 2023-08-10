class Database {
    constructor(){
        console.log(`connected to database`);
    }
    public Insert(){
        console.log(`Inserted`);
    }
}

let oracle:Database = new Database;
oracle.Insert();