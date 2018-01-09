import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import CountryStats from './CountryStats'
import Sport from './Sport'

chai.use(chaiEnzyme())

describe('<Sport />', () => {

  const data = require('../data')
  const container = shallow(<Sport { ... data.SportList[0] }/>)

  it('it is wrapped in a div id "outer"', () => {
    expect(container).to.have.tagName('div')
  })
})
