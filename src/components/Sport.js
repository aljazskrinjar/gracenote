import React, { PureComponent } from 'react'
import MedalList from './MedalList'
import '../index.css'

class Sport extends PureComponent{

  renderMedals(list,title) {
    return <MedalList title = {title} list = { list } />
  }

  render(){
    const { c_Name } = this.props.Sport
    const { GoldMedalList } = this.props
    const { SilverMedalList } = this.props
    const { BronzeMedalList } = this.props


    return (
      <div>
        <article className="sport">
          <h1 id="sporttitle">{ c_Name }</h1>
          <div>
            {(GoldMedalList.length > 0) ? this.renderMedals(GoldMedalList, "Gold medals") : null}
            {(SilverMedalList.length > 0) ? this.renderMedals(SilverMedalList, "Silver medals") : null}
            {(BronzeMedalList.length > 0) ? this.renderMedals(BronzeMedalList, "Bronze medals") : null}
          </div>
        </article>
      </div>
    )
  }
}

export default Sport
