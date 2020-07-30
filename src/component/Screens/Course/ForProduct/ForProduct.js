
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
import Product_Kinder from "./Product_Kinder/Product_Kinder";
import Product_Pre_School from "./Product_Pre_School/Product_Pre_School";
import Product_Cambridge from "./Product_Cambridge/Product_Cambridge";
const ForProduct = ({ navigation }) => {

    return (
        <SafeAreaView>


            <ScrollView>
                <View style={styles.unit}>
                    <Product_Kinder />
                </View>
                <View style={styles.unit}>
                    <Product_Pre_School />
                </View>
                <View style={styles.unit}>
                    <Product_Cambridge />
                </View>
            </ScrollView>
        </SafeAreaView>
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
    unit: {
        margin: 10,
        paddingBottom: 10
    }

})
export default ForProduct;