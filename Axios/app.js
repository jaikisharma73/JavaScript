// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async() => {
//    let link = await getImage();
//    console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
// })

// async function getImage() {
//   try {
//     let res = await axios.get(url2);  
//     return res.data.message;
    
//   } catch (err) {
//     console.log(err);
//     return "No Picture found";
//   }
// }


// btn.addEventListener("click", async() => {
//     let fact =  await getFacts()
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })


// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try {
//     let res = await axios.get(url);  
//     return res.data.fact;
    
//   } catch (err) {
//     console.log(err);
//     return "No fact found";
//   }
// }

const url = "https://icanhazdadjoke.com/";

let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let joke = await getJokes();
    console.log(joke);
    let p = document.querySelector("#para");
    p.innerText = joke;
})

async function getJokes(){
    try {
        const config = {headers : { Accept : "application/json"}};
        let res = await axios.get(url,config);
        return res.data.joke;
    } catch (error) {
        console.log(error);
    }
}