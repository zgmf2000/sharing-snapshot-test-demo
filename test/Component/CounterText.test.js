import renderer from 'react-test-renderer';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import CounterText from '../../src/Component/CounterText';

configure({adapter: new Adapter()});

describe('#counterColor', () => {
    describe('snapshot', () => {
        it('should match negation value', () => {
            const wrapper = renderer.create(<CounterText count={-1}/>);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });

        it('should match positive value', () => {
            const wrapper = renderer.create(<CounterText count={2}/>);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });

        it('should turn the color from red to green if change state value', () => {
            const wrapper = shallow(<CounterText count={-2}/>);
            let actualColor = wrapper.find('Text').props().style;

            expect(actualColor).toMatchSnapshot();
            wrapper.setProps({
                count: 3
            });
            actualColor = wrapper.find('Text').props().style;
            expect(actualColor).toMatchSnapshot();
        });
    });

    describe('manual', () => {
        describe('color', () => {
            it('should green if have negation value', () => {
                const wrapper = shallow(<CounterText count={2}/>);
                const actualColor = wrapper.find('Text').props().style.color;
                expect(actualColor).toEqual('green');
            });

            it('should red if have negation value', () => {
                const wrapper = shallow(<CounterText count={-1}/>);
                const actualColor = wrapper.find('Text').props().style.color;
                expect(actualColor).toEqual('red');
            });

            it('should turn the color from red to green if changed state value', () => {
                const wrapper = shallow(<CounterText count={-1}/>);
                let actualColor = wrapper.find('Text').props().style.color;

                expect(actualColor).toEqual('red');

                wrapper.setProps({
                    count: 2
                });

                actualColor = wrapper.find('Text').props().style.color;
                expect(actualColor).toEqual('green');
            });
        });

        describe('fontWeight', () => {
            it('should normal if positive value', () => {
                const wrapper = shallow(<CounterText count={2}/>);
                const actualColor = wrapper.find('Text').props().style.fontWeight;
                expect(actualColor).toEqual('normal');
            });

            it('should bold if negation value', () => {
                const wrapper = shallow(<CounterText count={-1}/>);
                const actualColor = wrapper.find('Text').props().style.fontWeight;
                expect(actualColor).toEqual('bold');
            });

            it('should turn the fontWeight to normal if changed state value', () => {
                const wrapper = shallow(<CounterText count={-1}/>);
                let actualColor = wrapper.find('Text').props().style.fontWeight;
                expect(actualColor).toEqual('bold');

                wrapper.setProps({
                    count: 2
                });
                actualColor = wrapper.find('Text').props().style.fontWeight;
                expect(actualColor).toEqual('normal');
            });
        });
    });
});
