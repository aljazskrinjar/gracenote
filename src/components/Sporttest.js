import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import CountryStats from './CountryStats'
import Sport from './Sport'

chai.use(chaiEnzyme())

describe('<Sport />', () => {

  const data = require('../data')
  const container = shallow(<Sport key = {0} { ... data.SportList[0] }/>)

  it('it is wrapped in a div', () => {
    expect(container).to.have.tagName('div')
  })

  it('renders a name of a country', () => {
    expect(container.find('h1')).to.have.text( data.SportList[0].c_Name )
  })
})
