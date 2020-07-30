import { View, Image, Alert } from "react-native";
import React, { useEffect } from "react";


const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth')
    },2000)
  },[])
  const logo_splash = require('../../../../assests/icon.png');//
  return(
  <View>
       <Image source={logo_splash} />
  </View>
  )
}

export default Splash