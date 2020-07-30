
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login/Login'
import Register from '../Register/DangKy_1'
import Register2 from '../Register/DangKy_2'
const Stack = createStackNavigator();
const AuthStackNavigation = () => {
  return(
    <Stack.Navigator initialRouteName="Auth" screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="Login" component={Login}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="Register" component={Register}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="Register2" component={Register2}   options={{ headerMode : 'none' }}/>
    </Stack.Navigator>
  );
}
export default AuthStackNavigation;
