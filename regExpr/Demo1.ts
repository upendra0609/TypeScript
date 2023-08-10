let regExp:any =/[A-Z]{4,10}/;

let userName:string="JOHN";

if(userName.match(regExp)){
    console.log(`Hello! ${userName}`);
}else{
    console.log(`Mane must be in Uppercase and 4 to 10 char`);
}