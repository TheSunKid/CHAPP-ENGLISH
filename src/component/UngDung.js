
import React, { useState } from "react";
import 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    Button
} from 'react-native';

import { TextInput } from "react-native-paper";

export default function UngDung({ navigation }) {
    const [visible, setVisible] = useState(false);
    const [Code, onChangeCode] = useState('Native Code');
    function submit(inputText) {
        console.log(inputText);
        setVisible(false)
    }


    function Kinder() {
        navigation.navigate('KinderGaten');
    }

    function Channel() {
        navigation.navigate('Channel');
    }
    function Course() {
        navigation.navigate('Course');
    }
    function Acc() {
        navigation.navigate('Acc');
    }
    function Pre() {
        navigation.navigate('PreSchool');
    }

    return (
        <View style={styles.container}>

            <Modal isVisible={visible}>
                <View style={styles.nativecode}>
                    <Text>Active Code</Text>
                    <Text>If you already have the code, please enter it here</Text>
                    <TextInput onChangeText={text => onChangeCode(text)}
                        value={Code} />
                  

                    <TouchableOpacity onPress={() => {
                        setVisible(false)
                        Pre()
                    }}>
                        <Text>Active</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                   
                    }}>
                        <Text>Buy</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.row} >
                <TouchableOpacity style={styles.img} onPress={() => Kinder()}>
                    <Image source={require('../../assests/icon_Kinder.jpg')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setVisible(true)} >
                    <Image source={require('../../assests/icon_PreS.jpg')} />
                </TouchableOpacity>
            </View>

            <View style={styles.row} >


                <TouchableOpacity style={styles.img} onPress={() => Channel()}>
                    <Image source={require('../../assests/icon_PreS.jpg')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.img} onPress={() => Course()}>
                    <Image source={require('../../assests/icon_Corse.jpg')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.img} onPress={() => Acc()}>
                    <Image source={require('../../assests/icon_Acc.jpg')} />
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        alignSelf: "center"
    },
    img: {
        width: 100,
        height: 100,
        margin: 20
    },
    nativecode: {
        flex: 1,
        backgroundColor: '#ff8787',
        width: '80%',
        maxHeight: 200,
        alignSelf: 'center'
    }

})
