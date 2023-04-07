import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

import goldstar from '../../assets/icons/star.png';
import {Colours} from '../../constants/styles';

function RatingsItem({id, score, name, review}) {
  return (
    <View style={styles.ratingsItemContainer}>
      <View style={styles.topRow}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.ratingTextStar}>
          <Text style={styles.scoreText}>{score} </Text>
          <Image style={styles.star} source={goldstar} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.reviewText}>{review}</Text>
      </View>
    </View>
  );
}

export default RatingsItem;

const styles = StyleSheet.create({
  ratingsItemContainer: {
    // flex: 1,
    marginBottom: 10,
    paddingVertical: 15,
    borderBottomColor: Colours.westerngrey,
    borderBottomWidth: 0.5,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  ratingTextStar: {
    flexDirection: 'row',
    paddingRight: 10,
    alignItems: 'center',
  },

  textContainer: {
    paddingVertical: 5,
  },

  scoreText: {
    color: 'gold',
    fontSize: 18,
    fontWeight: 800,
  },

  star: {
    width: 16,
    height: 16,
  },

  nameText: {
    fontSize: 18,
    fontWeight: 700,
    color: Colours.darkturqouise,
    // fontWeight: '700',
    // paddingVertical: 3,
    // fontSize: 18,
  },

  reviewText: {
    fontSize: 16,
    fontWeight: 600,
    color: Colours.westerngrey,
  },
});
