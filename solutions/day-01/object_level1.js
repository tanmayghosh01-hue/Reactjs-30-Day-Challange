const dog  = {
    name : "Puta",
    legs : "3",
    color : "Blackish",
    age : 2,

    bark : function() {
        return "woof woof"
    },

    getDoggyInfo : function () {
        return `Name of Doggie is ${this.name} and his age ${this.age}, he has ${this.legs} legs and he always say ${this.bark()} he is kinda ${this.color} `
    }
};

dog.breed = "Rottweiler";

dog.getdogBreed = function () {
    return this.breed;
}

// console.log(dog);

// console.log(dog.getDoggyInfo())

// console.log(dog.getdogBreed())


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

let skillCount = 0;

let mostSkilled = '';

for (const key in users) {

  let object = users[key];
  let varSkillcount = 0;

  for (let i = 0; i < object['skills'].length; i++) {
    // console.log(key);
    varSkillcount++;
  }

  if (varSkillcount > skillCount) {
    skillCount = varSkillcount;
    mostSkilled = key;
  }

}

console.log(mostSkilled);


let greaterFifty = 0;
let loggedin = 0;

for (const key in users) {
  if (users[key].isLoggedIn == true) {
      loggedin++;
  } 
}
for (const key in users) {
  if (users[key].points >= 50) {
      greaterFifty++;
  } 
}

const mernUsers = [];

for (const key in users) {
  let stringUser = JSON.stringify(users[key]);

  let result = stringUser.includes("MongoDB") && stringUser.includes("Express") && stringUser.includes("React") && stringUser.includes("Node");

  if (result == true) {
    mernUsers.push(key)
  }
}

console.log(loggedin);
console.log(greaterFifty);
console.log(mernUsers);

users.tanmay = {};

console.log(users)

const keys = Object.keys(users);

console.log(keys);

const values = Object.values(users);

console.log(values);