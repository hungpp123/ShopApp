import React, {Component} from "react";
import {ScrollView, Text, } from "react-native";

import NavigationExperimental from 'react-native-deprecated-custom-components';

import CartView from './CartView.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';
import ListProduct from '../ListProduct/ListProduct.js'

export default class Cart extends Component{
  render(){
    return(
      <NavigationExperimental.Navigator
        initialRoute={{name:'CART_VIEW'}}
        renderScene={(route, navigator)=>{
          switch(route.name){
            case 'CART_VIEW': return <CartView navigator={navigator}/>;
            default: return <ProductDetail navigator={navigator}/>;
          }
        }}
      />
    );
  }
}
