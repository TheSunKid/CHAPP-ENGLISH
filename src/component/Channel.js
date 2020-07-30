
import React, { useState } from "react";
import 'react-native-gesture-handler';

import {
    StyleSheet,
    View,
    Button,
    Image,
    Text
} from 'react-native';
import Option from "./Option"
export default function Channel({ navigation }) {
    var yourPicture = require('../../assests/icon.png');

    function NAV_back() {
        navigation.navigate('UngDung');
    }
    return (
        <View style={styles.container}>
     <View style={styles.fixToText}>
            <Button title="Back" onPress={() => NAV_back()} />
            <Option /></View>

            <View style={styles.container1}>
                <Text>Hello Channel</Text>


            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    container1: {
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

})
