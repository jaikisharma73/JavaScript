async function greet() {
    // throw "Some random error";
    return "hello";
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was : ",result);
})
.catch((error)=>{
    console.log("promise was rejected with error ",error)
})

let demo = async () =>{
    return 5;
}