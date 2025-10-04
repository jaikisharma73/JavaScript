let btns =  document.querySelectorAll("button");

for(btn of btns){
    btn.onclick = sayhello;
    btn.onmouseenter = function(){
        console.log("You entered a button");
    }
}
function sayhello(){
    alert("Hello Mannnn");
}