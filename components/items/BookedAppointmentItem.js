import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colours} from '../../constants/styles';

function BookedAppointmentItem({id, name, date, time, image}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BookingOverviewScreen');
      }}>
      <View style={styles.notificationContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.companyName}>{name}</Text>
          <Text style={styles.detailText}>{date}</Text>
          <Text style={styles.detailText}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default BookedAppointmentItem;

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
    marginHorizontal: 6,
    paddingVertical: 15,

    borderColor: Colours.westerngrey,
    borderBottomWidth: 0.45,
  },

  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
  },

  textContainer: {
    flex: 5,
    justifyContent: 'center',
  },

  companyName: {
    fontWeight: '700',
    paddingVertical: 3,
    fontSize: 12,
  },

  detailText: {
    fontWeight: '300',
    paddingVertical: 3,
    fontSize: 14,
  },
});
