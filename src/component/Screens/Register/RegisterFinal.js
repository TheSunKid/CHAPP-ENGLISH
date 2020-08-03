import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RNPickerSelect,{defaultStyles} from 'react-native-picker-select';


const RegisterFinal = (props) => {
  const [phoneNumber, onChangePhoneNumber] = useState(0);
  const [password, onChangePassword] = useState("");
  const [branchForm, handleBranchForm] = useState(false)
  const button_back = require("../../../../assests/button_back.png");
  const small_logo = require("../../../../assests/small_logo.png");

  // Demo Value
  const student_type = [
    {
      label: 'Học Viên Cơ Sở',
      value: '1',
    },
    {
      label: 'Học Viên Tự Do',
      value: '2',
    },
  ];
  const onPressButtonBack = () => {
    props.navigation.navigate('RegisterOTP')
  }

  const onPressSignUp = () => {
    props.navigation.navigate('LoginScreen')
  }
  
  const handleStundentTypePicker =  (value) => {
      if(value == 1){
        handleBranchForm(true)
      }else{
        handleBranchForm(false)
      }
      
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
       placeholderTextColor='#329D9C' 
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder={'Họ Tên Của Bé'} 
       style={styles.text_input} 
      />    
      <TextInput
       placeholderTextColor='#329D9C' 
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder={'Ngày Sinh Của Bé'} 
       style={styles.text_input} 
      />  
      <RNPickerSelect
              placeholder={{
                label: 'Chọn loại học viên',
                value: null,
                color: '#329D9C',
              }}
              items={student_type}
              onValueChange={handleStundentTypePicker}
              style={{...styles,
                placeholder: {
                  color: '#329D9C',
                  fontSize: 16,
                },
              }}
        />
      {branchForm && 
      <View>
      <RNPickerSelect
              placeholder={{
                label: 'Cơ sở học',
                value: null,
                color: '#329D9C',
              }}
              items={student_type}
              onValueChange={handleStundentTypePicker}
              style={{...styles,
                placeholder: {
                  color: '#329D9C',
                  fontSize: 16,
                },
              }}
        /> 
        <RNPickerSelect
              placeholder={{
                label: 'Lớp học',
                value: null,
                color: '#329D9C',
              }}
              items={student_type}
              onValueChange={handleStundentTypePicker}
              style={{...styles,
                placeholder: {
                  color: '#329D9C',
                  fontSize: 16,
                },
              }}
        />
         <RNPickerSelect
              placeholder={{
                label: 'Địa chỉ',
                value: null,
                color: '#329D9C',
              }}
              items={student_type}
              onValueChange={handleStundentTypePicker}
              style={{...styles,
                placeholder: {
                  color: '#329D9C',
                  fontSize: 16,
                },
              }}
        />
        </View>
        }
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
   marginTop:10,
   borderRadius:10,
   borderWidth:2,
   borderColor:'#CFF4D2',
   paddingLeft:15
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
  },
  inputIOS: {
    height:40,
    color:'#329D9C',
    backgroundColor:'transparent',
    marginBottom:10,
    marginTop:10,
    borderRadius:10,
    borderWidth:2,
    borderColor:'#CFF4D2',
    paddingLeft:15
  },
});
export default RegisterFinal;
