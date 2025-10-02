// let n=100;
// for(let i=0;i<=n;i++){
//     if(i%2===0){
//         console.log("The even numbers are :",i);
//     }
// }

// 2.

let gameNum=25;

let userNum=prompt("Enter the number :")
while(userNum != gameNum){
        userNum =prompt("You Entered Wrong number Guess Again !");
}
console.log("Congratulation ! You Guess Right Number");