
import React, { useState } from "react";
import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {
    StyleSheet,
    View,
    Dimensions, ImageBackground
} from 'react-native';
import BottomBar from './BottomBar'

export default function KinderGaten({ navigation }) {

    const background = require('./../../../../../assests/gardenkinder/bg.png')
    const background_top = require('./../../../../../assests/gardenkinder/bg_top.png')
    const background_bottom = require('./../../../../../assests/gardenkinder/bg_bottom.png')
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={background}
                style={styles.image}
            >
            <Text>Garden</Text>
         
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        flex : 1,
        resizeMode:'contain',
       
    },
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'space-between',
      },
})
