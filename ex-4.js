const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here

employees.unshift ({ name: "Kody",
                  age: 19,
                  hobbies: ["Computer games", "wakeboard"]
                })

employees.unshift ({ name: "Alicia",
                  age: 29,
                  hobbies: ["shopping", "Reading novels"]
                })

console.log (employees)

// IF THE ORDER IS james, alex, alicia and kody INSTEAD, USE THE CODE BELOW

// employees.push ({ name: "Alicia",
//                   age: 29,
//                   hobbies: ["shopping", "Reading novels"]
//                 }) 

// employees.push ({ name: "Kody",
//                   age: 19,
//                   hobbies: ["Computer games", "wakeboard"]
//                 })

