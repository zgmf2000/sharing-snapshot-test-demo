import renderer from 'react-test-renderer';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import CounterText from '../../src/Component/CounterText';

configure({adapter: new Adapter()});

describe('#counterColor', () => {
    describe('snapshot', () => {
        it('should turn the color to red if have negation value', () => {
            const wrapper = renderer.create(<CounterText count={-1}/>);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });

        it('should turn the color to green if have negation value', () => {
            const wrapper = renderer.create(<CounterText count={2}/>);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });

        it('should turn the color from red to green if have negation value', () => {
            const wrapper = shallow(<CounterText count={-2}/>);
            wrapper.setProps({
                count: 3
            });
            const actualColor = wrapper.find('Text').props().style;
            expect(actualColor).toMatchSnapshot();
        });
    });

    describe('manual', () => {
        describe('color', () => {
            it('should turn the color to red if have negation value', () => {
                const wrapper = shallow(<CounterText count={2}/>);
                const actualColor = wrapper.find('Text').props().style.color;
                expect(actualColor).toEqual('green');
            });

            it('should turn the color to green if have negation value', () => {
                const wrapper = shallow(<CounterText count={-1}/>);
                const actualColor = wrapper.find('Text').props().style.color;
                expect(actualColor).toEqual('red');
            });

            it('should turn the color from to green if have negation value', () => {
                const wrapper = shallow(<CounterText count={-1}/>);
                wrapper.setProps({
                    count: 2
                });
                const actualColor = wrapper.find('Text').props().style.color;
                expect(actualColor).toEqual('green');
            });
        });

        describe('fontWeight', () => {
            it('should turn the fontWeight to normal have positive value', () => {
                const wrapper = shallow(<CounterText count={2}/>);
                const actualColor = wrapper.find('Text').props().style.fontWeight;
                expect(actualColor).toEqual('normal');
            });

            it('should turn the fontWeight to bold have negation value', () => {
                const wrapper = shallow(<CounterText count={-1}/>);
                const actualColor = wrapper.find('Text').props().style.fontWeight;
                expect(actualColor).toEqual('bold');
            });

            it('should turn the fontWeight to normal have positive value', () => {
                const wrapper = shallow(<CounterText count={-1}/>);
                wrapper.setProps({
                    count: 2
                });
                const actualColor = wrapper.find('Text').props().style.fontWeight;
                expect(actualColor).toEqual('normal');
            });
        });
    });
});
