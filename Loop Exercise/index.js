// let array = [7, 9, 0, -2];
// let n = 3;

// let result = array.slice(0, n);

// console.log(result); // Output: [7, 9, 0]




// let array = [7, 9, 0, -2];
// let n = 3;

// let result = array.slice(-n);

// console.log(result); // Output: [9, 0, -2]





// let str = ""; // you can change the value to test

// if (str.trim() === "") {
//   console.log("The string is blank");
// } else {
//   console.log("The string is not blank");
// }





// let str = "JavaScript";
// let index = 4; // character at index 4 is 'S'

// let char = str.charAt(index);

// if (char === char.toLowerCase() && char !== char.toUpperCase()) {
//   console.log(`The character '${char}' at index ${index} is lowercase.`);
// } else {
//   console.log(`The character '${char}' at index ${index} is NOT lowercase.`);
// }






// let str = "   Hello World!   ";

// let result = str.trim();

// console.log("Original: '" + str + "'");
// console.log("After trim: '" + result + "'");





// let array = [7, 9, 0, -2];
// let element = 9;

// if (array.includes(element)) {
//   console.log(element + " exists in the array");
// } else {
//   console.log(element + " does not exist in the array");
// }





// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== num) {
//     result.push(arr[i]);
//   }
// }

// console.log(result); // Output: [1, 3, 4, 5, 6, 3]






// let number = 287152;

// // Method 1: Convert to string and get length
// let count = number.toString().length;

// console.log("Number of digits:", count); // Output: 6






// let number = 287152;
// let sum = 0;
// let temp = number;

// while (temp > 0) {
//   let digit = temp % 10; // get last digit
//   sum += digit;          // add to sum
//   temp = Math.floor(temp / 10); // remove last digit
// }

// console.log("Sum of digits:", sum); // Output: 25






// let n = 7; // You can change this value
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//   factorial *= i; // multiply factorial by i
// }

// console.log(n + "! =", factorial); // Output: 7! = 5040






// let n = 5;
// let factorial = 1;
// let i = 1;

// while (i <= n) {
//   factorial *= i;
//   i++;
// }

// console.log(n + "! =", factorial); // Output: 5! = 120






let arr = [7, 23, 0, 12, 5, 3];
let largest = arr[0]; // assume the first element is the largest

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i]; // update largest if current element is bigger
  }
}

console.log("The largest number is:", largest); // Output: 12

