h1 = document.querySelector("h1");

function change(color,delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color changed");
        },delay)
    });
}

change("red" , 1000)
.then(()=>{
    console.log("Color Changed to red");
    return change("orange" , 1000);
})
.then(()=>{
    console.log("Color Changed to red");
    return change("pink" , 1000);
})
.then(()=>{
    console.log("Color Changed to red");
    return change("green" , 1000);
})
.then(()=>{
    console.log("Color Changed to red");
    return change("blue" , 1000);
})
.then(()=>{
    console.log("Color Changed to red");
    return change("black" , 1000);
})
.catch(()=>{
    console.log("Week connection Timed Out Error");
})
