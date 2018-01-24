import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import Participant from './Participant'


chai.use(chaiEnzyme())

describe('<Participant />', () => {

  const data = require('../data')
  const container = shallow(<Participant key = {0} { ... data.SportList[0].GoldMedalList[0] } />)

  it('it is wrapped in tr', () => {
    expect(container).to.have.tagName('tr')
  })

  it('check if text matches', () => {
    expect(container.find('td').at(0)).to.have.text( data.SportList[0].GoldMedalList[0].Participant.c_Participant )
    expect(container.find('td').at(1)).to.have.text( data.SportList[0].GoldMedalList[0].Event.c_Name )
    expect(container.find('td').at(2)).to.have.text( data.SportList[0].GoldMedalList[0].Gender.c_Name )
  })



})
