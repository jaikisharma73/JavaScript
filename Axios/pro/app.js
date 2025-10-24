let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let coll = await getColleges(country);
    show(coll);
});

function show(coll){
    let list = document.querySelector("#list");
    list.innerText ="";
    for(col of coll){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try {
        let res  =  await axios.get(url+country);
        return res.data;
    } catch (error) {
        console.log(error);
        return[];
    }
}