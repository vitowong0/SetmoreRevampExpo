import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import starIcon from '../../assets/icons/star.png';
import locationIcon from '../../assets/icons/location-icon.png';
import {Colours} from '../../constants/styles';
import {ScrollView} from 'react-native-virtualized-view';

function NearbyCompanyItem({
  id,
  name,
  image,
  description,
  rating,
  numReviews,
  distance,
  dollarSign,
  style,
  timesAvailable,
}) {
  const navigation = useNavigation();

  function renderTimeButton(time) {
    return (
      <TouchableOpacity
        key={time}
        onPress={() => {
          navigation.navigate('CompanyDetailsScreen', {
            id: id,
            name: name,
            image: image,
            description: description,
            rating: rating,
            numReviews: numReviews,
            distance: distance,
            dollarSign: dollarSign,
            style: style,
            timesAvailable: timesAvailable,
          });
          console.log(`SELECTED TIME: ${time}`);
        }}>
        <View style={styles.individualTime}>
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function renderTimeButtons(timesAvailable) {
    return timesAvailable.map(time => renderTimeButton(time));
  }

  return (
    <View style={styles.nearbyCompanyContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.ratingContainer}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text>{rating}</Text>
            <Image style={styles.littleIcons} source={starIcon} />
          </View>
          <Text>{numReviews}</Text>
        </View>

        <View style={styles.distanceContainer}>
          <Image style={styles.littleIcons} source={locationIcon} />
          <Text>{distance}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text>{dollarSign}</Text>
          <Text>{style}</Text>
        </View>

        <View style={styles.timesContainer}>
          <ScrollView horizontal={true}>
            <Text>{renderTimeButtons(timesAvailable)}</Text>
          </ScrollView>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CompanyDetailsScreen', {
              id: id,
              name: name,
              image: image,
              description: description,
              rating: rating,
              numReviews: numReviews,
              distance: distance,
              dollarSign: dollarSign,
              style: style,
              timesAvailable: timesAvailable,
            });
            console.log(`SELECTED COMPANY: ${name}`);
          }}>
          <Image style={styles.companyImage} source={image} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NearbyCompanyItem;

const styles = StyleSheet.create({
  nearbyCompanyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 18,
    marginTop: 10,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: 2,
  },

  distanceContainer: {
    flexDirection: 'row',
    marginVertical: 2,
    alignItems: 'center',
  },

  priceContainer: {
    flexDirection: 'row',
    marginVertical: 2,
  },

  timesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },

  individualTime: {
    alignItems: 'center',
    marginRight: 7,
    marginVertical: 5,
    padding: 5,
    backgroundColor: Colours.darkturqouise,
    borderRadius: 7,
  },

  timeText: {
    fontSize: 13,
    fontWeight: 700,
    color: Colours.white,
  },

  leftContainer: {
    flex: 1,
    marginRight: 10,
  },

  name: {
    fontWeight: 700,
    fontSize: 18,
    marginBottom: 4,
  },

  littleIcons: {
    width: 12,
    height: 12,
  },

  rightContainer: {
    // borderColor: 'purple',
    // borderWidth: 1,
  },

  companyImage: {
    width: 115,
    height: 115,
    borderRadius: 20,
  },
});
