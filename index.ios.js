import React, { Component } from 'react';
import {
    Alert,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class Project extends Component {
  _onPress() {
    Alert.alert('Right answer is 30, Hope you answered right')
  }
  render() {
sum = {
  results: [
         {
            id: 0,
            sum: '10',
         },
         {
            id: 1,
            sum: '40',
         },
         {
            id: 2,
            sum: '444',
         },
         {
            id: 3,
            sum: '30',
         }
      ]
}
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Simple quiz
        </Text>
        <Text style={styles.instructions}>
         Guess to total of two numbers
        </Text>
        <Text>
         Sum of 10+20?
        </Text>
        {
               sum.results.map((item, index) => (
                 
                               <TouchableOpacity style = {styles.button}
                                   key={item.id}
                                   onPress={this._onPress}
                                >
                                 <Text style={styles.text}>
                                   {item.sum}
                                 </Text>
                              </TouchableOpacity>
                  
                 
               ))
            }
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
      padding: 10,
      marginTop: 70,
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   },
  button: {
    marginTop:30,
    padding:20,
    backgroundColor: '#d9f9b1',
      alignItems: 'center',
  }
});

AppRegistry.registerComponent('Project', () => Project);