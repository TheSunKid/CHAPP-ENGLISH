import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from "./AuthNavigation";
import Splash from "./SplashNavigation"

const MainScreen = createStackNavigator();

const NavigationContainerTag = () => {
  return(
    <NavigationContainer>
        <MainScreen.Navigator 
          screenOptions={{
            headerShown: false
          }}
        >
            <MainScreen.Screen name="Splash" component={Splash} options={{ headerMode : 'none' }} />
            <MainScreen.Screen name="Auth" component={Auth}  options={{ headerMode : 'none' }} />
        </MainScreen.Navigator>
    </NavigationContainer>
  );
}

export default NavigationContainerTag;