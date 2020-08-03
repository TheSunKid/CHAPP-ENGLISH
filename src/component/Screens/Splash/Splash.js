import { View, Image, StyleSheet,Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import ProgressBarAnimated from 'react-native-progress-bar-animated';


const Splash = ({navigation}) => {

  const [progress, setProgress] = useState(20)
  const [progressWithOnComplete, setProgressWithComplete] = useState(0)
  const [progressCustomized, setProgressCustomized] = useState(0)

  const barWidth = Dimensions.get('screen').width - 100
  useEffect(() => {
    setTimeout(() => {
      setProgress(80)
    },1000)
  },[])
  useEffect(() => {
    setTimeout(() => {
      setProgress(100)
    },2000)
  },[])
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth')
    },2500)
  },[])
  const logo_splash = require('../../../../assests/logo.png');
  return(
    
  <View style={styles.container}>
      <Image style={styles.img} source={logo_splash} />
        <View style={styles.progressBarWrapper} > 
          <ProgressBarAnimated
                width={barWidth}
                height={13}
                value={progress}
                backgroundColor="#00CC6A"
                backgroundColorOnComplete="#00CC6A"          
            />
        </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:50
  },
  img:{
    marginTop:150,
    width:263,
    height:263
  },
  progressBarWrapper:{
    marginTop : 100
  } 
})

export default Splash