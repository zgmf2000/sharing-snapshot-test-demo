import React from 'react';
import renderer from 'react-test-renderer';

import MainScreen from '../../src/MainScreen/MainScreen.component';

describe('MainScreen', () => {
  describe('#render', () => {
    it('should render the component according to the snapshot', () => {
      const wrapper = renderer.create(<MainScreen/>);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
