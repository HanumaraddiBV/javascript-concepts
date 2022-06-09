//iterables


//

let user = {name:"Reddy",age:24}

function invite(){
    console.log(this.name)
}

let employe = invite.bind(user);
employe()