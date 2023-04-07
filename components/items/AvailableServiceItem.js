import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colours} from '../../constants/styles';

const AvailableServiceItem = ({name, duration, cost}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DatesAvailableScreen');
        console.log(`SELECTED SERVICE: ${name}`);
      }}>
      <View style={styles.root}>
        <View>
          <Text style={styles.serviceName}>{name}</Text>
          <View style={{paddingVertical: 3}} />
          <Text style={styles.duration}>{duration}</Text>
        </View>
        <View>
          <Text style={styles.cost}>{cost}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AvailableServiceItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
    paddingVertical: 15,

    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },

  button: {
    borderWidth: 1,
    borderRadius: 13,
    width: 26,
    height: 26,
  },

  serviceName: {
    color: Colours.darkturqouise,
    fontWeight: 800,
  },

  duration: {
    color: Colours.westerngrey,
  },

  cost: {
    fontWeight: 700,
    color: Colours.lightturqouise,
  },
});
