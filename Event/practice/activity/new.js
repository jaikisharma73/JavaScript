let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    h3.style.color = randomColor;

    let div  = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color Updated");
});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `RGB(${red} , ${green} , ${blue})`;

    return color;
}