import React from 'react';
import {configure, shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import MainScreen from '../../src/MainScreen/MainScreen.component';

configure({ adapter: new Adapter() });

describe('MainScreen', () => {
  describe('#render', () => {
    it('should render the component according to the snapshot', () => {
      const wrapper = renderer.create(<MainScreen/>);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });

  });
  describe('#counterFunctionallity', () => {
    it('should do addition to count if Tambah Button is pressed',() => {
      const wrapper = shallow(<MainScreen/>);
      const additionButton = wrapper.find({title: 'Tambah'});

      additionButton.props().onClick();
      expect(wrapper.state().count).toEqual(1);
    });

    it('should do addition to count if Tambah Button is pressed',() => {
      const wrapper = shallow(<MainScreen/>);
      const additionButton = wrapper.find({title: 'Kurang'});

      additionButton.props().onClick();
      expect(wrapper.state().count).toEqual(-1);
    });
  });
});
