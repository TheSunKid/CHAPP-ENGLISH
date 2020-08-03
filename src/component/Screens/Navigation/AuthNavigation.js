
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../Login/StartScreen'
import LoginScreen from '../Login/LoginScreen'
import Register from '../Register/Register'
import RegisterOTP from '../Register/RegisterOTP'
import RegisterFinal from '../Register/RegisterFinal'
const Stack = createStackNavigator();
const AuthStackNavigation = () => {
  return(
    <Stack.Navigator initialRouteName="Auth" screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="StartScreen" component={StartScreen}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="Register" component={Register}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="RegisterOTP" component={RegisterOTP}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="RegisterFinal" component={RegisterFinal}   options={{ headerMode : 'none' }}/>
    </Stack.Navigator>
  );
}
export default AuthStackNavigation;
