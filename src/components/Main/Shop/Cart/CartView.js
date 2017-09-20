import React, {Component} from "react";
import {View, Text, TouchableOpacity } from "react-native";

export default class CartView extends Component{
  gotoDetail(){
    const {navigator} = this.props;
    navigator.push({name:'PRODUCT_DETAIL'});
  }
  render(){
    return(
      <View style={{flex:1, backgroundColor:'rgb(232, 184, 211)'}}>
        <Text>Cart Component</Text>
          <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
            <Text>Go to Detail</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
