import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {Colours} from '../../constants/styles';

function NotificationItem({id, image, companyName, detailText}) {
  return (
    <View style={styles.root}>
      <View style={styles.notificationContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.companyName}>{companyName}</Text>
          <Text style={styles.detailText}>{detailText}</Text>
        </View>
      </View>
    </View>
  );
}

export default NotificationItem;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  notificationContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
    marginHorizontal: 6,
    paddingRight: 10,
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
  },

  textContainer: {
    flex: 5,
    justifyContent: 'center',
  },

  companyName: {
    fontWeight: '700',
    paddingVertical: 3,
    fontSize: 16,
  },

  detailText: {
    fontWeight: '300',
    paddingVertical: 3,
    fontSize: 16,
  },
});
