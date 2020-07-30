
import React, { useState } from "react";
import 'react-native-gesture-handler';

import {
  StyleSheet,
  View,
  Button,
  Image,
  Text
} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

function BotttomNav({ navigation }) {


  function NAV_back() {
    navigation.navigate('UngDung');
  }
  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>


        <TouchableOpacity onPress={() => navigation.navigate("UngDung")}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("UngDung")}>
          <Text>Toys</Text >
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Rank</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Ung Dung")}>
          <Text>Profile</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#ffffff',
    maxHeight: 50

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
  back: {
    backgroundColor: '#d4d9d7',
    maxHeight: 500
  },

  front: {
    backgroundColor: '#ffffff',
    maxHeight: 300
  }
})
export default BotttomNav;
