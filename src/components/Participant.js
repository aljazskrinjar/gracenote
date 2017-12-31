import React, { PureComponent } from 'react'
import '../index.css'

class Participant extends PureComponent{
  render(){

    return (
      <tr>
        <td>{ this.props.Participant.c_Participant }</td>
        <td>{ this.props.Event.c_Name }</td>
        <td>{ this.props.Gender.c_Name }</td>
      </tr>
    )
  }
}

export default Participant
