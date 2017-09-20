import React, {Component} from "react";
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import sp1 from "../../../../temp/sp1.jpeg";
import sp2 from "../../../../temp/sp2.jpeg";
import sp3 from "../../../../temp/sp3.jpeg";
import sp4 from "../../../../temp/sp4.jpeg";

export default class TopProduct extends Component{
  gotoDetail(){
    const {navigator} = this.props;
    navigator.push({name:'PRODUCT_DETAIL'});
  }
  render(){
    const {container,titleContainer, title,
       body, productContainer, productImage,
       productName, productPrice
     }= styles;
    return(
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>TOP PRODUCT</Text>
        </View>
        <View style={body}>
          <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
            <Image source={sp1} style={productImage}/>
            <Text style={productName}>PRODUCT NAME</Text>
            <Text style={productPrice}>400$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
            <Image source={sp2} style={productImage}/>
            <Text style={productName}>PRODUCT NAME</Text>
            <Text style={productPrice}>250$</Text>
          </TouchableOpacity>
          <View style={{height:10,width:width}}></View>
          <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
            <Image source={sp3} style={productImage}/>
            <Text style={productName}>PRODUCT NAME</Text>
            <Text style={productPrice}>400$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
            <Image source={sp4} style={productImage}/>
            <Text style={productName}>PRODUCT NAME</Text>
            <Text style={productPrice}>250$</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const {width}= Dimensions.get('window');
const productWidth=(width-60)/2;
const productImageHeight = (productWidth/361)*452;
const styles = StyleSheet.create({
  container: {
    backgroundColor:"#FFF",
    margin:10,
    shadowColor: "#1f3226",
    shadowOffset: {width:0, height:3},
    shadowOpacity: 0.2,
  },
  titleContainer:{
    height:50,
    justifyContent:"center",
    paddingLeft:10,
  },
  title:{
    color: "#b5acb6",
    fontSize:20
  },
  body:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap:"wrap",
    paddingBottom:20,
  },
  productContainer:{
    width: productWidth,
    shadowColor: "#1f3226",
    shadowOffset: {width:0, height:3},
    shadowOpacity: 0.2,
  },
  productImage:{
    width:productWidth,
    height:productImageHeight
  },
  productName:{
    marginVertical:5,
    paddingLeft:10,
    fontFamily:'Avenir',
    color: "#b5acb6",
    fontWeight:'500'
  },
  productPrice:{
    marginBottom:5,
    paddingLeft:10,
    fontFamily:'Avenir',
    color:"#6c267c",
  }
});
