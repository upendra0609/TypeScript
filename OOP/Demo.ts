interface IProduct{
    name:string;
    price:number;
    qty:number;
    total():number;
    vendor?:number;
}

let product:IProduct = {
    name:"tv",
    price:1000,
    qty:2,
    total() {
        return this.qty*this.price;
    }
}

console.log(`Name->${product.name}\nprice->${product.price}\nqty->${product.qty}\nTotal->${product.total()}`)