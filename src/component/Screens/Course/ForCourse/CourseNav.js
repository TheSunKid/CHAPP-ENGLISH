// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import KinderGaten_Course from './KinderGaten_Course';
import Pre_School_Couse from './Pre_School_Couse';
import CambridgeYLE_Course from './CambridgeYLE_Course';




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
        name="KinderGaten_Course"
        component={KinderGaten_Course}
        options={{
          tabBarLabel: 'Kinder Garden'
         
        }} />
         <Tab.Screen
        name="Pre_School_Couse"
        component={Pre_School_Couse}
        options={{
          tabBarLabel: 'Pre-School'
         
        }} />
          <Tab.Screen
        name="CambridgeYLE_Course"
        component={CambridgeYLE_Course}
        options={{
          tabBarLabel: 'Cambridge YLE '
        
        }} />
    </Tab.Navigator>

  );
}

function CourseNav() {
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

export default CourseNav;