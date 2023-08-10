let newArray:any[] =[0,"",true,[],function(){}];
newArray[0] = 10;
newArray[1] = "Hello";
newArray[2] = true;
newArray[3] = [10,"a"];
newArray[4] = function f1(){
    console.log("function inside array");
}

for(var item of newArray[3]){
    console.log(item);
}

newArray[4]();