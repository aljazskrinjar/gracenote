import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon'


import MedalList from './MedalList';
import Participant from './Participant'
import CountryStats from './CountryStats'




describe('MedalList test', function() {
  it('testing Medal list', function() {
    const data = require('../data')

    const wrapper = shallow(
      <MedalList title = {"Gold Medals"} list = { data.SportList[0].GoldMedalList }/>
    );
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.contains(<th>Event</th>)).toBe(true);
    expect(wrapper.is('.MedalList')).toBe(true);
    expect(wrapper.find('.MedalList').length).toBe(1);
    // expect(wrapper.props().title).toEqual('Gold Medals');
  });
});


describe('Participant test', function() {
  it('testing Participant component', function() {

    const data = require('../data')
    const wrapper = shallow(
      <Participant key = {0} { ... data.SportList[0].GoldMedalList[0] } />
    );
    expect(wrapper).toMatchSnapshot();


    // expect(wrapper.contains(<th>Event</th>)).toBe(true);
    expect(wrapper.is('.rowOfTable')).toBe(true);
    expect(wrapper.find('td').length).toBe(3);
    expect(wrapper.instance().props.Participant.c_Participant).toEqual('aljaz Mulder');

  });
});

it('calls componentDidMount', () => {

    sinon.spy(CountryStats.prototype, 'componentDidMount');
    const wrapper = mount(<CountryStats />);
    // console.log(CountryStats.prototype.componentDidMount)

    expect(CountryStats.prototype.componentDidMount.calledOnce).toEqual(true);

  });


  // it('ensures the state is set', () => {
  //   const data = {state:{ 'isLoaded': true}}
  //   // const promise = Promise.resolve(data);
  //
  //
  //   sinon.stub(global, 'fetch').callsFake(() => Promise.resolve(data))
  //
  //   const wrapper = mount(<CountryStats />);
  //
  //   console.log(wrapper.instance().state)
  //
  //   wrapper.update()
  //   expect.assertions(1);
  //
  //   // return promise.then(() => {
  //   //
  //   //   // expect(wrapper.state('isLoaded')).toEqual(true);
  //   //
  //   //   wrapper.update();
  //   // }).then(() => {
  //   //   expect(wrapper.state('isLoaded')).toEqual(true);
  //   // });
  //   return Promise.resolve(wrapper)
  //   .then((comp) => {
  //
  //     return comp.update()
  //
  //   })
  //   .then(() => {
  //     console.log(wrapper.instance().state)
  //     //  expect(wrapper.instance().state('isloaded')).toEqual('some data')
  //   })
  // });
