interface IProduct{
    Name:string;
    Price:number;
}

interface ICategory extends IProduct{
    CategoryName:string;
}

let tv:IProduct|ICategory = {
    Name:"sony TV",
    Price:40000,
    CategoryName:"Electronics",
}

console.log(`${tv.Name}\n${tv.Price}\n${tv.CategoryName}`);