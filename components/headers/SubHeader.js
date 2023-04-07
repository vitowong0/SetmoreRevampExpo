import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BackButton from '../buttons/BackButton';
import {Colours} from '../../constants/styles';

// This SubHeader should take in 1 prop (just the header text)
// and render it accordingly (depending on which page we're on)
// back button will navigate to the previous screen

function SubHeader({headerTitle}) {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <BackButton />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{headerTitle}</Text>
        </View>
      </View>
    </View>
  );
}

export default SubHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: Colours.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },

  textContainer: {
    flex: 1,
    paddingLeft: 5,
  },

  text: {
    fontSize: 30,
    fontWeight: 800,
  },
});
