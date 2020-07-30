
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
import Option from "../../Option"

import CourseNav from "./CourseNav";

const PreSchool = ({ navigation }) => {
    function NAV() {
        navigation.navigate('UngDung');
    }

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.fixToText}>
                <Button title="Back" onPress={() => NAV()} />
                <Option />
            </View>
         
            <CourseNav />
    
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
    tinyLogo: {
        width: 50,
        height: 50,
    },
    img: {
        alignItems: "center"
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    bottom:{
        alignSelf:'stretch',
        height:50
    }

})
export default PreSchool;