
function outer (){
    let x = 20;
     return function (y){
        console.log(x+y)
    }
 
}

let ans = outer();
ans(6)

// closure is a combination of function and lexical environment where the function was declared