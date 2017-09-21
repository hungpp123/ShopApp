import React, {Component} from "react";
import {ScrollView, Text, } from "react-native";

import Collection from "./Collection.js";
import Category from "./Category";
import TopProduct from "./TopProduct.js";

export default class Home extends Component{
  render(){
    const {types} = this.props;
    return(
      <ScrollView style={{flex:1, backgroundColor:'rgb(194, 216, 233)'}}>
        <Collection />
        <Category navigator={this.props.navigator} types={types}/>
        <TopProduct navigator={this.props.navigator}/>
      </ScrollView>
    );
  }
}
