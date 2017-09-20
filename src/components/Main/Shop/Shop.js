import React, {Component} from "react";
import {View, Text, Image, StyleSheet } from "react-native";
import TabNavigator from 'react-native-tab-navigator';


import Home from "./Home/Home.js";
import Contact from "./Contact/Contact.js";
import Cart from "./Cart/Cart.js";
import Search from "./Search/Search.js";
import Header from "./Header.js";

import homeIconS from "../../../appIcon/home.png";
import homeIcon from "../../../appIcon/home0.png";
import cartIconS from "../../../appIcon/cart.png";
import cartIcon from "../../../appIcon/cart0.png";
import searchIconS from "../../../appIcon/search.png";
import searchIcon from "../../../appIcon/search0.png";
import contactIconS from "../../../appIcon/contact.png";
import contactIcon from "../../../appIcon/contact0.png";

export default class Shop extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedTab:'home'
    };
  }
  openMenu(){
    const { open } = this.props;
    open();
  }
  render(){
    const {iconStyle} = styles;
    return(
      <View style={{flex:1}}>
        <Header onOpen={this.openMenu.bind(this)}/>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            onPress={() => this.setState({ selectedTab: 'home' })}
            renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
            selectedTitleStyle={{color:"rgba(31, 145, 196, 0.93)"}}
          >
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'cart'}
            title="Cart"
            onPress={() => this.setState({ selectedTab: 'cart' })}
            renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
            badgeText="1"
            selectedTitleStyle={{color:"rgba(31, 145, 196, 0.93)"}}
          >
            <Cart />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="Search"
            onPress={() => this.setState({ selectedTab: 'search' })}
            renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
            selectedTitleStyle={{color:"rgba(31, 145, 196, 0.93)"}}
          >
            <Search />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'contact'}
            title="Contact"
            onPress={() => this.setState({ selectedTab: 'contact' })}
            renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
            selectedTitleStyle={{color:"rgba(31, 145, 196, 0.93)"}}
          >
            <Contact />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {width:20, height: 20}
});