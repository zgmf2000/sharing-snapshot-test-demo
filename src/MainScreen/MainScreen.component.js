/**
 * Sample React Native MainScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from '../Component/MainButton/Button';

class MainScreen extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{ marginTop: 25 }}>
            <View style={{alignItems: 'center'}}>
              <Text accessibilityLabel={'counter'}>{'Hello'}</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row'
              }}
            >
              <Button title={'Tambah'} />
              <Button title={'Kurang'} />
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  },
});

export default MainScreen;
