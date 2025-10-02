// const sumArrow = (a, b) => {
//   console.log(a + b);
// };

// const multipleArrow = (a, b) => {
//   console.log(a * b);
// };

// const subtract = (a, b) => {
//   console.log(a - b);
// };

// const divide = (a, b) => {
//   console.log(a / b);
// };

// function myFunction(){
//   console.log("HIIIIIIIIIIIIIIII");
// };
// myFunction();

// let arr= [1,2,3,4,5,6];
// let arr1= ["pune" , "mumbai" , "hydrabad"];

// arr.forEach(function printVal(val){
//   console.log(val);
// })
// arr.forEach((val) => {
//   console.log(val*val);
// })

// MAPPPPPPPPPPPPPP

// let nums = [1,3,4,5];

// nums.map((val) =>{
//   console.log(val);
// })


// let nums = [1,2,3,4,5,6,7,8];

// let evenArr = nums.filter((val)=>//   return val%2===0;
// })
// console.log(evenArr);

// let nums = [1,2,3,4,5];

// const output = nums.reduce((res , curr) => {
//   return res+curr;
// });

// console.log(output);
let nums = [1,2,3,4,5];

const output = nums.reduce((prev , curr) => {
  return prev>curr ? prev:curr;
});

console.log(output);