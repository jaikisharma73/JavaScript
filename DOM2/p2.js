let newBtn =  document.createElement("button");
newBtn.innerText = "Click Me";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";

document.querySelector("body").prepend(newBtn);



let para = document.querySelector("p");

let p = para.getAttribute("class");
console.log(p);
let p2 = para.setAttribute("class","newClass");


