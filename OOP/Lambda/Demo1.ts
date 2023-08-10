let products:any = [
    {Name:"Samsung TV", Category:"Electronics"},
    {Name:"Nike Casuals", Category:"Footwear"},
    {Name:"Speakers", Category:"Electronics"}
]

let results = products.filter(product => product.Category=="Electronics");

let count:number = products.filter(product => product.Category=="Electronics").length;

for(var item of results){
    console.log(item.Name);
}

console.log(count);