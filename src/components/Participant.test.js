import React from 'react'
import { shallow } from 'enzyme'
import Participant from './Participant'
import MedalList from './MedalList'



test('A suite', function() {
  const data = require('../data')
  it('should render without throwing an error', function() {
    const wrapper = shallow(
        <MedalList title = {"Gold Medals"} list = { data.SportList[0].GoldMedalList }/>
    );
    expect(wrapper.contains(<th>Event</th>)).toBe(true);

    expect(wrapper.is('.MedalList')).toBe(true);
    expect(wrapper.find('.MedalList').length).toBe(1);
    expect(wrapper).toMatchSnapshot();


    expect(shallow(<Participant key = {0} { ... data.SportList[0].GoldMedalList[0] } />).text()).toEqual(data.SportList[0].GoldMedalList[0].Participant.c_Participant +
                                                                                                        data.SportList[0].GoldMedalList[0].Event.c_Name +
                                                                                                        data.SportList[0].GoldMedalList[0].Gender.c_Name);

  });
});
