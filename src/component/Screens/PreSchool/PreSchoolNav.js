// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Team from './Team';
import Stems from './Stems';
import Phonic from './Phonic';
import YLE from './YLE';



const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#633689',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>
          
      <Tab.Screen
        name="Team"
        component={Team}
        options={{
          tabBarLabel: 'Team'
       
        }}  />
      <Tab.Screen
        name="Stems"
        component={Stems}
        options={{
          tabBarLabel: 'Stems'
         
        }} />
         <Tab.Screen
        name="Phonic"
        component={Phonic}
        options={{
          tabBarLabel: 'Phonics'
         
        }} />
          <Tab.Screen
        name="YLE"
        component={YLE}
        options={{
          tabBarLabel: 'YLE'
        
        }} />
    </Tab.Navigator>

  );
}

function PreSchoolNav() {
  return (
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerStyle: { backgroundColor: '#633689' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'Tab Stack' }}/>
      </Stack.Navigator>
  );
}

export default PreSchoolNav;