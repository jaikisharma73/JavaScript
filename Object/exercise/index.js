const max = prompt("Enter maximum number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess number");

while(true){
    if(guess == "quit"){
        console.log("Quiting");
        break;
    }

    if(guess == random){
        console.log("Congratulation ! right guess number was", random());
        break;
    }
    else if(guess < random){
        prompt("hint ! Too small guess another try another");
    }
    else{
        prompt(" hint ! Too large guess another try another");
    }
}
