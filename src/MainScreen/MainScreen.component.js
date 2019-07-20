/**
 * Sample React Native MainScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState, Component} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Button from '../Component/Button';
import CounterText from '../Component/CounterText';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    setCount = (newValue) => {
        this.setState({
            count: newValue,
        });
    };

    //TODO: Show the depedencies using snapshot
    render() {
        const {count} = this.state;
        return (
            <Fragment>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <View style={{marginTop: 25}}>
                        <View style={{alignItems: 'center'}}>
                            <CounterText count={count}/>
                        </View>
                        <View
                            style={style.controllerViewStyle}
                        >
                            <Button
                                title={'Tambah'}
                                onClick={() => {
                                    this.setCount(count + 1);
                                }}
                            />
                            <Button
                                title={'Kurang'}
                                color={'#ff0000'}
                                onClick={() => {
                                    this.setCount(count - 1);
                                }}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const style = StyleSheet.create({
    controllerViewStyle: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
});

