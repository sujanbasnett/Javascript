// let students = [
//     {
//         name: "ram",
//         hasPaid:false,
//         hasSholarship:true,
//     },
//     {
//         name: "hari",
//         hasPaid:false,
//         hasSholarship:true,
//     },
//     {
//         name: "shyam",
//         hasPaid:true,
//         hasSholarship:false,
//     },
    
// ]

// function checkEligibility(students)
// {

// students.forEach((student)=>
//     (student.hasPaid || student.hasSholarship)? console.log(`${student.name} can give exam`):(`${student.name} can give exam` ))
// }

// checkEligibility(students)



// //SPREAD OPERATOR
// let num=[
//     1,2,3
// ]
// function sum(x,y,z)
// {
//     return x+y+z
// }
// console.log(sum(...num));

const password = "@gmail.com"
const username = "sujan"


let dbUsers=[
    // {
    //     userName:"sujan",
    //     password:"@gmail.com",
    //     isActivated: true,
    // },
    {
        userName:"sujan",
        password:"@gmail.com",
        isActivated: true,
    }
]
function login(Users){
Users.forEach((user)=>
{
    if (user.password== password && user.userName==username && user.isActivated== true)
    value= true
else
{
    value=false
}
return value
    
})
if (value===true)
{
    console.log("Login Successfully")
}
else
{
    console.log("Re enter your password")
}
}

login(dbUsers)

