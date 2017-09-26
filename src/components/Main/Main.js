import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from "react-native-drawer";
import Menu from "./Menu.js";
import Shop from "./Shop/Shop.js";
import checkLogin from "../../api/checkLogin.js";
import getToken from "../../api/getToken.js";
import global from "../global.js";
export default class Main extends Component {

  componentDidMount(){
    getToken()
    .then(token => checkLogin(token))
    .then(res => global.onSignIn(res.user))
    .catch(err => console.log("CHECK LOGIN:",err));
  }
  closeControlPanel = () => {
    this.drawer.close()
  };
  openControlPanel = () => {
    this.drawer.open()
  };


  render() {
    const { navigator } = this.props;
    return (
      <Drawer
        ref={(ref) => {this.drawer = ref;}}
        content={<Menu navigator={navigator}/>}
        openDrawerOffset={0.4}
        tapToClose={true}
      >
        <Shop open={this.openControlPanel.bind(this)}/>
      </Drawer>
    );
  }
}
