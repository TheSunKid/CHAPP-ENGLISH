
import React, { useState } from "react";
import 'react-native-gesture-handler';

import {
    StyleSheet,
    View,
    Button,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import Option from "./Option"
export default function Course({ navigation }) {

    function NAV_back() {
        navigation.navigate('UngDung');
    }
    return (
        <View style={styles.container}>
            <View style={styles.fixToText}>
                <Button title="Back" onPress={() => NAV_back()} />
                <Option /></View>
            <View style={styles.btn} >
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("CourseMainMenu")
                }} >
                  <Text>For Course</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("ForProduct")
                }} >
                <Text>For Product</Text>
                </TouchableOpacity>
            </View >
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',

    }, fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    img: {
        width: 200,
        height: 200,
        margin: 20
    },
    btn: {
        alignSelf: "center"
    }

})
