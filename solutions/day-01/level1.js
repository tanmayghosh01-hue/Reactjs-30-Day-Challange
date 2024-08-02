let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = txt.split(' ');

// console.log(words);

// console.log( "Element at index 6 =",words[5]);

// console.log("length of Array", words.length)

const eightvalues = Array(8).fill('X');

// console.log(eightvalues);

// Concat the List

const concatListe = words.concat(eightvalues);

// console.log(concatListe);

// Getting Index of Element of Array

// console.log(concatListe.indexOf('Python.'));


let index = concatListe.indexOf('HTML,');


// Ternary Operator

// index != -1
//     ? console.log("The item does exist in the Array")
//     : console.log('The item does not exist in the Array')

//-----------------------------------------------------
//----------------Level-01 Exercise---------------->>>>

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]


// Question - 01 Solution :-

const arr = Array();

// Question -02 Solutions :-

const arrOne = Array(5).fill('X');

// Question -03 Solutions :-

console.log(arrOne.length);

// Question -04 Solutions :-

console.log(arrOne[0]);
console.log(arrOne[(arrOne.length-1)/2]);
console.log(arrOne[arrOne.length - 1])

// Question -05  Solutions :-

const mixedDataTypes = [1, "doggie", {
    batman : "Tanmay",
    age: 23,
}];

console.log(mixedDataTypes.length);

// Question -06 Solutions :-

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies);

console.log(itCompanies.length);

console.log(
    itCompanies[0],
    itCompanies[(itCompanies.length-1)/2],
    itCompanies[itCompanies.length-1]
);

console.log(itCompanies.toString());

itCompanies[0] = "FACEBOOK";
itCompanies[1] = "GOOGLE";
itCompanies[2] = "MICROSOFT";
itCompanies[3] = "APPLE";
itCompanies[4] = "IBM";
itCompanies[5] = "ORACLE";
itCompanies[6] = "AMAZON";

console.log(itCompanies);

console.log(itCompanies.toString());

itCompanies.includes('GOOGLE')
    ? console.log("Item Exists")
    : console.log("Item not Exists")




let arrayOfoos = [];


itCompanies.forEach((item, index) => {
    let characterArray = item.split('');

    let countZeros = 0;

    let currentItem = item;

    for (i = 0; i < characterArray.length; i++) {
        if (characterArray[i] == 'O') {
            countZeros++;
        } else if (countZeros > 1) {
            arrayOfoos.push(currentItem);
            countZeros = 0;
            continue
        }
    }

    // characterArray.forEach((item, index) => {
    //     if(item = 'O') {
    //         countZeros++;
    //     } else if (countZeros > 1) {
    //         arrayOfoos.fill(currentItem);
    //         return;
    //     }
        
    // }
    
    // );


})

console.log(arrayOfoos);


console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(4, itCompanies.length));
console.log(itCompanies.slice(itCompanies.length), itCompanies);


console.log(itCompanies.splice(0,1));

console.log(itCompanies);

// console.log(

//     itCompanies.splice(
//         itCompanies.length/2, itCompanies.length/2
//     )

// )

// Middle index

let middleIndex = Math.floor(itCompanies.length/2);

itCompanies.splice(middleIndex, 1);

console.log(itCompanies);

itCompanies.splice(itCompanies.length-1, 1);

console.log(itCompanies)

console.log(itCompanies.splice());

//------------------------level-1-->>>exercise done <<

