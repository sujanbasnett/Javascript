let users=[
    {
        name:"Sujan",
        address:
        [
            {
            permanent:
            {
                name: "Thulobharang",
                ward: 3,
            }
        }

        ]
    },
    {
        name:"Sagar",
        address:
        [
            {
            permanent:
            {
                name: "Swoyambhu",
                ward: 4,
            }
        }

        ]

    },
    {
        name:"Shreejal",
        address:
        
        [
            {
            permanent:
            {
                name: "Bhagwanpau",
                ward: 2,
            }
        }

        ]
    }

]
// for (let i=0;i<3;i++)

// console.log(users[0].name,"lives in", users[0].address[0].permanent.name)
console.log(users[0].name,"lives in", users[0].address.permanent.name)
