import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  onPress = () => {
    this.setState({count: this.state.count+1});
  }

  render() {
    const { count } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.countField}>{count}</Text>
        <TouchableOpacity style={styles.botton} onPress={this.onPress}>
          <Text style={styles.buttonText}>INCREMENT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countField: {
    color: 'red',
    padding: 10,
    fontSize: 30
  },
  botton: {
    backgroundColor: 'grey',
    margin: 10,
    padding: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16
  }
});
