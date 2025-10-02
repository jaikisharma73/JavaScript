// let arr = [ 1,2,3,4,5,6];

// arr.forEach(function(el){
//     console.log(el);
// })

// let print= function(el){
//     console.log(el);
// }
// arr.forEach(print);

let arr = [
    {
        name : "Aman",
        mark : 95,
    },
    {
        name : "Shraddha",
        mark : 87,
    },
    {
        name : "Jaiki",
        mark :89,
    }
]
arr.forEach((student) => {
    console.log(student.mark);
})