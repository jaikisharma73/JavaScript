let todo = [];

let req = prompt("Enter your request plese");

while(true){
    if(req == "quit"){
        console.log("Quiting app");
        break;
    }

    if(req == "list"){
        console.log("----------");
        for(let i =0 ; i < todo.length; i++){
            console.log(i , todo[i]);
        }
        console.log("----------");
    }
    else if(req =="add"){
        let task = prompt("Plese enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let idx = prompt("Enter the task index");
        todo.splice(idx , 1);
        console.log("task deleted");
    }
    else{
        alert("Wrong Command");
    }
    req = prompt("Enter your new request");
}