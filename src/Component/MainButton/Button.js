//@flow
import {Button} from 'react-native';
import React, {Component} from 'react';

type Props = {
    color?: String,
    title: String,
    additionalStyle?: Object,
    onClick?: Function,
}

export default class Buttons extends Component<Props> {
    render() {
        const {color, title, additionalStyle, onClick} = this.props;
        return (
            <Button
                color={color}
                title={title}
                style={additionalStyle}
                onPress={onClick}/>
        );
    }
};
