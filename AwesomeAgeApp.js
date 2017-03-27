import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';



export default class AwesomeAgeApp extends Component{

constructor(props) {
    super(props);
    this.state = {age: ''};
  }
render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading} >
        Age App!!
        </Text>
        <Text style={styles.ageLabel}>
            Enter Your Age : 
        </Text>
        <TextInput 
            style={styles.ageInput}
            returnKeyType='go'
            onSubmitEditing={this._handleTextChange}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container : {
        backgroundColor : '#F5FCFF',
        paddingTop : 40,
        padding : 10,
        alignItems : 'center',
        flex :1,
    },
    heading : {
        fontSize : 24,
        textAlign : 'center',
        margin : 10,
        color : '#0000CC',
    },
    ageInput : {
        height : 50,
        marginTop : 10,
        padding : 4,
        fontSize : 18,
        borderWidth : 1,
        borderColor : '#0000CC',
        borderRadius :0,
        color : '#0000CC',
    },
    ageLabel : {
        fontSize : 16,
        margin:10,
        marginBottom:20,
    },
    ageResult : {
        fontSize : 20,
        padding : 4,
        margin:10,
        marginTop : 20,
    }
})

AppRegistry.registerComponent('ReactProject', () => AwesomeAgeApp);