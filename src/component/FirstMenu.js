
import React, { useState } from "react";
import 'react-native-gesture-handler';

import {
    StyleSheet,
    View,
    Button,
    Image
} from 'react-native';
import Option from "./Option"
export default function FirstMenu({ navigation }) {
    var yourPicture = require('../../assests/icon.png');
    function SignIn() {
        navigation.navigate('DangNhap');
    }
    function SignUp() {
        navigation.navigate('DangKy_1');
    }
    return (
        <View style={styles.container}>

            <Option />
            <View style={styles.container1}>
                <Image source={yourPicture} />

                <View style={styles.btn} >
                    <Button style={styles.btn_SignIn} onPress={() => SignIn()} title="Sign In" />
                    <Button style={styles.btn_SignIn} onPress={() => SignUp()} title="Sign Up" />
                </View>


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
    btn_SignIn: {
        width: 60
    },
    btn: {
        flexDirection: 'column',
        width: 200

    },

})
