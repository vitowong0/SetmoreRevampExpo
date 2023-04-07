import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Colours} from '../../constants/styles';

const StaffItem = ({id, staffPhoto, staffName}) => {
  return (
    <View style={styles.staffItemContainer}>
      <Image style={styles.image} source={staffPhoto} />
      <Text style={styles.name}>{staffName}</Text>
    </View>
  );
};

export default StaffItem;

const styles = StyleSheet.create({
  staffItemContainer: {
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingLeft: 8,
    // marginRight: 10,
    marginLeft: 10,
    backgroundColor: Colours.white,
  },

  image: {
    width: 90,
    height: 90,
  },

  name: {
    paddingTop: 5,
    fontWeight: 600,
    color: Colours.westerngrey,
  },
});
