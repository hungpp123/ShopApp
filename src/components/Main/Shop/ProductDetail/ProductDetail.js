import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ProductDetail extends Component {
  goBack(){
    const {navigator} = this.props;
    navigator.pop();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <Text>ProductDetail Component</Text>
          <TouchableOpacity onPress={this.goBack.bind(this)}>
            <Text>Back</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
