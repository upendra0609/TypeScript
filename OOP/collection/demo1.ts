let product = new Map();
product.set(1,"TV");
product.set(2,"Book");

console.log(product.get(1));

console.log(`--------------------KEYS------------------`);


for(let key of Array.from(product.keys())){
    console.log(key);
}

console.log(`--------------------VALUES------------------`);

for(let value of Array.from(product.values())){
    console.log(value);
}

console.log(`--------------------ENTRIES------------------`);

for(let entry of Array.from(product.entries())){
    console.log(entry);
}