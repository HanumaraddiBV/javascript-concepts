import React, { Component } from 'react'
import { WithSuit } from './withSuit'

 class TonyStark extends Component {
  render() {
    console.log(this.props)
    return (

      <div>
      
        <h1>{this.props.power}</h1>
      </div>
    )
  }
}

export default WithSuit(TonyStark,"Tony");