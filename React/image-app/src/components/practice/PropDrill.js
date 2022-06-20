import React, { Component } from 'react'

export default class PropDrill extends Component {
  render() {
    return (
      <div>
       <ChildOne name='Reddy'/>
      </div>
    )
  }
}

function ChildOne(props){

    return(
        <div>
          <h1>{props.name}</h1>
        </div>
    )
}