
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactProject extends Component {
  render() {
    return (
      <View >
        <Text >
        test xxx
        </Text>
        <Text >
          kong 123 zzz
        </Text>
       
      </View>
    );
  }
}



AppRegistry.registerComponent('ReactProject', () => ReactProject);
