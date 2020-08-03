import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from "react-native";
const MainAppScreen = (props) => {
  const backgroundImage = require('../../../../assests/mainScreenApp.png');
  const buttonGarden = require('../../../../assests/buttonGarden.png');
  const buttonPreSchool = require('../../../../assests/buttonPreSchool.png');
  const buttonChanel = require('../../../../assests/buttonChanel.png');
  const buttonBook = require('../../../../assests/buttonBook.png');
  const buttonAccount = require('../../../../assests/buttonAccount.png');

  const handleButtonClick = (event) => {
    if(event){
     console.log(event.currentTarget)
    }
  } 
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage} 
        style={styles.image}
      >
      <View style={{paddingBottom:150}}>
          <View style={styles.itemContainer}>
            <TouchableOpacity key={1} style={styles.FacebookStyle} activeOpacity={0.5} 
            
            onPress={() => {
              props.navigation.navigate('GardenScreen')
            }}> 
                <Image
                source={buttonGarden}
                style={styles.itemImage}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} 
               onPress={() => {
                props.navigation.navigate('PreSchool')
               }}
            > 
                <Image
                source={buttonPreSchool}
                style={styles.itemImage}
                />
            </TouchableOpacity>
          </View>

           <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} 
               onPress={() => {
                props.navigation.navigate('Chanel')
               }}
            >
                <Image
                source={buttonChanel}
                style={styles.itemImage2}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} 
               onPress={() => {
                props.navigation.navigate('Book')
               }}
            >
                <Image
                source={buttonBook}
                style={styles.itemImage2}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} 
              onPress={() => {
                props.navigation.navigate('Account')
              }}
            >
                <Image
                source={buttonAccount}
                style={styles.itemImage2}
                />
            </TouchableOpacity>
          </View>
      </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent:'center',
    flexDirection:'column'
  },
  itemImage:{
    resizeMode:'contain',
    width: (Dimensions.get('window').width / 2 ) - 20,
    height: ((Dimensions.get('window').width / 2 )) * 0.75,
    marginRight:20
  },
  itemImage2:{
    resizeMode:'contain',
    width: (Dimensions.get('window').width / 3 ) - 15,
    height:((Dimensions.get('window').width / 3 ) - 20) * 1.09,
    marginRight:12.5
  },
  itemContainer: {
    flexDirection:'row',
    paddingLeft:10,
    paddingBottom:10
  },
  FacebookStyle:{
    
  }
});
export default MainAppScreen;
