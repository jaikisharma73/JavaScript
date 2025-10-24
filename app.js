function greet(callback) { 
console.log('Hi'); 
callback(); 
} 
greet(() => console.log('Bye')); 