
import React, { useState } from "react";

import {

    StyleSheet,

    View,
    Text,
    Image,
    Switch,
    Button,
    TextInput,
    SafeAreaView
} from 'react-native';

import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import ComboKinder from "../../ComboVoucher/ComboKinder";
import List_Product_Kinder from "../Product_Kinder/List_Product_Kinder";

const Product_Kinder = ({ navigation }) => {

    return (
        <ScrollView style={styles.gridView} >
            <Text>Kinder</Text>
            <View style={styles.voucher} >
                <ComboKinder />
            </View>
            <View style={styles.gridView}>
                <List_Product_Kinder />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    gridView: {
        marginTop: 0,
        flex: 1,
    },
    voucher: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },

})
export default Product_Kinder;