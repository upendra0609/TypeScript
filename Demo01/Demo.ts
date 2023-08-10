//password 4 to 15 char alpha numeric with atleast 1 uppercase

let password:string = "Tohnrklf@123";
let regExp:any = /(?=.*[A-Z])\w{4,15}/;

if(password.match(regExp)){
    console.log(`${password} - Strong passowrd`);
}else{
    if(password.length<4){
        console.log(`${password} - poor password`);
    }else{
        console.log(`${password} - weak passowrd`);
    }
}