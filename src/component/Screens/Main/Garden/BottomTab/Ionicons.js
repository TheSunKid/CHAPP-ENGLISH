import * as React from 'react';
import { Text, View,Image, Dimensions } from 'react-native';


const list_icons = [
  {
    icon_name : 'TabHome',
    image_url : require('../../../../../../assests/gardenkinder/iconHome.png')
  },
  {
    icon_name : 'TabToy',
    image_url : require('../../../../../../assests/gardenkinder/iconToy.png')
  },
  {
    icon_name : 'TabRank',
    image_url : require('../../../../../../assests/gardenkinder/iconRank.png')
  },
  {
    icon_name : 'TabProfile',
    image_url : require('../../../../../../assests/gardenkinder/iconProfile.png')
  },
]


const Icon = ({ name }) => {
  return (
    list_icons.map((item) => {
      if(item.icon_name == name){
       return   ( <Image
        style={{
          resizeMode: "contain",
        }}
        source={item.image_url}
    /> )
      
      }
    })
  );
}

export default Icon