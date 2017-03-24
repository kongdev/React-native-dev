
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
        test
        </Text>
        <Text >
          kong123
        </Text>
       
      </View>
    );
  }
}



AppRegistry.registerComponent('ReactProject', () => ReactProject);
