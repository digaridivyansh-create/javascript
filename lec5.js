/*function myfunction(){
    console.log("we are learning javascript");
}
myfunction();

function myfunction1(name){
    console.log(name);
}
myfunction1("john");


function sum(x,y){
  return x+y;
}

function multiply(x,y){
    return x*y;
}*/

/*function countvowel(str){
    let count=0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
          
        }
    }
    console.log(count);
}*/

/*let nums=[2,4,5,67,89];
let calcsquare=(num)=>{
    console.log(num*num);
};
nums.forEach(calcsquare);*/

/*
let nums=[2,4,5,67,89];
 let newarr=nums.map((val)=>{
    return val*val;
});
console.log(newarr);*/

/*let nums=[2,4,5,67,89];
let evennums=nums.filter((val)=>{
    return val%2===0;
});
console.log(evennums);*/

/*let arr=[2,4,5,67,89];
let sum=arr.reduce((prev,curr)=>{
    return prev+curr;
},0);
console.log(sum);*/

let arr=[2,4,5,67,89];
const output=arr.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
});
console.log(output);