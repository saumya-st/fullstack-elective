// let arr = [1,2,3,4,5,6];

// for(i=0;i<arr.length;i++);
// {
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }}

// const person ={key:"Helllo"};
// console.log(person.key);
// person.key='bYE'
// console.log(person.key);

// const arr=["HTML","CSS","JAVASCRIPT"];
// arr.push("Python");
// console.log(arr);


// const sales ="Toyoto";
// function carType(name)
//     {
//        return name ==="Honda"?name:"Sorry we dont sell this car"
//     }
//     const  car = {carn : "city",getCar:carType("Honda"),Special:sales}
//     console.log(car.carn);
//     console.log(car.getCar);
//     console.getCar(car.Special);

const color =["Red","Black","White"];
color.forEach((i)=>console.log(i));

// const num = [1,2,3,4,5];

// num.forEach((i,a)=>console.log(num[a]+3));
for(const i in color){
    console.log
}
// console.log(num)


for (const i in color){
    console.log(i,color[i]);
}
const user ={name:"Rabins", age:25,Hobby:"Coding"};
for(const index in user){
    console.log(index,user[index]);
}


//for in looop we usually use to work with indexes..for object or values use for of loop
greet("User");
function greet(name){
    console.log("hello"+' '+ name);

}
// greet("User");
const factorial = function(n){
    if(n==0||n==1)
        return 1;
    else return n*factorial(n);
}
console.log(factorial);
