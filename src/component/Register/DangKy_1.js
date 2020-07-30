
import React, { useState } from "react";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { TouchableOpacity } from "react-native-gesture-handler";
import {

    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    Image,
    ScrollView, SafeAreaView
} from 'react-native';
import Option from "../Option"
import 'react-native-gesture-handler';


const DangKy_1 = ({ navigation }) => {
    var yourPicture = require('../../../assests/icon.png');
    const [tenPH, onChangeTenPH] = useState('Tên phụ huynh');
    const [SDT, onChangeSDT] = useState('Số điện thoại');
    const [Email, onChangeEmail] = useState('Email');
    const [Password, onChangePass] = useState('Password');
    const [OTP, onChangeOTP] = useState('Nhập mã OTP');
    function NAV() {
        navigation.navigate('FirstMenu');
    }
    function SignUp1() {
        navigation.navigate('DangKy_2');
    }
    const [radio, setRadio] = useState(0)
    var radio_props = [
        { label: 'Học sinh', value: 0 },
        { label: 'CTV', value: 1 }
    ]
    function loaitaikhoan(tk) {
        if (radio = 0) {
            return "Học sinh";
        }
        else return "CTV"
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false} >


                <View style={styles.fixToText}>

                    <Button title="Back" onPress={() => NAV()} />
                    <Option />
                </View>

                <View style={styles.img} >
                    <Image source={yourPicture} />
                </View>
                <View>
                    <TextInput

                        onChangeText={text => onChangeTenPH(text)}
                        value={tenPH}
                    />
                    <TextInput

                        onChangeText={text => onChangeSDT(text)}
                        value={SDT}
                    />
                    <TextInput

                        onChangeText={text => onChangeEmail(text)}
                        value={Email}
                    />
                    <TextInput
                        onChangeText={text => onChangePass(text)}
                        placeholderTextColor="#9a73ef"
                        returnKeyType='go'
                        secureTextEntry={true}
                        value={Password}
                    />


                </View>
                <View>
                    <Text style={{ marginBottom: 10 }}>Chọn loại tài khoản</Text>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={'#2196f3'}
                        animation={true}
                        //    labelStyle={{margin:20}}
                        onPress={(value) => { setRadio(value) }}
                    />
                </View>
                <View style={styles.fixToText}>
                    <TextInput

                        onChangeText={text => onChangeOTP(text)}
                        value={OTP}
                    />
                    <TouchableOpacity>
                        <Text style={{ marginTop: 20 }}>Gửi lại</Text>
                    </TouchableOpacity>

                </View>


                <Button title="Đăng ký" onPress={() => SignUp1()} />
            </ScrollView>
        </SafeAreaView>
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
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    img: {
        alignItems: "center"
    }

})
export default DangKy_1;