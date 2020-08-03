
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainAppScreen from '../Main/MainScreenApp'
import GardenScreen from './GardenNavigation/GardenScreen'
import PreSchool from '../Main/PreSchool/PreSchool'
import Chanel from '../Main/Chanel/Chanel'
import Book from '../Main/Book/Book'
import Account from '../Main/Account/Account'

const Stack = createStackNavigator();
const MainAppNavigation = () => {
  return(
    <Stack.Navigator initialRouteName="MainApp" screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="MainAppScreen" component={MainAppScreen}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="GardenScreen" component={GardenScreen}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="PreSchool" component={PreSchool}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="Chanel" component={Chanel}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="Book" component={Book}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="Account" component={Account}   options={{ headerMode : 'none' }}/>

    </Stack.Navigator>
  );
}
export default MainAppNavigation;
