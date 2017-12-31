import React, { PureComponent } from 'react'
import Participant from './Participant'
import '../index.css'

class MedalList extends PureComponent{
  renderParticipant(participant,index){
    return <Participant key={index} {...participant} />
  }
  render(){
    return (
    <article className="MedalList">
    <h3>{this.props.title}</h3>
    <table align= "center" id= "stats">
      <tbody>
        <tr>
          <th>Participant</th>
          <th>Event</th>
          <th>Gender</th>
        </tr>
        { this.props.list.map(this.renderParticipant) }
      </tbody>
    </table>

    </article>
  )
  }
}

export default MedalList
