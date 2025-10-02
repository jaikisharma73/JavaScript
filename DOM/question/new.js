let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);




button.setAttribute("id","btn");
input.setAttribute("placeholder","Username")

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

btn.style.color="white";
btn.style.backgroundColor="blue";


let h1 =document.createElement("h1");
h1.innerHTML ="<u> DOM Practice </u>";

h1.style.color = "purple";

document.querySelector("body").append(h1);



let p =document.createElement("p");
p.innerHTML ="<u> What is your<b> Name</b> by the way and i want a good man who support me always<u>";
document.querySelector("body").append(p);