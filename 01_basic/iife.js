//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //name IIFE
    console.log(`DB connected`);
})();

((name)=>{
    console.log(`DB connected to ${name}`);
})('amit')