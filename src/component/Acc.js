
import React, { useState } from "react";
import 'react-native-gesture-handler';

import {
    StyleSheet,
    View,
    Button,
    Image,
    Text,
    ScrollView
} from 'react-native';
import Option from "./Option"
import TableAcc from "./TableAcc";
export default function Acc({ navigation }) {
    var yourPicture = require('../../assests/icon.png');

    function NAV_back() {
        navigation.navigate('UngDung');
    }
    return (
        <ScrollView style={styles.container0}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.fixToText}>
                <Button title="Back" onPress={() => NAV_back()} />
                <Option /></View>

            <View style={styles.container1}>
                <Image source={yourPicture} />
                <Text>Quỳnh Anh</Text>
                <View style={styles.fixToText}>
                    <Text>Id</Text>
                    <Image
                        source={{ uri: 'https://cdn.onlinewebfonts.com/svg/img_125913.png' }}
                        style={{ width: 25, height: 25 }}
                    />
                </View>


            </View>
            <TableAcc />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container0: {
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
