function sum(...rest)

{
    let total=0;
    // let total=0;
    // console.log(`input1 value: ${input1}`)
    // console.log(`input2 value: ${input2}`)
    rest.forEach((value)=>
    {
        total+=value;
    })
    return total;

   



    // total+=rest
    // return total


    // let total=0
    // let numbers=[...num]
    
    // console.log(numbers)
    // numbers.forEach(number=>
    
    // total+=number)   
    // return total
    };
    // total=0
    // total +=num
    // return total

// // console.log(sum(1,2))
// console.log(sum(1,2,3))
console.log(sum(1,2,3,4,5,6,7))

// let name="sujan"
// let characterOfNames=Array.from(name)
// console.log(characterOfNames)