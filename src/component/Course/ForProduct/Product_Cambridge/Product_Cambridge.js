
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
import ComboPre from "../../ComboVoucher/ComboPre";
import List_Product_Cambridge from "./List_Product_Cambridge";
import ComboCambridge from "../../ComboVoucher/ComboCambridge";
const Product_Cambridge = ({ navigation }) => {

    return (
  
            <ScrollView style={styles.gridView} >
                <Text>Cambridge</Text>
                <View style={styles.voucher} >
                    <ComboCambridge />
                </View>
                <View style={styles.gridView}>
                    <List_Product_Cambridge />
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
export default Product_Cambridge;