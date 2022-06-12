
let obj = {
    firstName : "Reddy",
    last_name:"Vaddatti"
}

function data(){
    console.log("Hello" + this.firstName + this.last_name)
}

let user = data.bind(obj)
user()



let details = {
    company:"Clayfin",
    data(loc){
        console.log(`Name : ${this.company}, location: ${loc}`)
    }
}

let info = details.data.bind(details)
info("chennai")



// Call

//The call() method invokes a function with a given this value and arguments provided one by one
var user1 = {firstName: 'John', lastName: 'Rodson'};


function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

invite.call(user1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?



// apply
//Invokes the function with a given this value and allows you to pass in arguments as an array
invite.apply(user1, ['Hello', 'How are you?']); 