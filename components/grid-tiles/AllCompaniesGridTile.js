import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Colours} from '../../constants/styles';
import {useNavigation} from '@react-navigation/native';

import dotdotdot from '../../assets/icons/dotdotdot.png';

function AllCompaniesGridTile({
  id,
  name,
  image,
  description,
  rating,
  services,
  staff,
  timesAvailable,
  duration,
  cost,
  heartIcon,
}) {
  const navigation = useNavigation();

  const hideCompanyAlert = () =>
    Alert.alert('Hide this company?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed. Hiding company.'),
      },
    ]);

  const favouritesButtonAlert = () => {
    Alert.alert('Add to favourites?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('ADDING TO FAVOURITES: OK Pressed'),
      },
    ]);
  };

  return (
    <View style={styles.root}>
      <View style={styles.gridTileContainer}>
        <View style={styles.topRow}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.titleText}>{name}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={hideCompanyAlert}>
              <Image style={styles.dotdotdot} source={dotdotdot} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CompanyDetailsScreen', {
                id: id,
                name: name,
                image: image,
                description: description,
                rating: rating,
                services: services,
                staff: staff,
                timesAvailable: timesAvailable,
                duration: duration,
                cost: cost,
                heartIcon: heartIcon,
              });
            }}>
            <Image style={styles.image} source={image} />
            <TouchableOpacity onPress={favouritesButtonAlert}>
              <Image style={styles.whiteHeart} source={heartIcon} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AllCompaniesGridTile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  gridTileContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  topRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    marginBottom: 2,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 700,
    color: Colours.darkturqouise,
  },

  dotdotdot: {
    height: 18,
    width: 35,
    opacity: 0.5,
  },

  imageContainer: {
    flex: 1,
  },

  image: {
    width: '100%',
    height: 250,
    borderRadius: 30,
  },

  whiteHeart: {
    position: 'absolute',
    width: 20,
    height: 20,
    bottom: 20,
    right: 20,
  },
});
