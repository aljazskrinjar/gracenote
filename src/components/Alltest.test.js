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
  it('testing Medal list', function() {
    const data = require('../data')

    const wrapper = shallow(
      <MedalList title = {"Gold Medals"} list = { data.SportList[0].GoldMedalList }/>
    );
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.contains(<th>Event</th>)).toBe(true);
    expect(wrapper.is('.MedalList')).toBe(true);
    expect(wrapper.find('.MedalList').length).toBe(1);
    // console.log(wrapper.debug());
    // console.log(wrapper.instance().props)
    expect(wrapper.instance().props.title).toEqual("Gold Medals");

  });
});

// it('calls componentDidMount', () => {
//
//     sinon.spy(CountryStats.prototype, 'componentDidMount');
//     const wrapper = mount(<CountryStats />);
//     expect(CountryStats.prototype.componentDidMount.calledOnce).toEqual(true);
//   });
//
//
//   it('ensures the state is set', () => {
//     const data = { isLoaded: true}
//     // const promise = Promise.resolve(data);
//
//
//     sinon.stub(global, 'fetch').callsFake(() => Promise.resolve(data))
//
//     const wrapper = mount(<CountryStats />);
//     wrapper.update()
//     console.log(wrapper.state())
//     // return promise.then(() => {
//     //
//     //   // expect(wrapper.state('isLoaded')).toEqual(true);
//     //
//     //   wrapper.update();
//     // }).then(() => {
//     //   expect(wrapper.state('isLoaded')).toEqual(true);
//     // });
//     return Promise.resolve(wrapper)
//     .then((comp) => {
//       console.log(wrapper.state())
//       console.log(comp)
//       return comp.update()
//
//     })
//     .then(() => {
//       console.log(wrapper.state())
//        expect(wrapper.state('isloaded')).toEqual('some data')
//     })
//   });
