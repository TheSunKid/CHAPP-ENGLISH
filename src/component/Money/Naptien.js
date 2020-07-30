
import React, { useState } from "react";
import 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {
    StyleSheet,
    View,
    Button,
    Image,
    Text
} from 'react-native';
import Option from "../Option"
import { TextInput } from "react-native-paper";
export default function Naptien({ navigation }) {
    const [MoneyIn, onChangeMoneyIn] = useState();

    function NAV_back() {
        navigation.navigate('UngDung');
    }
    return (
        <View style={styles.container}>
            <View style={styles.fixToText}>
                <Button title="Back" onPress={() => NAV_back()} />
                <Option /></View>
            <View style={styles.fixToText}>
                <Text>Số dư tài khoản</Text>
                <Text>12.000.0000 VNĐ</Text>
            </View>


            <View style={styles.back} >


                <View style={styles.front} >
                    <Text>Nhập số tiền muốn nạp</Text>
                    <TextInput onChangeText={text => onChangeMoneyIn(text)}
                        value={MoneyIn} 
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor:'#ffffff' }}/>
                    <Button title="Tiếp tục" />

                </View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
         backgroundColor:'#ffffff'

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
    back:{
        backgroundColor:'#d4d9d7',
        maxHeight:500
    },

    front:{
        backgroundColor:'#ffffff',
        maxHeight:300
    }
})
