
import React, { useState } from "react";

import {

    StyleSheet,
    View,
    Text,
    Image

} from 'react-native';

import { TouchableOpacity } from "react-native-gesture-handler";
const ComboKinder = ({ navigation }) => {
 

    return (
        <View style={styles.container0}>
            <View style={styles.fixToText}>
                <View style={styles.container}>

                    <View style={styles.fixToText}>
                        <Text>COMBO MODULAR</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text>Buy</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>Price: 250.000 VND</Text>
                </View>
                <Text>Đây là ảnh</Text>
            </View>
        </View>


    )
}
const styles = StyleSheet.create({
    container0: {
        flex: 1,
  
    },
    container: {
        flex: 1,
        padding: 0
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    } , btn:{
        backgroundColor:'#14ba02',
        borderRadius: 5,
        width:50,
        alignItems:'center',
        height:30
    }


})
export default ComboKinder;