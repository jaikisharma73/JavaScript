h1 =  document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color changed");
        },delay);
    });
}

changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("Orange color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("Blue color completed");
    console.log("all three color completed");
})
.catch(()=>{
    console.log("Error was founded by mac");
})
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