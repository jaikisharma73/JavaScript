// function hello(){
//      console.log("In Hello Function");
//     console.log("Hello");
// }

// function demo(){
//     console.log("Calling Hello Function");
//     hello();
// }


// console.log("Calling Demo Function");
// demo();

// console.log("Done Bye");

// ..........................................................................................................

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// ....................................................................................................

// JS is Single Threaded Language

// let a  = 25;
// console.log(a);

// let b = 10;
// console.log(b);

// console.log(a+b);

// setTimeout( ()=> {
//     console.log("Apna college");
// }, 2000)
// setTimeout(()=>{
//     console.log("Barbad")
// },3000);
// console.log("Hello ....")


// .....................................................

// Call Back hell

// h1 =  document.querySelector("h1");

// function changeColor(color,delay, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         nextColorChange();
//     },delay)
// }

// changeColor("red", 1000,() => {
//     changeColor("orange",1000 , ()=>{
//         changeColor("purple",1000,()=>{
//             changeColor("blue",1000,()=>{
//                 changeColor("green",1000,()=>{
//                     console.log("Done");
//                 })
//             })
//         })
//     })
// });
