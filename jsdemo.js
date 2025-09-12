function sum(a=0,b=0){
   return a+b;
}
const add=(a=5,b=6)=>a+b;
const z=sum();
console.log("sum="+z);
console.log(add());

(function(){
    console.log("IIFE");
})();

function f1(user,callback){
    console.log(`Hello ${user}`);
    callback();
}
f1("Admin", () => console.log(add(3, 5)));