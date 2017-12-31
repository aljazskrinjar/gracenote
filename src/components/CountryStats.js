import React, { PureComponent } from 'react'
import Sport from './Sport'
import Gold from '../icons/gold-medal.svg'
import Silver from '../icons/silver-medal.svg'
import Bronze from '../icons/bronze-medal.svg'
import All from '../icons/threemedals.jpg'
import '../index.css'


class CountryStats extends PureComponent {

  renderSport(sport, index) {
    return <Sport key={index} { ...sport } />
  }

  render() {
    const data = require('../data')

    return (
    <div id="outer">
      <h1>{ data.NOCMedals.NOC.c_Name }</h1>

      <img src={Gold} alt="gold" /> { data.NOCMedals.Medals.n_Gold }
      <img src={Silver} alt="silver" /> { data.NOCMedals.Medals.n_Silver }
      <img src={Bronze} alt="bronze" /> { data.NOCMedals.Medals.n_Bronze }
      <img src={All} alt="all" /> { data.NOCMedals.Medals.n_Total }
      { data.SportList.map(this.renderSport) }

    </div>
    )
  }
}

export default CountryStats
