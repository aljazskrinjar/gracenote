import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import CountryStats from './CountryStats'
import Sport from './Sport'
import Gold from '../icons/gold-medal.svg'
import Bronze from '../icons/bronze-medal.svg'
import Silver from '../icons/silver-medal.svg'

chai.use(chaiEnzyme())

describe('<CountryStats />', () => {
  const data = require('../data')
  const container = shallow(<CountryStats />)

  it('it is wrapped in a div id "outer"', () => {
    expect(container).to.have.id('outer')
  })

  it('to have descendants', () => {
    expect(container).to.have.descendants(Sport);
  })

  it('renders a name of a country', () => {
    expect(container.find('h1')).to.have.text( data.NOCMedals.NOC.c_Name )
  })

  it('check if contains images', () => {
    expect(container.contains(<img src={Gold} alt="gold" />)).to.equal(true);
    expect(container.contains(<img src={Silver} alt="silver" />)).to.equal(true);
    expect(container.contains(<img src={Bronze} alt="bronze" />)).to.equal(true);
  })

})
