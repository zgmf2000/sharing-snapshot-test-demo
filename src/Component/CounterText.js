//@flow
import {Text, View} from 'react-native';
import React, {Component} from 'react';

type Props = {
    count: String,
}

//TODO: Try to change the styling aspect on negation and positive
export default class CounterText extends Component<Props> {
    selectedStyle = (count) => {
        if (count < 0) {
            return negationStyle;
        }
        return positiveStyle;
    };

    render() {
        const {count} = this.props;
        const composedStyle = {...baseStyle,...this.selectedStyle(count)};
        return (
            <View>
                <Text style={composedStyle}>
                    {count}
                </Text>
            </View>
        );
    }
};
const baseStyle =  {
    fontSize: 30,
};
const negationStyle = {
    color: 'red',
    fontWeight: 'bold'
};
const positiveStyle = {
    color: 'green'
};
