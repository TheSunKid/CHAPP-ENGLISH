import React, { useState, useEffect } from "react";
import { Text, View,Image, Dimensions, ImageBackground,TouchableOpacity,StyleSheet,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ScrollableTabView} from '@valdio/react-native-scrollable-tabview'
import CustomTabBar from './CustomTabBar'
import { FlatGrid } from 'react-native-super-grid';

const backgroud_top = require('../../../../../../assests/gardenkinder/bg_top.png')


const LessionComponet = (props) => {
   
  return (
  <View style={{}}>
    <Image style={{width: (Dimensions.get('window').width / 3 ) - 15,height: (Dimensions.get('window').width / 3 ) - 15,  resizeMode:'contain',}} source={props.source}>
    </Image>
  </View>
  )
}
const TabLessionContent = (props) => {
      return (
        <View style={{flexDirection:'row',paddingLeft:15,paddingRight:15,flexWrap:'wrap'}}>
        {  props.data.map((item) => {
            return (<LessionComponet title={item.name} source={require('../../../../../../assests/gardenkinder/lesson_demo_image.png')} /> )
          }) }
       </View>
      )
} 
export default function Home(){
  const [items1, setItems1] = useState([
    { name: 'TURQUOISE', code: '#1abc9c',dieuhuong:"Course" },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
  ]);
  
  const [items2, setItems2] = useState([
    { name: 'TURQUOISE', code: '#1abc9c',dieuhuong:"Course" },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
  ]);
  const [items3, setItems3] = useState([
    { name: 'TURQUOISE', code: '#1abc9c',dieuhuong:"Course" },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
  ]);
  return (
      <View style={{flex : 1, flexDirection:'column'}}>
            <View style={{alignItems:'center',flex: 1,paddingTop:50}}>
            <Text style={{flex : 1, fontSize:25,color:'#FCB615'}}>Kindle Garden</Text>
            </View>
            <View style={{alignItems:'center',flex: 6,paddingBottom:50}}>
                <ScrollableTabView
                  tabBarPosition={'bottom'}
                  styles={{flex:1}}
                  tabBarUnderlineStyle={{
                    width:0,
                    height:0
                  }}
                >
                    <TabLessionContent style={{flexDirection:'row'}} data={items1} key={1} tabLabel="1"/>
                    <TabLessionContent style={{flexDirection:'row'}} data={items2} key={2} tabLabel="2"/>
                    <TabLessionContent style={{flexDirection:'row'}} data={items3} key={3} tabLabel="3"/>
                </ScrollableTabView>
            </View>
          
        
      </View>
  );
}
  
 
const styles = StyleSheet.create({
  gridView: {
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
});