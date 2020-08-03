
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Garden_Home from '../../Main/Garden/BottomTab/TabHome'
// import Garden_Profile from '../../Main/Garden/BottomTab/TabProfile'
// import Garden_Rank from '../../Main/Garden/BottomTab/TabRank'
// import Garden_Toy from '../../Main/Garden/BottomTab/TabToy'
import Garden_root from '../../Main/Garden/Garden'
const Stack = createStackNavigator();
const GardenStackNavigation = () => {
  return(
    <Stack.Navigator initialRouteName="GardenScreen" screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="Garden_root" component={Garden_root}   options={{ headerMode : 'none' }}/>
        {/* <Stack.Screen name="Garden_Home" component={Garden_Home}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="Garden_Profile" component={Garden_Profile}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="Garden_Rank" component={Garden_Rank}   options={{ headerMode : 'none' }}/>
        <Stack.Screen name="Garden_Toy" component={Garden_Toy}   options={{ headerMode : 'none' }}/> */}
    </Stack.Navigator>
  );
}     
export default GardenStackNavigation;
