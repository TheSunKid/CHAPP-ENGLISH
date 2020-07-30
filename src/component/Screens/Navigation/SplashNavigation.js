import * as React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';
import Splash from "../Splash/Splash";

const Stack = createStackNavigator();

const SplashStack = () => {
  return(
    <Stack.Navigator initialRouteName="Splash" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Splash" component={Splash}  options={{ headerMode : 'none' }}/>
    </Stack.Navigator>
  );
}
export default SplashStack;
