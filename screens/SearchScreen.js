import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  // ScrollView,
  Alert,
  FlatList,
} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';

import Header from '../components/headers/Header';
import {Colours} from '../constants/styles';
import scanIcon from '../assets/icons/og-scan.png';

import NearbyCompanyItem from '../components/items/NearbyCompanyItem';
import {NEARBYCOMPANYDATA} from '../components/data/DummyNearbyCompanyData';

function SearchScreen() {
  const navigation = useNavigation();

  const scanQRAlert = () =>
    Alert.alert('Scan QR code', 'Setmore wants to launch the Camera app', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Open',
        onPress: () => console.log('OK Pressed. Camera opened.'),
      },
    ]);

  function renderNearbyCompanyItem(itemData) {
    return (
      <NearbyCompanyItem
        id={itemData.item.id}
        name={itemData.item.name}
        image={itemData.item.image}
        description={itemData.item.description}
        rating={itemData.item.rating}
        numReviews={itemData.item.numReviews}
        distance={itemData.item.distance}
        dollarSign={itemData.item.dollarSign}
        style={itemData.item.style}
        timesAvailable={itemData.item.timesAvailable}
      />
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header headerTitle={'Get to booking'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search Setmore"
            onChangeText={text => console.log(text)}
          />
          <TouchableOpacity onPress={scanQRAlert}>
            <View>
              <Image style={styles.scanIcon} source={scanIcon} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.topContainer}>
          <ScrollView>
            <View style={styles.nearbyCompanyContainer}>
              <Text style={styles.nearbyText}>7 companies nearby</Text>
            </View>
            <ScrollView>
              <FlatList
                data={NEARBYCOMPANYDATA}
                keyExtractor={item => item.id}
                renderItem={renderNearbyCompanyItem}
              />
            </ScrollView>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
    width: '100%',
    marginBottom: -20,
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: 10,
  },

  scanIcon: {
    width: 32,
    height: 32,
  },

  topContainer: {
    flex: 1,
    paddingBottom: 10,
  },

  nearbyCompanyContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },

  nearbyText: {
    fontWeight: 700,
    fontSize: 18,
    color: Colours.westerngrey,
  },
});

export default SearchScreen;
