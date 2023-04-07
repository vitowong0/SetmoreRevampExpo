import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colours} from '../../constants/styles';

const TimeButton = ({image, time, onPress, disableButton}) => {
  if (!disableButton) {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(`SELECTED TIME: ${time}`);
        }}>
        <View style={styles.buttonContainer} onPress={onPress}>
          <Text style={styles.buttonText}>{time}</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{time}</Text>
      </View>
    );
  }
};

export default TimeButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15,
    paddingVertical: 10,
    // paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 1,
    width: 90,
  },

  buttonText: {
    fontWeight: '800',
    fontSize: 14,
    textAlign: 'center',
    color: Colours.westerngrey,
  },

  image: {
    width: 20,
    height: 20,
  },
});
