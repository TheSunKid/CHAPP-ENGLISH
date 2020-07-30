
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
import Option from "./Option"
import { TouchableOpacity } from "react-native-gesture-handler";
const DangNhap = ({ navigation }) => {
    const [SDT, onChangeSDT] = useState('Số điện thoại');
    const [Password, onChangePass] = useState('Password');
    function NAV() {
        navigation.navigate('FirstMenu');
    }
    function NAV_Next() {
        navigation.navigate('UngDung');
    }
    var yourPicture = require('../../assests/icon.png');
    return (
        <View style={styles.container}>
            <View style={styles.fixToText}>

                <Button title="Back" onPress={() => NAV()} />
                <Option />


            </View>
<View  style={styles.img} >
<Image source={yourPicture} />
</View>
            
            <TextInput

                onChangeText={text => onChangeSDT(text)}
                value={SDT}
            />
            <TextInput
                onChangeText={text => onChangePass(text)}
                placeholderTextColor="#9a73ef"
                returnKeyType='go'
                secureTextEntry={true}
                value={Password}
            />
            <Button title="Đăng Nhập" onPress={()=>NAV_Next()}/>
            <TouchableOpacity style={styles.forgot}
            onPress={()=>{
                navigation.navigate('ForgotPassword')
            }}>
            <Text>
                Quên mật khẩu?
            </Text>
        </TouchableOpacity>
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
    img:{
        alignItems:"center"
    },
    forgot:{
        alignSelf:'flex-end',
        padding:20
    }

})
export default DangNhap;