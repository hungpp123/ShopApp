import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import profileIcon from "../../temp/profile.png";

export default class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {isLoggedIn:true}
  }
  gotoAuthentication(){
    const { navigator } = this.props;
    navigator.push({name: 'AUTHENTICATION'});
  }
  gotoChangeInfo(){
    const { navigator } = this.props;
    navigator.push({name: 'CHANGE_INFO'});
  }

  gotoOrderHistory(){
    const { navigator } = this.props;
    navigator.push({name: 'ORDER_HISTORY'});
  }
  render(){
    const {container, profile, btnStyle,
       btnText, btnSignInStyle, btnTextSignIn,
       loginContainer, username
     } = styles;
    const logoutJSX = (
      <View style={{flex:1}}>
        <TouchableOpacity style={btnStyle} onPress={this.gotoAuthentication.bind(this)}>
          <Text style={btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
    const loginJSX=(
      <View style={loginContainer}>
        <Text style={username}>Range Rover</Text>
        <View>
          <TouchableOpacity style={btnSignInStyle} onPress={this.gotoOrderHistory.bind(this)}>
            <Text style={btnTextSignIn}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
            <Text style={btnTextSignIn}>Change Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle}>
            <Text style={btnTextSignIn}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    const mainJSX = this.state.isLoggedIn ? loginJSX : logoutJSX;
    return(
      <View style={container}>
        <Image source={profileIcon} style={profile}/>
        {mainJSX}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"rgba(31, 145, 196, 0.93)",
    borderRightWidth:3,
    borderColor:"#FFF",
    alignItems:"center",
  },
  profile:{
    width:120,
    height:120,
    borderRadius:60,
    marginVertical:30
  },
  btnStyle:{
    height: 60,
    backgroundColor:"#FFF",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    paddingHorizontal:70
  },
  btnText:{
    color:"rgba(31, 145, 196, 0.93)",
    fontFamily:"Avenir",
    fontSize:20
  },
  btnSignInStyle:{
    height: 60,
    backgroundColor:"#FFF",
    borderRadius:5,
    width:200,
    marginBottom:10,
    justifyContent:"center",
    paddingLeft:10
  },
  btnTextSignIn:{
    color:"rgba(31, 145, 196, 0.93)",
    fontSize:15,
  },
  loginContainer:{
    flex:1,justifyContent:'space-between',alignItems:'center'
  },
  username:{
    color:"#FFF", fontFamily:"Avenir", fontSize:20
  }
});
