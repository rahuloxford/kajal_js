// Q. print the number in reverse order given by user.

// let number = Number(prompt("enter a number here? "));
// let reverse = 0;

// while (number > 0) {
//     let last_digit = number % 10;
//     reverse = reverse * 10 + last_digit;
//     number = Math.floor(number / 10);
// }

// console.log(reverse);



// Q. print the number of digits in a given number by user.

let number = Number(prompt("enter a number here? "));
let original = number;
let digits = 0;

while (number > 0) {
    digits++;
    number = Math.floor(number / 10); // remove the last digit
}

console.log(original);
console.log(`there are ${digits} digits in the number`);