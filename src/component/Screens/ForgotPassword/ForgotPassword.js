
import React, { useState } from "react";

import {

    StyleSheet,

    View,
    Text,
    Image,
    Switch,
    Button,
    TextInput
} from 'react-native';
import Option from "../../Option"
const ForgotPassword = ({ navigation }) => {
    const [SDT, onChangeSDT] = useState('');
    const [Password, onChangePass] = useState('');
    const [Password2, onChangePass2] = useState('');
    const [OTP, onChangeOTP] = useState('');
    function NAV() {
        navigation.navigate('FirstMenu');
    }
    function NAV_Next() {
        navigation.navigate('DangNhap');
    }
    var yourPicture = require('../../../assests/icon.png');
    return (
        <View style={styles.container}>
            <View style={styles.fixToText}>

                <Button title="Back" onPress={() => NAV()} />
                <Option />


            </View>
            <View style={styles.img} >
                <Image source={yourPicture} />
            </View>

            <TextInput
                placeholder="Số điện thoại"
                onChangeText={text => onChangeSDT(text)}
                value={SDT}
            />
            <TextInput
                placeholder="Mật khẩu mới"
                onChangeText={text => onChangePass(text)}
                placeholderTextColor="#9a73ef"
                returnKeyType='go'
                secureTextEntry={true}
                value={Password}
            />
            <TextInput
                placeholder="Nhập lại mật khẩu mới"
                onChangeText={text => onChangePass2(text)}
                placeholderTextColor="#9a73ef"
                returnKeyType='go'
                secureTextEntry={true}
                value={Password2}
            />
            <TextInput
                placeholder="OTP"
                onChangeText={text => onChangeOTP(text)}
                placeholderTextColor="#9a73ef"
                returnKeyType='go'
                secureTextEntry={true}
                value={OTP}
            />
            <Button title="Đổi mật khẩu" onPress={() => NAV_Next()} />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    img: {
        alignItems: "center"
    }

})
export default ForgotPassword;