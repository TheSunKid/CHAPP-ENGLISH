
import React, { useState } from "react";
import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {
    StyleSheet,
    View,
    Button,
    ImageBackground,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import BottomBar from '../BottomBar'
export default function TabHome({ navigation }) {

    const background = require('../../../../../../assests/gardenkinder/bg.png')

    const clickGoToScreen = (screenName) => {
      if(screenName) navigation.navigate(screenName);
    }
    return (
        <View style={styles.container}>
            <ImageBackground
            source={background} 
            style={styles.image}
            >
            
            <BottomBar 
              goToScreen={clickGoToScreen}
            />
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        paddingBottom:0
      },
      image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent:'center',
        flexDirection:'column'
      },
})
