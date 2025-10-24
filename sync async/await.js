// function getNum(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random() * 10)+1;
//         console.log(num);
//         resolve();
//     },1000);
//    });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

h1 = document.querySelector("h1");

function change(color,delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("Color changed");
        },delay)
    });
}

async function demo(){
    try {await change("red",1000);
    await change("orange",1000);
    await change("blue",1000);
    await change("green",1000);
    await change("pink",1000);
    await change("black",1000);}
    catch(err){
        console.log("Error found");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("number is =" ,a + 3);
}

