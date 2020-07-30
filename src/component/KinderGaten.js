
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
import Option from "./Option"



// import BottomNav from "./BottomNav";
import GridKinder from "./GridKinder";
export default function KinderGaten({ navigation }) {
    const Tab = createMaterialBottomTabNavigator();
   
    function NAV() {
        navigation.navigate('UngDung');
    }
    return (
        <View style={styles.container}>
            <View style={styles.fixToText}>
                <Button title="Back" onPress={() => NAV()} />
                <Option />
            </View>
            <View style={styles.btn} >
                <TouchableOpacity>
                    <Text>Kinder Garten</Text>
                </TouchableOpacity>

            </View>

            <GridKinder />
            {/* <BottomNav/> */}

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
