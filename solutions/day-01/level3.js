
const contries = require('./contries.js')

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();

console.log(ages)

let minimumAge = ages[0];

console.log(minimumAge);

let maximumAge = ages[ages.length-1];

console.log(maximumAge);

let middleAge = ages[Math.round(ages.length/2)]

console.log(middleAge);

let averageAge = 0;

ages.forEach((item) => {

    averageAge = averageAge + item;

});

console.log(averageAge/ages.length);

let rangeAge = ages[ages.length-1] - ages[0];

console.log(rangeAge);

let min_Avg = ages[0] - Math.abs(averageAge/2);

console.log(min_Avg)

let max_Avg = Math.abs(ages[ages.length-1] - averageAge)
// abs methods turns numbers positive
console.log(max_Avg);

// console.log(contries.slice(0,3));

let cont1 = [];
let cont2 = [];

if (contries.length-1%2 != 0) {
    contries.unshift("Nigeria");

    cont1 = contries.slice(0,Math.round((contries.length-1)/2));
    cont2 = contries.slice((contries.length-1)/2, contries.length-1);
} else {
    cont1 = contries.slice(0,Math.round((contries.length-1)/2));
    cont2 = contries.slice((contries.length-1)/2, contries.length-1);
}

console.log(cont1);
console.log(cont2);

console.log((contries.length)%2);