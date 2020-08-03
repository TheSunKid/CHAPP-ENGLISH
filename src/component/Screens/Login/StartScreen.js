import React, { useState } from "react";

import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  Switch,
  Dimensions,
  Button,
  TextInput,
} from "react-native";
import Option from "../../Option";
import { TouchableOpacity } from "react-native-gesture-handler";
const Login = (props) => {
  const [SDT, onChangeSDT] = useState("Số điện thoại");
  const [Password, onChangePass] = useState("Password");
  // function NAV() {
  //     navigation.navigate('FirstMenu');
  // }
  // function NAV_Next() {
  //     navigation.navigate('UngDung');
  // }
  const topLogin = require("../../../../assests/LoginTop.png");
  const bottomLogin = require("../../../../assests/LoginBottom.png");
  const mainLogo = require("../../../../assests/main_logo.png");

  const onPressSignIn = () => {
    props.navigation.navigate('LoginScreen')
  }

  const onPressSignUp = () => {
    props.navigation.navigate('Register')
}
  return (
 <View style={styles.container}>    
    <View style={styles.topImage} >
        <Image source={topLogin} style={{width:Dimensions.get('screen').width,height:200,resizeMode: 'stretch',}}></Image>
    </View>
    <View style={styles.loginBlock} >
        <View style={styles.logo} >
            <Image source={mainLogo} style={{width:200,height:192}}></Image>
        </View>
        <TouchableOpacity
            style={styles.button_signIn}
            onPress={onPressSignIn}
        >
            <Text style={{ color: '#ffffff',fontSize:16}}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button_signUp}
            onPress={onPressSignUp}
        >
            <Text style={{color:'#329D40',fontSize:16}}>Sign Up</Text>
        </TouchableOpacity>
      </View> 
      <View style={styles.bottomImages}>
         <Image source={bottomLogin} style={{width:Dimensions.get('screen').width,height:200,resizeMode: 'stretch',}}></Image>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor:'#E6FFEC',
    justifyContent:'space-between'
  },
  logo:{
    alignItems:'center'
  },
  image: {
    flex: 1,
    resizeMode:'contain',
    width: Dimensions.get('screen').width,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  
  img: {
    alignItems: "center",
  },
  forgot: {
    alignSelf: "flex-end",
    padding: 20,
  },
  loginBlock: {
      paddingBottom:100,
      alignItems:'center'
  },
  button_signIn:{
    width:215,
    height:51,
    borderRadius:10,
    borderWidth:3,
    borderColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00CC6A',
    marginBottom:15,
    marginTop:20,

  },
  button_signUp:{
      width:215,
      height:51,
      borderRadius:10,
      borderWidth:3,
      borderColor:'#329D40',
      textAlign:'center',
      justifyContent:'center',
      alignItems:'center',
  }
});
export default Login;
