import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View} from 'react-native';

class Em extends Component {

    render() {
        return (
            <Text style={styles.italic}>
                {this.props.children}
            </Text>
        )
    }

}

class Strong extends Component{
    render () {
        return (
            <Text style={styles.bold}>
                {this.props.children}
            </Text>
        )
    }
}

class H1 extends Component{
    render(){
        return (
            <Text style={styles.heading}>
                {this.props.children}
            </Text>
        )
    }
}
export default class AwesomeAgeApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: ''
        };
        this._handleTextChange = this._handleTextChange.bind(this);
        this._resetAgeInput = this._resetAgeInput.bind(this);
          
    }

    _handleTextChange(event) {
        
        let ageInput = event.nativeEvent.text
        this.setState({age: ageInput});
    }
    
    _resetAgeInput(){
        this.setState({age: ''});
    }

    render() {
        var content = null

        if (this.state.age != '') {
            content = <Text style={styles.ageResult}>Your Age in Dog Years is: {this.state.age * 7}</Text>
        } else {
            content = <Text style={styles.instructions}>Your age in dog years will be displayed here</Text>
        }

        return (
            <View style={styles.container}>
                <H1>
                    <Strong>Age Appx!!</Strong>
                </H1>
                <Text style={styles.subHeading}>
                    <Em>Have Fun finding</Em> 
                    <Text style={styles.italic}>your age</Text>
                    <Text style={styles.bold}>in dog years!</Text>
                </Text>
                <Text style={styles.ageLabel}>
                    Enter Your Age :
                </Text>
                <TextInput
                    style={styles.ageInput}
                    returnKeyType='go'
                    onSubmitEditing={this._handleTextChange}
                    keyboardType='numeric'
                    autoFocus={true}
                    onFocus={this._resetAgeInput}/>
                    {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        paddingTop: 40,
        padding: 10,
        alignItems: 'center',
        flex: 1
    },
    heading: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: '#0000CC'
    },
    ageInput: {
        height: 50,
        width : 120,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#0000CC',
        borderRadius: 0,
        color: '#0000CC'
    },
    ageLabel: {
        fontSize: 16,
        margin: 10,
        marginBottom: 20
    },
    ageResult: {
        fontSize: 20,
        padding: 4,
        margin: 10,
        marginTop: 20
    },
    instructions : {
        fontSize: 14,
        textAlign : 'center',
        color : '#333333',
        marginBottom : 5,
        marginTop : 5,

    },
    subHeading:{
        fontSize : 24,
        textAlign :'center',
        color : '#0000CC',

    },
    bold:{
        fontWeight : 'bold',
        fontSize : 20,
    },
    italic : {
        fontStyle : 'italic',
        fontSize:15,
    }
})

AppRegistry.registerComponent('ReactProject', () => AwesomeAgeApp);