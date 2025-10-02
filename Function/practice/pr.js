// let marks = [56,63,43,65,76,78,90,98,94,96];

// let evenArr = marks.filter((val)=>{
//   return val>=90;
// })
// console.log(evenArr);

let n = prompt("Enter a number");

let arr = [];
for(let i  = 1; i<=n ; i++){
    arr[i-1]= i;
}
console.log(arr);

let sum = arr.reduce((prev ,curr)=>{
    return prev+curr;
})
console.log(sum);
let product = arr.reduce((prev ,curr)=>{
    return prev*curr;
})
console.log(product);