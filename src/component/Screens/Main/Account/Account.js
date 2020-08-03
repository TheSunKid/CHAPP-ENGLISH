
import React, { useState } from "react";
import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {
    StyleSheet,
    View,
    Button,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';



// import BottomNav from "./BottomNav";
// import GridKinder from "./GridKinder";
export default function Account({ navigation }) {
    const Tab = createMaterialBottomTabNavigator();
    return (
        <View style={styles.container}>
            <View style={styles.fixToText}>
            
                {/* <Option /> */}
            </View>
            <View style={styles.btn} >
                <TouchableOpacity>
                    <Text>Kinder Garten</Text>
                </TouchableOpacity>
            </View>
            {/* <GridKinder /> */}
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    btn_SignIn: {
        margin: 50
    },
    btn: {
        flexDirection: 'column',


    }, fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

})
