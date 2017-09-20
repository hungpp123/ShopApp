import React, {Component} from "react";
import {ScrollView, Text, } from "react-native";

import Collection from "./Collection.js";
import Category from "./Category";
import TopProduct from "./TopProduct.js";

export default class Home extends Component{
  render(){
    return(
      <ScrollView style={{flex:1, backgroundColor:'rgb(194, 216, 233)'}}>
        <Collection />
        <Category navigator={this.props.navigator}/>
        <TopProduct navigator={this.props.navigator}/>
      </ScrollView>
    );
  }
}
