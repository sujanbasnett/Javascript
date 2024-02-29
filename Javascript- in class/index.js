// greetings = "Namaste";
// let course;
// color = 2;
// console.log(greetings + " Bill Gates");
// console.log(greetings + " Elon");
// console.log(color + " Tuf");
// color = 3;
// console.log(color + " Tuf");
// console.log("hello");
// console.log(course);

// let productInMyStore = ["table", "bench", "power plugs"];
// console.log(productInMyStore);
// let ages = [30, 40, "sixty"];
// console.log(ages);
// ages[2] = 60;
// console.log(ages);

// object in javascript research,...

// let contacts = [];
// let users = [{
//   name: "Sujan Basnet",
//   phoneNumber: 9818047651,
//   address: {
//     permanent:{
//     stAddress:"Thulobharang",
//     wardNo:1
//   },
//   temporary:{
//     stAddress:"aaaaa",
//     wardNo:"a"
//   },

// },
// {
//   name: "Sagar Sir",
//   phoneNumber: 98189818,
//   address: {
//   permanent:{
//   stAddress:"Durbar Marg",
//   wardNo:2}
// },
// // temporary:{
// //   stAddress:"aaaaa,
// //   wardNo:"a"

// // },

// // {
// //   name: "broToMyLeft",
// //   phoneNumber: null,
// //   address: {
// //     Permanent:{
// //     stAddress:"Nagarjun",
// //     wardNo
// // }];
// // temporary:,
// // stAddress:"aaaa,
// // wardNo:"a"
// // {
// // }
// // onsole.log("original list of users",users);

// // //object value changed from "Sagar sir" to "Magar sir"
// // users[1].name = "Basnet sir";
// // console.log("Updated list of users",users);


// // user2.siuu = 9845;

// // console.log(user2.siuu);

// ///using array index to change the value of object.
// // let a = [
// //   { name: "Sujan" },
// //   {
// //     roll: 20,
// //   },
// // ];

// // a[0].name = "basnet";
// // console.log(a);

// // let courses = ["mern","marketing","python"];
// // // full courses
// // console.log("original array",courses);
// // courses[1]="digital-marketing";
// // //course amended
// // console.log("array changed to:",courses)


// // let colorDetails= [
// // {
// //   nameOfColor:"Red",
// //   hexValue: "#ff0000",
// //   rgbPercentage: "rgb(255,0,0)"
// // },
// // {
// //   nameOfColor:"Blue",
// //   hexValue: "#0000FF",
// //   rgbPercentage: "rgb(0, 0, 255)"
// // },
// // {
// //   nameOfColor:"Green",
// //   hexValue: "#00FF00",
// //   rgbPercentage: "(0, 255, 0)"
// // }
// // ];
// // console.log("orginial code codes",colorDetails);
// // //updated color value
// // colorDetails[2].hexValue="#000gG";
// // console.log("updated color codes/values",colorDetails);


// let users=[
//   {
//   name:"Sujan",
//   address: "swoyambhu",
//   phoneNo:{
//     ncell:9818047651,
//     ntc: 9860838703},
//   },
//   {
//       name:"basnet",
//       address:"Thulobahrang",
//       phoneNo:{
//         ncell:981805265,
//         ntc:9869174522,
//       },
//   }

 

// ]
// users[1].phoneNo.ntc=9818
// // console.log(users);
// // console.log("ntc number of basnet:", users[1].phoneNo.ntc);
// console.log(users);

let courses=[
  {
    nameCourse:"Python",
    nameStudents:[
      {
        name: "Sujan",
        roll: 22,

      },
      {
        name:"Basnet",
        roll:12,
      }
    ]
  },
  {
  nameCourse: "mern Stack",
  nameStudents:[
    {
      name:"Aus",
      roll:1,
    },
    {
      name:"gaming",
      roll:2,
    }
  ]
}
]
console.log(courses[0].nameStudents[1].roll)
