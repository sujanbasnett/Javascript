let users = [
  {
    name: "ram",
    cartItems: [
      {
        product_id: 1,
        price: 100,
        quantity: 2,
      },
      {
        product_id: 2,
        price: 300,
        quantity: 2,
      },
    ],
  },
  {
    name: "hari",
    cartItems: [
      {
        product_id: 3,
        price: 100,
        quantity: 2,
      },
      {
        product_id: 4,
        price: 300,
        quantity: 2,
      },
    ],
  },
];
let total=0;
function totalSpentByClient(clientName) {
   for (let i = 0; i < users.length; i++) {
    let user = users[i]
    if (user.name === clientName) {
      for (let j =0;j<users[i].cartItems.length;j++){
      let userCartItem = user.cartItems[j]
      total+=userCartItem.quantity*userCartItem.price
    }}
    return total;
  }
  
}
console.log(`The total amount spent: Rs ${totalSpentByClient("ram")}`);