let blogs = [
  {
    title: "Basic Computer  Training in Nepal",
    created_at: "2024-03-22T15:14:31.944539+05:45",
  },
  {
    title: "Exploring Video Editing Opportunities",
    created_at: "2024-01-22T14:51:41.401510+05:45",
  },
  {
    title: "Mastering Adobe Illustrator at Mindrisers",
    created_at: "2024-02-22T14:49:45.524809+05:45",
  },
  {
    title: "yo yo yo yo yooooooooooooooooooooooooooooooo",
    created_at: "2024-02-23-26252825655522",
  },
];

// "2024-02-22T15:14:31.944539+05:45".substring(0,10)

//used the loop to get access of values
// for (i=0;i<3;i++){
// blogs[i].created_at = blogs[i].created_at.substring(0,10)

// }
// console.log(blogs)

//using function
/**
 * 
 * @param {number}, blogs index number
 * @returns updated shorter value store in created_at
 */


let getShortDate=(passBlogIndex)=> {
  blogs[passBlogIndex].created_at=blogs[passBlogIndex].created_at.substring(0,10)
  return blogs[passBlogIndex].created_at
}

// shortDate(0)
// shortDate(1)
// shortDate(2)

for(let i=0;i<blogs.length;i++)
{
  getShortDate(i);
  debugger;
}
console.log(blogs)



let news=[
  {
    author:"shreejal",
    createdAt:"2024-22-22-1"
  },
  {
    author:"Iphone",
    createdAt:"2024-12-2-102020"
  }

]