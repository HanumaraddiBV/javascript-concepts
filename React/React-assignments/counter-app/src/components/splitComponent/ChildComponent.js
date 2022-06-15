import React, { Component } from 'react'
import './user.css'
export default class ChildComponent extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
      const {name,age,company} = this.props.user
    return (
      <div className='user-list'>
      <h4> Name : {name}</h4>
      <h4> Age : {age}</h4>
      <h4> company : {company}</h4>
      </div>
    )
  }
}
