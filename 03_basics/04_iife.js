//? Immediately Invoked Function Expression (IIFE)

//? global scope ke plution se problem hoti he ki bar to us global scope ke variable he ya declaration he uske plution ko htane ke liye IIFE ka use kiya he.
//? ()()

(function chai(){ // NAMED IIFE
    console.log("BE CONNECTED")
})(); // yha is function ko end krne ke liye semicolon lgana mandatory he.

( () => {  // SIMPLE IIFE
    console.log(`BE CONNECTED TO YOU`) 
})();

( (name) => {
    console.log(`BE CONNECTED TO YOU ${name}`)
})('SUNIL')

