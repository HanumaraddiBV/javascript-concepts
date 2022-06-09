// Array destructuring

let animals = ["cat","dog","camel","lion"];

// with help of destructuring we can easily get the elements;

let [first,second] = animals;
console.log('first:', first)
console.log('second:', second)

// we can  Ignore elements using commas

// we can Assign to anything at the left-side
let user = {};
[user.name, user.surname] = "John Smith".split(' ');
console.log('user.surname:', user.surname)
console.log('user.name:', user.name)


// default value
// If we want a “default” value to replace the missing one, we can provide it using =:
let [name = "Guest", surname = "Reddy"] = ["Julius"];
console.log('surname:', surname)  // Reddy
console.log('name:', name)     //Guest




// Object destructuring 

let obj ={
    fName : "Reddy",
    age:24,
    sirName:"Vaddatti"
}

const {fName,age,sirName} = obj
console.log('fName:', fName)  // Reddy