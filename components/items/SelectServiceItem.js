import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Colours} from '../../constants/styles';

const SelectServiceItem = ({id, serviceName}) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{serviceName}</Text>
    </View>
  );
};

export default SelectServiceItem;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    // marginRight: 10,
    marginLeft: 10,
    backgroundColor: Colours.white,
  },

  buttonText: {
    fontWeight: 800,
    fontSize: 18,
    textAlign: 'center',
    color: Colours.westerngrey,
  },
});
