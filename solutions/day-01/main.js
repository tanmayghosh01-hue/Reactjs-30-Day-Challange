const contries = require('./contries');

const webTEchs = require('./web-techs')

console.log(contries);

console.log(contries.concat(webTEchs));


// Question - 02

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)

let wordArray = [];

wordArray = text.split(" ")


console.log(wordArray)

console.log(wordArray.length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("Meat")

shoppingCart.push("Sugar")

shoppingCart.splice(shoppingCart.lastIndexOf("Honey"),1)

console.log(shoppingCart)

shoppingCart[shoppingCart.lastIndexOf("Tea")] = "Green Tea";

console.log(shoppingCart);

contries.unshift("Ethiopia");

console.log(contries);

if(webTEchs.includes("Sass")) {
    console.log("Sass is a CSS Preprocessor")
} else {
    webTEchs.unshift("Sass")
    console.log(webTEchs)
}

// Question - 05

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)