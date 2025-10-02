const favMovie = "avatar";
let guess = prompt("Guess mt favorite movie");

while((guess != favMovie) && (guess !="quit")){
    guess = prompt("Wrong Guess try agian");
}
if(guess == favMovie){
    console.log("Congrats!!");
}
if(guess == "quit"){
    console.log("You Quit!!");
}