// step one part a I created my first array named age//
let ages= [3, 9, 23, 64, 2, 8, 28, 93 ];
console.log(ages);
// now I will subtract the first value from the last, I'll make a new variable to represent the last number using length
let minusAges= ages[ages.length -1];
console.log(minusAges);
//now I'm ready to subtract
console.log(minusAges- ages[0]);
// step 1 part b Add a new age to your array and repeat the above
ages.push(41);
console.log(ages);
console.log(ages[8]);
console.log( ages[ages.length-1] - ages[0]);
// I noticed that the minusAges was still set with the old number, so I just repeated the process with out the var
// Step 1 part c create a loop to calculate the average age.
let sumOfAges= 0;
for (i=0; i<sumOfAges; i++) {
 //I couldn't get the loop to work and then all of a sudden it started working.
 sumOfAges += ages[i];
 console.log('index', i, 'sumOfAges', sumOfAges);
}
console.log('Total Sum', sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average", average);
// Step 2 create an array of names
let names= ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// step 2 part a make a loop to iterate through the array and calculate the average number of letters per name.
//make new var
let totalChars = 0;
for( let i=0; i< names.length; i++) {
    //console.log(i, 'test.')
    totalChars += names[i].length;
    console.log('index', i, 'name:', names[i], 'totalChars:', totalChars);
}
let averageName = totalChars / names.length;
console.log('Average of Names:', averageName);
// step 2 b loop to iterate through the array again and concatenate all the names together, separated by spaces.
let concatNames = "";
for (let i=0; i< names.length; i++) {
    concatNames = concatNames.concat(names[i] + " ");
    console.log(i, "Names concatenated" , concatNames);
}
//step 3 how to get last element of array?
console.log("last element of ages array:", ages[ages.length-1]);
//step 4 how to get first element of array?
console.log("first element of ages array:", ages[0]);
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths= [];
for (let i=0; i< names.length; i++) {
    nameLengths.push(names[i].length);
    console.log('Name Lengths array:', nameLengths);
}
//step6
let charsTotal =0;
for (let i=0; i<nameLengths.length; i++) {
    charsTotal += nameLengths[i];
    console.log('CharsTotal: ', charsTotal);
}
//step7
function concatWords(word, n) {
    console.log('word Par:', word, "n Par:", n);
    let concat = word.repeat(n);
}
concatWords("Hello", 3);
// I don't see the hello 3 times. 
//step8
function fullName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    console.log(fullName);
}
fullName('Deena', 'Pelton');
// step 9
let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];
function sumNumbersArray(array){
    let total= 0;
    for (let i=0; i<array.length; i++) {
        total += array(i);
        console.log('Total:', total);
    }
    if (total> 100){
        console.log('Total:', total, true);
        return true;
    } else {
        console.log('Total:', total, false);
        return false;
    }
}
sumNumbersArray(numbers1);
//step 10

function calculateNumbersAverage(array){
    let total =0;
    for(let i=0; i< array.length; i++) {
total+= array[i];
console.log('calculate Function, total:', total);
    }
    let average = total / array.length;
    console.log( 'average of numbers:', average);
}
calculateNumbersAverage(numbers1);
//step 11
let numbers3 = [100, 100, 100];
let numbers4 = [100, 100, 99];

function twoAverages(array1, array2) {
    console.log('parameters:', array1, array2);
    let total1= 0;
    let total2= 0;
for (const number of array1) {
    total1 += number
    console.log('current number loop1', number, "total", total1);
}
fjor (const number of array2) {
    total2 += number;
    console.log('current number loop2:', number, 'total', total2);
    
}
}
twoAverages(numbers3, numbers4);