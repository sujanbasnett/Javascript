
/**
 * finding total price of cart items
 */
let users=[
    {
        name:"Ram",
        cartItems:
        [
        {
            name:"keyboard",
            price:100,
        },
        {
            name:"Monitor",
            price:500,
        },
    ]
    },
    {
        name:"Hari",
        cartItems:[
        {
            name:"Head",
            price:500,
        },
        {
            name:"Hand",
            price:100,

        }
    ]
    }   
    
]
let totalValue=(firstItemPrice,secondItemPrice)=> firstItemPrice+secondItemPrice

