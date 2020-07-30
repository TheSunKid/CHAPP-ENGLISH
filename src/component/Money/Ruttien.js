
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
import { RadioButton } from 'react-native-paper';
export default function Ruttien({ navigation }) {
    var Viettin = require('../../../assests/icon.png');
  
    var TPbank = require('../../../assests/icon.png');
    const [MoneyIn, onChangeMoneyIn] = useState();

    const [value, setValue] = useState('first');
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
<View><View style={styles.nganhang}>
    <Text>Rút tiền về tài khoản liên kết</Text>


    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <View>
          <View style={styles.fixToText}>
          <Image source={Viettin} style={styles.img} />
             <Text>Viettinbank</Text>
        <RadioButton value="first" />  
          </View>
          <View style={styles.fixToText} >
          <Image source={TPbank}  style={styles.img} />
             <Text>Tien Phong Bank </Text>
        <RadioButton value="first" />  
          </View>
       
      </View>
      
    </RadioButton.Group>
    </View>
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
    },
    img:{
        width:50,
        height:50
    },
    nganhang:{
        backgroundColor:'#ffffff'
    }
})
