// let students=[{
//     name:"Ram",
//     hasPaid: false,
//     hasScholarship: true,
//     fullAttendance: false
// },
// {
//     name:"Sujan",
//     hasPaid: false,
//     hasScholarship: true,
//     fullAttendance: true
// },
// {
//     name:"Basnet",
//     hasPaid: false,
//     hasScholarship: true,
//     fullAttendance: false
// },
// ]
// students.forEach((student1)=>{
// if ((student1.hasScholarship || student1.hasPaid ) && student1.fullAttendance)
// {
//     console.log(`${student1.name} can give exam`)
// }
// else
// {
//     console.log(`${student1.name} cannot give exam`)
// }})

// for (let i=0;i<students.length;i++)
// {
//     if ((students[i].hasPaid||students[i].hasScholarship) && students.fullAttendance){
//         console.log(`${students[i].name} can give exam`)
//     }
//     else{
//        console.log (`${students[i].name} cannot give exam`)
//     }
// }

// function multiplication(num, start, end) {
//   for (let i = start; i <= end; i++) {
//     console.log(`${num} x ${i} = ${num * i} `);
//   }
// }
// multiplication(3, 2, 5);
// multiplication(4, 4, 6);


let todos = [
    {
        title: "html",
        status: true,
    },
    {
        title: "react",
        status: false,
    },
    {
        title: "express",
        status: false,
    },
]
// for (let i=0;i<todos.length;i++)
// {
//     if (todos[i].status== true)
//     {
//         console.log(`${todos[i].title} is completed`)
//     }
//     else{
//         console.log(`${todos[i].title} is pending`)
//     }
// }
// function multiply(number,startingpoint,endpoint) {
//     for(let startingpoint =1; startingpoint<=endpoint;startingpoint++){
//       console.log(`${number}*${startingpoint}=${number*startingpoint}`);
//     }
    
//   }
  
//   multiply(5,5,10)

for (let i=0;i<todos.length;i++)
{
    todos[i].status===true?console.log(`${todos[i].title} is completed`):console.log(`${todos[i].title} is pending`)
}

// *
// **
// ***
// ****
// *****
// ******

