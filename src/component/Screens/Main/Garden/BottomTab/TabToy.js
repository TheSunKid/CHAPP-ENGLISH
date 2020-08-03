
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
export default function TabToy({ navigation }) {

    const background = require('../../../../../../assests/gardenkinder/bg.png')
    const Tab = createMaterialBottomTabNavigator();
    return (
        <View style={styles.container}>
            <ImageBackground
            source={background} 
            style={styles.image}
            >
            
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
      },
      image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent:'center',
        flexDirection:'column'
      },
})
