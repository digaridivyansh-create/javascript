/*for(let count=1;count<=5;count++){
    console.log("apna college");
}
console.log("loop ended");*/

//calculate the sum of first n natural numbers
/*let sum=0;
for(let i=0;i<=5;i++){
    sum+=i;
}
console.log(sum);*/

/*for(let i=1;i<=5;i++){
    console.log(i);
}*/


/*let i=1;
while(i<=5){
    console.log(i);
    i++;
}*/

//length of string question

/*let str="money";
let size=0;
for(let i of str){
    console.log(i);
    size++;
}
console.log("size of string is=",size);*/

//for -in loop
/*let student={
    name:"rahul",
    age:22,
    course:"btech",
    cgpa:8.5,
    isPass:true,
    
};
for(let key in student){
    console.log("key=",key, "value=",student[key]);
}*/

/*let sum=0;
for(let i=0;i<100;i++){
    if(i%2==0){
        sum+=i;
    }
}

console.log(sum);*/

let gamenum=25;
let usernum = prompt("guess the number");
while(usernum!=gamenum){
    usernum=prompt("wrong guess, try again");
}
console.log("congratulations! you guessed the number");

/*et str="hello world";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);

let specialstr=`this is a template literal ${1+2+3}`;
console.log( specialstr);

console.log("hello\nworld");*/

/*let str="hello world";
console.log(str.length);
console.log(str.toUpperCase());*/

/*let str="apna college";
let newstr=str.toUpperCase();
console.log(str);
console.log(newstr);*/

/*let str="WEST BENGAL";
str=str.toLowerCase();
console.log(str);*/

/*let str="   hrllo   world";
console.log(str.trim());*/

/*let str="apna college";
console.log(str.slice(0,4));*/

//main question
let fullname=prompt("enter your full name");
let username="@"+fullname+fullname.length;
console.log(username);



