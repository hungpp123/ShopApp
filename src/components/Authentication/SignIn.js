import React, {Component} from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet} from "react-native";

export default class SignIn extends Component{
  render(){
    const {  inputStyle, bigButton, buttonText
          } = styles;
    return(
      <View>
      <TextInput style={inputStyle} underlineColorAndroid="transparent" placeholder="Enter your email"/>
      <TextInput style={inputStyle} underlineColorAndroid="transparent" placeholder="Enter your password"/>
        <TouchableOpacity style={bigButton}>
          <Text style={buttonText}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
