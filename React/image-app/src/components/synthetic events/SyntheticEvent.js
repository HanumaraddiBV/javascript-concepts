import React, { Component } from 'react'

export default class SyntheticEvent extends Component {
    constructor(props){
        super();
        this.state={
            name: ''
        }
    }
    handleClick = ()=>{
       this.state.name.length > 0 ? alert(`${this.state.name}`) : alert('PleaseType something')
    }
  render() {
    return (
      <div style={{margin:"40px"}}>
      <input type='text' placeholder='Enter your name' onChange={(e)=> this.setState({name: e.target.value})} />
      <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
