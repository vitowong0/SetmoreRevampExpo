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
import {useNavigation} from '@react-navigation/native';

import SubHeader from '../components/headers/SubHeader';
import {Colours} from '../constants/styles';

import StaffItem from '../components/items/StaffItem';
import {STAFFDATA} from '../components/data/DummyStaff';
import RatingsItem from '../components/items/RatingsItem';
import {ALLRATINGS} from '../components/data/DummyRatingsData';

function AllRatingsScreen() {
  const navigation = useNavigation();

  function renderStaffItem(itemData) {
    return (
      <StaffItem
        id={itemData.item.id}
        staffPhoto={itemData.item.staffPhoto}
        staffName={itemData.item.staffName}
      />
    );
  }

  function renderRatingItem(itemData) {
    return (
      <RatingsItem
        id={itemData.item.id}
        score={itemData.item.score}
        name={itemData.item.name}
        review={itemData.item.review}
      />
    );
  }

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SubHeader headerTitle={'All reviews'} />
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={ALLRATINGS}
          keyExtractor={item => item.id}
          renderItem={renderRatingItem}
          numColumns={1}
        />
      </View>
    </View>
  );
}

export default AllRatingsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
    marginBottom: -20,
  },

  bodyContainer: {
    flex: 7,
    backgroundColor: Colours.white,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
