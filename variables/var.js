// var
var user = "reddy"
// variabled declared with var keyword we can acces them in any where in the code
//basically it provides global scope to the varibale
//if we try to get variable declared with var keyword before initialization we get a undefined error in console
function userInfo(){
    // variabled declared with let keyword we can acces them in only the where that variable is declared means let gives variables to bloc scope 
    //we cannot acces them in outer function
    //if we try to get variable declared with let keyword before initialization we get a Reference error in console
    let fName = "Hanum"
    console.log(user)
}
userInfo()

//const
//Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error
console.log(0.3===(0.1+0.2)); // output is false because 0.1+0.2 = 0.30000000000000004
const last_name = "Vaddatti"

last_name = "Reddy" // it will cause error : TypeError: Assignment to constant variable.
