import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colours} from '../constants/styles';
import SubHeader from '../components/headers/SubHeader';
import staffPic from '../assets/images/briar.png';

import SelectServiceItem from '../components/items/SelectServiceItem';
import {SERVICESDATA} from '../components/data/DummyServices';

import AvailableServiceItem from '../components/items/AvailableServiceItem';
import {SERVICESAVAILABLEDATA} from '../components/data/DummyServicesAvailable';

function BookingScreen({route}) {
  const {
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
  } = route.params;
  const navigation = useNavigation();

  function renderSelectServiceItem(itemData) {
    return (
      <TouchableOpacity>
        <SelectServiceItem
          id={itemData.item.id}
          serviceName={itemData.item.serviceName}
        />
      </TouchableOpacity>
    );
  }

  function renderAvailableServiceItem(itemData) {
    return (
      // <TouchableOpacity>
      <AvailableServiceItem
        id={itemData.item.id}
        name={itemData.item.name}
        duration={itemData.item.duration}
        cost={itemData.item.cost}
      />
      // </TouchableOpacity>
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <SubHeader headerTitle={'Select service'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bookingWithContainer}>
          <Text style={styles.boldGrey}>Booking with:</Text>
          <View style={styles.imageAndTextContainer}>
            <View>
              <View style={{alignItems: 'center'}}>
                <Image style={styles.staffImage} source={staffPic} />
                <Text style={styles.employee}>Briar</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.serviceSelectionContainer}>
          <Text style={styles.boldGreySelect}>Select services</Text>
          <View style={styles.carouselContainer}>
            <ScrollView horizontal={true}>
              <FlatList
                data={SERVICESDATA}
                keyExtractor={item => item.id}
                renderItem={renderSelectServiceItem}
                numColumns={5}
              />
            </ScrollView>
          </View>
        </View>
        <View style={styles.servicesContainer}>
          <FlatList
            data={SERVICESAVAILABLEDATA}
            keyExtractor={item => item.id}
            renderItem={renderAvailableServiceItem}
            numColumns={1}
          />
        </View>
      </View>
    </View>
  );
}

export default BookingScreen;

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
    backgroundColor: 'white',
  },

  bookingWithContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  imageAndTextContainer: {
    alignItems: 'flex-start',
    paddingLeft: 10,
  },

  staffImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginVertical: 10,
  },

  serviceSelectionContainer: {
    flex: 0.75,
    justifyContent: 'center',
    paddingVertical: 10,
    // paddingHorizontal: 15,
    backgroundColor: Colours.pastelturquoise,
  },

  carouselContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingLeft: 10,
  },

  servicesContainer: {
    flex: 3,
    paddingHorizontal: 15,
  },

  boldGrey: {
    paddingLeft: 10,
    fontSize: 20,
    color: Colours.westerngrey,
    fontWeight: 800,
  },

  boldGreySelect: {
    paddingLeft: 25,
    fontSize: 20,
    color: Colours.westerngrey,
    fontWeight: 800,
  },

  employee: {
    fontSize: 14,
    color: Colours.westerngrey,
    fontWeight: 800,
  },
});
