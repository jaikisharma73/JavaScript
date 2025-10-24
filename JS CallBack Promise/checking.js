h1 = document.querySelector("h1");

function change(color,delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color changed");
            reject("Color not changed");
        },delay)
    });
}

change("red" , 1000)
.then(()=>{
    console.log("Color Changed to red");
    return change("orange" , 1000);
})
.then(()=>{
    console.log("Color Changed to oranged");
    return change("pink" , 1000);
})
.then(()=>{
    console.log("Color Changed to pink");
    return change("green" , 1000);
})
.then(()=>{
    console.log("Color Changed to green");
    return change("blue" , 1000);
})
.then(()=>{
    console.log("Color Changed to blue");
    return change("black" , 1000);
})
.then(()=>{
    console.log("Color Changed to black");
})
.catch(()=>{
    console.log("Week connection Timed Out Error");
})
