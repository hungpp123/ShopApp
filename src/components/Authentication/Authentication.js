import React, { Component } from 'react';
import { View, Text, TouchableOpacity,
        Image, StyleSheet, TextInput,
       } from 'react-native';

import icBack from "../../appIcon/back_white.png";
import icLogo from "../../appIcon/ic_logo.png";

export default class Authentication extends Component {
  constructor(props){
    super(props);
    this.state={isSignIn: true }
  }

  signIn(){
    this.setState({isSignIn:true});
  }

  signUp(){
    this.setState({isSignIn:false});
  }

  goBackToMain(){
    const { navigator } = this.props;
    navigator.pop();
  }
  render() {
    const { row1, iconStyle, titleStyle, container,
        controlStyle, signInStyle, signUpStyle, activeStyle,
        inactiveStyle, inputStyle, bigButton, buttonText
    } = styles;

    const signInJSX=(
      <View>
      <TextInput style={inputStyle} placeholder="Enter your email"/>
      <TextInput style={inputStyle} placeholder="Enter your password"/>
        <TouchableOpacity style={bigButton}>
          <Text style={buttonText}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    );

    const signUpJSX = (
      <View>
      <TextInput style={inputStyle} placeholder="Enter your name"/>
      <TextInput style={inputStyle} placeholder="Enter your email"/>
      <TextInput style={inputStyle} placeholder="Enter your password"/>
      <TextInput style={inputStyle} placeholder="Re-enter your password"/>
        <TouchableOpacity style={bigButton}>
          <Text style={buttonText}>SIGN UP NOW</Text>
        </TouchableOpacity>
      </View>
    );
    const {isSignIn} = this.state;
    const mainJSX = isSignIn ? signInJSX : signUpJSX;
    return (
      <View style={container}>
        <View style={row1}>
          <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
            <Image source={icBack} style={iconStyle}/>
          </TouchableOpacity>
          <Text style={titleStyle}>Wearing a Dress</Text>
          <Image source={icLogo} style={iconStyle}/>
        </View>
        <View>
          {mainJSX}
          <View style={controlStyle}>
            <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
              <Text style={isSignIn?activeStyle:inactiveStyle}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
              <Text style={isSignIn?inactiveStyle:activeStyle}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'rgba(31, 145, 196, 0.93)',
    padding:20,
    justifyContent:'space-between',
  },
  row1: {flexDirection:"row",
  justifyContent:"space-between",
  alignItems:'center'
  },
  titleStyle: {color:"#FFF", fontFamily:'Avenir',fontSize:30},
  iconStyle: {width:30,height:30},
  controlStyle:{
    flexDirection:"row",
    alignSelf: "stretch"
  },
  inactiveStyle:{
    color:"#bedce3"
  },
  activeStyle:{
    color:"rgba(31, 145, 196, 0.93)"
  },
  signInStyle:{
    backgroundColor:"#FFF",
    alignItems:"center",
    paddingVertical:15,
    flex:1,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    marginRight:1
  },
  signUpStyle:{
    backgroundColor:"#FFF",
    alignItems:"center",
    paddingVertical:15,
    flex:1,
    marginLeft:1,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
  },
  inputStyle:{
    height:50,
    backgroundColor:"#FFF",
    marginBottom:10,
    borderRadius:20,
    paddingLeft:30
  },
  bigButton:{
    height:50,
    borderRadius:20,
    borderWidth:1,
    borderColor:"#FFF",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10
  },
  buttonText:{
    fontFamily:"Avenir",
    color:"#FFF",
    fontWeight:'400'
  }
});
