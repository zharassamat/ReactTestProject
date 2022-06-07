import React, {Component} from 'react';
import {Dimensions,StyleSheet} from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  parentContainer: {
    height: deviceHeight,
    justifyContent: 'center',
    marginTop: 50,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 32,
  },
  container: {
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#fff',
    flex: 1 / 2,
  },
});
export default styles;
