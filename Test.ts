function f1(){
    window.x= 20;
    console.log(`x in f1 ${window.x}`);
}

function f2(){
    console.log(`x in f2 ${window.x}`);
}

f1();
f2();