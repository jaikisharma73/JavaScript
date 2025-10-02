let arr = [1,2,3,5,7,3,8,9,6,4];

// let double = arr.map((el)=>{
//     return el*el;
// });
// console.log(double);

// let ans = arr.filter((el)=>{
//     return el % 2 == 0;
// })
// console.log(ans);

let max = arr.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log(max);
