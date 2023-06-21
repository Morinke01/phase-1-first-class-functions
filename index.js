//Callback function
function receivesAFunction(callback){
    let game = "football";
    callback(game);
}
function games(game){
    console.log("I love " + game);
}
receivesAFunction(games);

//function with no arguments
function returnsANamedFunction(){
    let a = 6;
     return addition;
}

function addition(a){
    let result = 5 + a;
    console.log(result);
}
returnsANamedFunction();
 
//Returning an anonymous function
function returnsAnAnonymousFunction(){
    let a = 6;
    return function (){
        let result = 10 - a;
        console.log(result);
     };
}
returnsAnAnonymousFunction();
