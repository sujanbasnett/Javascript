// arrow function
// function add(a,b)
// {
//     return a+b;
// }


//ARROW FUNCTION
// const add = (a,b)=>{
//     return a+b;
// }
// console.log(add(2,3));


//TERNARY OPERATOR

// let age =2;
// let name = age>3? "sujan":"Basnet";
// console.log(name);

//basic object destructuring in javascript 
let person = [{
    name: "sujan",
    age: "23",
    isMarried: false
},
{
name: "Basnet",
age:"22",
isMarried: true,
}
];

const [firstPerson, secondPerson]= person;
const {name:firstName,age: firstAge,isMarried:firstIsMarried}  = firstPerson
console.log(firstAge)