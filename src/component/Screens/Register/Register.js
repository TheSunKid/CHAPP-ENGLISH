import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
const Register = (props) => {
  const [phoneNumber, onChangePhoneNumber] = useState(0);
  const [password, onChangePassword] = useState("");

  const button_back = require("../../../../assests/button_back.png");
  const small_logo = require("../../../../assests/small_logo.png");


  const onPressButtonBack = () => {
    props.navigation.navigate('StartScreen')
  }

  const onPressSignUp = () => {
    props.navigation.navigate('RegisterOTP')
  }
  return (
 <View style={styles.container}>    
    <View style={styles.topImage} >
      <TouchableOpacity style={{paddingLeft:25}} onPress={onPressButtonBack}>
        <Image source={button_back} style={{width:35,height:25,resizeMode: 'stretch',}}></Image>
      </TouchableOpacity>
      <Image source={small_logo} style={{width:116,height:35,marginLeft:10,resizeMode: 'stretch',}}></Image>
    </View>
    
    <View style={styles.main_view}>
      <Text style={{color:'#329D40', fontSize:16,textAlign:'center',marginBottom:20}}>Đăng Ký</Text>
      {/* <View style={{borderRadius:10,overflow:'hidden',height:40,padidngTop:0}}> */}
      <TextInput
       autoCorrect={false} 
       placeholderTextColor='#329D9C' 
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder={'Họ Tên Phụ Huynh'} 
       style={styles.text_input} 
       autoFocus={true}
      />    
      <TextInput
       autoCorrect={false} 
       placeholderTextColor='#329D9C' 
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder={'Số điện thoại'} 
       style={styles.text_input} 
       autoFocus={true}
      />    
      <TextInput
       autoCorrect={false} 
       placeholderTextColor='#329D9C' 
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder={'Email'} 
       style={styles.text_input} 
       autoFocus={true}
      />    
      <TextInput
       autoCorrect={false} 
       placeholderTextColor='#329D9C' 
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder={'Mật Khẩu'} 
       style={styles.text_input} 
       autoFocus={true}
      />    
      <TextInput
       autoCorrect={false} 
       placeholderTextColor='#329D9C' 
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder={'Nhập lại mật khẩu'} 
       style={styles.text_input} 
       autoFocus={true}
      />    
      <TextInput
       autoCorrect={false} 
       placeholderTextColor='#329D9C' 
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder={'Số điện thoại giới thiệu'} 
       style={styles.text_input} 
       autoFocus={true}
      />  
      <TextInput autoCorrect={false} placeholderTextColor='#329D9C' underlineColorAndroid='rgba(0,0,0,0)' placeholder={'Mật khẩu'} style={styles.text_input} />
    </View>
    <View style={styles.bottom_view}>
        <TouchableOpacity style={{borderRadius:8,width:300,height:40,backgroundColor:'#329D40',alignItems:'center',justifyContent:'center'}} onPress={onPressSignUp}>
          <Text style={{color:'#ffffff'}}>Đăng Ký</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  topImage:{
    flexDirection:'row'
  },
  text_input:{
   height:40,
   color:'#329D9C',
   backgroundColor:'transparent',
   marginBottom:10,
   marginTop:10

  },  
  main_view:{
    paddingBottom:100,
    paddingLeft:20,
    paddingRight:20
  },
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor:'#ffffff',
    justifyContent:'space-between'
  },
  loginBlock: {
      paddingBottom:50,
      alignItems:'center'
  },
  bottom_view:{
    paddingBottom:50,
    alignItems:'center'
  }
});
export default Register;
