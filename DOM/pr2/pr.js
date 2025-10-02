let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerText="New unique value 1";
// divs[1].innerText="New unique value 2";
// divs[2].innerText="New unique value 3";

let idx =1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}