import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import Participant from './Participant'


chai.use(chaiEnzyme())

describe('<Participant />', () => {

  const data = require('../data')
  const container = shallow(<Participant key = {0} { ... data.SportList[0].GoldMedalList[0] } />)

  it('it is wrapped in a div with className', () => {
    expect(container).to.have.tagName('tr')
  })

  
})
