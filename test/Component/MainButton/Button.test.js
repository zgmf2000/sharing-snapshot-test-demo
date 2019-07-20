import React from 'react';
import {shallow, configure} from 'enzyme';
import renderer from 'react-test-renderer';
import Button from '../../../src/Component/MainButton/Button'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Button', () => {
    describe('#render', () => {
        it('should render match snapshot', () => {
            const wrapper = renderer.create(<Button title={'Title Of Button'}/>);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    it('should dispatch callback when the button is pressed', () => {
        const mockClickFn = jest.fn();
        const wrapper = shallow(<Button onClick={mockClickFn}/>);
        wrapper.props().onPress();

        expect(mockClickFn).toHaveBeenCalledTimes(1);
    });
});
