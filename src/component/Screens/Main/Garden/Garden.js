import * as React from 'react';
import { Text, View,Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from './BottomTab/Ionicons'
import TabHome from './BottomTab/TabHome'
import TabToy from './BottomTab/TabToy'
import TabRank from './BottomTab/TabRank'
import TabProfile from './BottomTab/TabProfile'

const background = require('./../../../../../assests/bottomBar_bg.png')

const Tab = createBottomTabNavigator();

export default function Home(){
  return (
    <View style={{flex : 1, flexDirection:'column-reverse'}}>   

        <Image
          style={{resizeMode: 'contain', position: 'absolute',}}
          source={background}
        />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name={route.name} />;
            },
          })}
          tabBarOptions={{
            height:100,
            showLabel:false,
            activeBackgroundColor:'transparent',
            inactiveBackgroundColor:'transparent',
            tabStyle:{
              
            },
            style:{
              height:100,
              borderTopWidth:0,
              backgroundColor:'transparent',
              flexDirection: 'column-reverse'
            }
          }}

          >
          <Tab.Screen name="TabHome" component={TabHome} />
          <Tab.Screen name="TabToy" component={TabToy} />
          <Tab.Screen name="TabProfile" component={TabProfile} />
          <Tab.Screen name="TabRank" component={TabRank} />
        </Tab.Navigator>
      </View>
  );
}
  