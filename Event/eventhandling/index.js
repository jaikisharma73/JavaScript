let btn=document.querySelector(".btn");

btn.onclick= (evt) =>{
    console.log("Clicked !");
    console.log(evt.type);
    console.log(evt.target);
}
let btn1=document.querySelector(".btn1");

btn1.onmouseover = () =>{
    console.log("Clicked !");
}