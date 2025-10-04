// let inp  =  document.querySelector("input");

// inp.addEventListener("keypress" , (event) =>{
//     console.log("key = " , event.key);
//     console.log("code = " , event.code);
//     console.log("KeyPressed");
// })


// Form Event.........................

let form  =  document.querySelector("form");

form.addEventListener("submit" , (event)=>{
    event.preventDefault();

    let user = document.querySelector("#user");
    let password = document.querySelector("#pass");
    console.log(user.value);
    console.log(password.value);

    alert(`Hi ${user.value} Your password is set to ${password.value}`);
    
   
})