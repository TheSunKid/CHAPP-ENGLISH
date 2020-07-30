
import React, { useState } from "react";

import {

    StyleSheet,

    View,
    Text,
    Switch,
    Button,
    TextInput,
    Image
} from 'react-native';
import Option from "../Option"
import 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dropdown } from 'react-native-material-dropdown-v2'
import { sin } from "react-native-reanimated";
const DangKy_2 = ({ navigation }) => {
    var yourPicture = require('../../../assests/icon.png');
    const [tenBe, onChangeTenBe] = useState('Họ tên bé');

    function NAV() {
        navigation.navigate('FirstMenu');
    }

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };
    let data = [{
        value: 'Học sinh tự do',
    }, {
        value: 'Học sinh cơ sở',
    }];
    function SignIn() {
        navigation.navigate('DangNhap');
    }

    return (
        <View style={styles.container}>
            <View style={styles.fixToText}>
                <Button title="Back" onPress={() => NAV()} />
                <Option />
            </View>
            <View style={styles.img} >
                <Image source={yourPicture} />
            </View>
            <View>
                <TextInput
                    onChangeText={text => onChangeTenBe(text)}
                    value={tenBe}
                />

            </View>

            <TouchableOpacity onPress={showDatepicker}>
                <View style={styles.fixToText}>
                    <TextInput onFocus={showDatepicker}
                        onChangeText={text => setDate(text)}
                        value={date}
                        placeholder="Ngày sinh" />
                    <Image
                        source={{ uri: 'https://i.dlpng.com/static/png/7043522_preview.png' }}
                        style={{ width: 25, height: 25 }}
                    />
                </View>

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </TouchableOpacity>
            <Dropdown

                data={data}
            />


            <Button title="Hoàn thành"  onPress={()=>SignIn()} />
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
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    img: {
        alignItems: "center"
    }
})
export default DangKy_2;