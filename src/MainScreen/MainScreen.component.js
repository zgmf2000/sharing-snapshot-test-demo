/**
 * Sample React Native MainScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Button from '../Component/MainButton/Button';

const MainScreen = () => {
  const [count, setCount] = useState(0);
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{ marginTop: 25 }}>
            <View style={{alignItems: 'center'}}>
              <Text accessibilityLabel={'counter'}>{count}</Text>
            </View>
            <View
              style={style.controllerViewStyle}
            >
              <Button
                  title={'Tambah'}
              />
              <Button
                  title={'Kurang'}
              />
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
};

const style = StyleSheet.create({
  controllerViewStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
});

export default MainScreen;
