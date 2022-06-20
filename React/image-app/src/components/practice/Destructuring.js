import React, { Component } from 'react';

class Destructuring extends Component {
    constructor(props){
        super(props)
        this.state={
            users: {
                name: 'Reddy',
                city:'Gadag',
                age:'24'
            },
            animals: ['dog','cat','elephant','horse']
        }
    }
    render() {
        //destructuring
        const{name,city,age} = this.state.users;
        const [a,b,,c] = this.state.animals
        return (
            <div>
                <h1>Name- {name}   city- {city}  age- {age}</h1>
                <h2>My favorite animals are 1.{a} 2.{b} 3.{c}</h2>
            </div>
        );
    }
}

export default Destructuring;
