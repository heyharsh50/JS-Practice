const person = {
    name : "Harsh",
    age : 20,
    isMarried: false,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",        
    },
}

console.log(person.name) // Harsh
console.log(person.age) // 20           
console.log(person.hobbies[1]) // gaming
console.log(person.address.city) // New York
console.log(person["hobbies"][2]) // coding
console.log(person["address"]["state"]) // NY

//Mostly in react we use destructuring to extract values from objects and arrays.
const {name, age, isMarried, hobbies, address} = person // destructuring
console.log(name) // Harsh
console.log(age) // 20

//............................................................................................\\

const Fname = "John Doe"
const Fage = 20

const person4 = {
    name : Fname,// John Doe    
    age : 20
}

// same as above
const person3 = {
    name,// John Doe    
    age
}  

//.............................................................................................\\

// Person 1 and Person 2 are only name is different so, here we use spread operator i.e. ...person2

const person1 = {
    name: "Harsh",
    age: 20
}

console.log(person1.name)

const person2 = {...person1, name: "Raj"}

console.log(person2.name)

//.............................................................................................\\

//1. Basic Object

const Person = {
    name: "Harsh",
    age: 22,
    isStudent: true
  };

//2. Accessing Object Values

console.log(person.name);      // Harsh
console.log(person["age"]);    // 22

//3. Adding / Updating Properties

person.city = "Delhi";         // Add
person.age = 23;   

//4. Deleting a Property

delete person.isStudent;

//5. Looping through an Object

for (let key in person) {
    console.log(key, person[key]);
  }

  
//6. Object Inside Object (Nested)

const student = {
    name: "HR",
    marks: {
      math: 90,
      science: 85
    }
  };
  
  console.log(student.marks.math); // 90
  
//7. Array of Objects (Very Common)

const student1 = [
    { name: "John", age: 20 },
    { name: "Jane", age: 22 },
    { name: "Doe", age: 21 }
  ];
  
  console.log(student1[1].name); // Jane