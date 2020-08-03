import * as React from 'react';
import { ImageBackground,StyleSheet,View,Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NavButton from './NavButton'
/* Tab Import  */
import TabHome from './BottomTab/TabHome'
import TabToy from './BottomTab/TabToy'
import TabRank from './BottomTab/TabRank'
import TabProfile from './BottomTab/TabProfile'

export default function BottomBar() {
  const iconHome = require('./../../../../../assests/gardenkinder/iconHome.png')
  const iconProfile = require('./../../../../../assests/gardenkinder/iconProfile.png')
  const iconToy = require('./../../../../../assests/gardenkinder/iconToy.png')
  const iconRank = require('./../../../../../assests/gardenkinder/iconRank.png')


  const navButton = [
    {
      screen_name : 'Garden_Home',
      icon: iconHome
    },
    {
      screen_name : 'Garden_Profile',
      icon: iconProfile
    },
    {
      screen_name : 'Garden_Toy',
      icon: iconToy
    },
    {
      screen_name : 'Garden_Rank',
      icon: iconRank
    },
  ]
  return (

    <View style={styles.container}>
      {navButton.map(item => {
        return(
        <NavButton
        screenName={item.screen_name}
        icon={item.icon}
      />
        )
     }) 
      }
     </View>     
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingLeft:15,
      paddingRight:15
    },
    imagesbg: {
      width:100,
      height:100,
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
})

