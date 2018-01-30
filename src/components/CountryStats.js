import React, { PureComponent } from 'react'
import Sport from './Sport'
import Gold from '../icons/gold-medal.svg'
import Silver from '../icons/silver-medal.svg'
import Bronze from '../icons/bronze-medal.svg'
import All from '../icons/threemedals.jpg'
import { Link } from 'react-router-dom'

import '../index.css'


class CountryStats extends PureComponent {



  renderSport(sport, index) {
    return <Sport key={index} { ...sport } />
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {}
    };
  }

  componentDidMount() {
    this.interval = setInterval(() =>
    fetch('http://localhost:8000/src/data.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      , 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
}

  render() {
    // const data = require('../data')

    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
        <div id="outer">
          <h1>{ data.NOCMedals.NOC.c_Name }</h1>
          <Link to='/Sport'>CLick Me</Link>
          <img src={Gold} alt="gold" /> { data.NOCMedals.Medals.n_Gold }
          <img src={Silver} alt="silver" /> { data.NOCMedals.Medals.n_Silver }
          <img src={Bronze} alt="bronze" /> { data.NOCMedals.Medals.n_Bronze }
          <img src={All} alt="all" /> { data.NOCMedals.Medals.n_Total }
          { data.SportList.map(this.renderSport) }

        </div>
      )
    }
  }
}

export default CountryStats
