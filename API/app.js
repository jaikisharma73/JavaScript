let jsonRes= 
    '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds." , "length":78}';

    let  validRes = JSON.parse(jsonRes);
    console.log(validRes);

let student  ={
    name : "Jaiki",
    marks : 95,
};

let  data = JSON.stringify(student);
console.log(data);
