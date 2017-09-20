import React, {Component} from "react";
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

import littleIcon from '../../../../temp/little.jpg';
import maxiIcon from '../../../../temp/maxi.jpg';
import partyIcon from '../../../../temp/party.jpg';


const {width, height} = Dimensions.get("window");
export default class Category extends Component{
  gotoListProduct(){
    const {navigator} = this.props;
    navigator.push({name:'LIST_PRODUCT'});
  }
  render(){
    const {wrapper, textStyle, imageStyle, cateTitle} = styles;
    return(
      <View style={wrapper}>
        <View style={{ justifyContent:"center", height:50}}>
          <Text style={textStyle}>LIST OF CATEGORY</Text>
        </View>
        <View style={{flex:4, justifyContent:"flex-end"}}>
          <Swiper width={imageWidth} height={imageHeight}>
            <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
              <Image source={littleIcon} style={imageStyle}>
                <Text style={cateTitle}>Maxi Dress</Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
              <Image source={maxiIcon} style={imageStyle}>
                <Text style={cateTitle}>Maxi Dress</Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
              <Image source={partyIcon} style={imageStyle}>
                <Text style={cateTitle}>Maxi Dress</Text>
              </Image>
            </TouchableOpacity>
          </Swiper>
        </View>
      </View>
    );
  }
}
//933*465
const imageWidth = width -40;
const imageHeight = (imageWidth/2);
const styles = StyleSheet.create({
  wrapper:{
    width:width-20,
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
    justifyContent:"center",
    alignItems:"center"
  },
  cateTitle:{
    fontSize:15,
    fontFamily:"Avenir",
    color:"#a47e7e",
  }

});
