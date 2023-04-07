import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

// This HomeHeader should take in 1 prop, first_name
// and render both accordingly

import {Colours} from '../../constants/styles';
import ProfilePicture from '../../assets/images/boywhatthehell.png';
import settingsIcon from '../../assets/icons/final-gear.png';

function HomeHeader({first_name}) {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hello, {first_name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SettingsScreen');
            }}>
            <Image style={styles.image} source={ProfilePicture} />
            <Image style={styles.settingsIcon} source={settingsIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },

  textContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },

  imageContainer: {
    alignItems: 'center',
  },

  text: {
    fontSize: 30,
    fontWeight: 800,
  },

  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },

  settingsIcon: {
    position: 'absolute',
    width: 20,
    height: 20,
    right: -5,
    bottom: -0,

    backgroundColor: Colours.white,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.5,
  },
});
