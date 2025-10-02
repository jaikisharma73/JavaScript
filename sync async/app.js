// let randomChoose = Math.random()*3;
// console.log(randomChoose);




// let promise = new Promise((resolve,reject) =>{
//     console.log("I am a promise");
//     resolve("Success")
//     // reject("Some error occured")
// })

// function getData(dataId , getNextData){
//     return new Promise((resolve , reject )=>{
//         setTimeout(()=>{
//             // console.log("data",dataId);
//             // resolve("Success");
//             reject("Error");
//             if(getNextData){
//                 getNextData();
//             }
//         },10000);
//     });
// }

// const getPromise = () =>{
//    return new Promise((resolve , reject)=>{
//         console.log("I am a promise");
//         resolve("Success");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise fullfilled");
// });

function asyncFunc(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            console.log("Data 1");
            resolve("Success");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            console.log("Data 2");
            resolve("Success");
        },10000);
    });
}
console.log("Fetching Data 1....");
asyncFunc().then((res)=>{
    console.log("Fetching Data 2....");
asyncFunc2().then((res) => {
        console.log("Success")
    });
})