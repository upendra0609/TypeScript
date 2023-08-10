let product:object={
    name:"tv",
    price:1000,
    inStock:true,
    qty:2,
    total:function(){
        return this.qty*this.price;
    }
}

console.log(`${product.name}`)