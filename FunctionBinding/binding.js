
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