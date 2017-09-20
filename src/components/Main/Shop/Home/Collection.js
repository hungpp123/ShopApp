import React, {Component} from "react";
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import bannerImage from "../../../../temp/banner.jpg";

const {width, height} = Dimensions.get("window");
export default class Collection extends Component{

  render(){
    const {wrapper, textStyle, imageStyle} = styles;
    return(
      <View style={wrapper}>
        <View style={{height: 50, justifyContent:"center"}}>
          <Text style={textStyle}>SPRING COLLECTION</Text>
        </View>
        <TouchableOpacity style={{flex:4, justifyContent:"flex-end"}}>
          <Image source={bannerImage} style={imageStyle}/>
        </TouchableOpacity>
      </View>
    );
  }
}
//933*465
const imageWidth = width -40;
const imageHeight = (imageWidth/933)*465;
const styles = StyleSheet.create({
  wrapper:{
    width:width -20,
    backgroundColor:"#FFF",
    margin:10,
    shadowColor: "rgb(20, 27, 36)",
    shadowOffset:{width:0, height:3},
    shadowOpacity: 0.2,
    padding:10,
    paddingTop:0
  },
  textStyle:{
    fontSize: 20,
    color: "rgb(216, 219, 233)"
  },
  imageStyle:{
    height:imageHeight,
    width:imageWidth,

  }
});
