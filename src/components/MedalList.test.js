import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import MedalList from './MedalList'


chai.use(chaiEnzyme())

describe('<MedalList />', () => {

  const data = require('../data')
  const container = shallow(<MedalList title = {"Gold Medals"} list = { data.SportList[0].GoldMedalList } />)

  it('it is wrapped in a div with className', () => {
    expect(container).to.have.className('MedalList')
  })

  it('checks if medal color is matching', () => {
    expect(container.find('h3')).to.have.text( 'Gold Medals' )
  })
})
