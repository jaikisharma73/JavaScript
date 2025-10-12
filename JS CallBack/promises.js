function saveToDb(data) {
    return new Promise((resolve , reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("Success : data was saved");
        }
        else{
            reject("Failure : week connection");
        }
    });
}
saveToDb("Apna college")
.then( (result) => {
    console.log(" Data 1");
    console.log(result);
     return saveToDb("Hello World")
})
.then( (result) =>{
    console.log(" Data 2");
    console.log(result);
    return saveToDb("Hello ")
    })
.then( (result) =>{
    console.log(" Data 3");
    console.log(result);
    return saveToDb(" World")
    })
.then( (result) =>{
    console.log(" Data 4");
    console.log(result);
    })
.catch((error)=>{
    console.log("Promise was rejected");
    console.log(error);
})