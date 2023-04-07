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
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SubHeader from '../components/headers/SubHeader';
import {Colours} from '../constants/styles';
import CalendarGreen from '../components/calendar/CalendarGreen';

import staff from '../assets/images/briar.png';

function DatesAvailableScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SubHeader headerTitle={'Select date'} />
      </View>

      <View style={styles.bodyContainer}>
        <ScrollView>
          <View style={styles.bookingWithContainer}>
            <Text style={styles.boldGrey}>Booking with:</Text>
            <View style={styles.imageAndTextContainer}>
              <View>
                <View style={{alignItems: 'center'}}>
                  <Image style={styles.staffImage} source={staff} />
                  <Text style={styles.employee}>Briar</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.serviceSelectionContainer}>
            <Text style={styles.boldGrey}>Selected services</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.smallGreenText}>Baby Glow Facial</Text>
              <Text
                style={[styles.smallGreenText, {color: Colours.westerngrey}]}>
                $100
              </Text>
            </View>
            <Text style={styles.smallText}>1 hour</Text>
            <Text style={styles.smallBoldText}>
              Leave with a skin plan, a serious glow, and a feeling of complete
              elation.
            </Text>
          </View>

          <View style={styles.calendarContainer}>
            <View style={styles.legendContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.miniCircleLeft} />
                <Text style={styles.legendText}>Available</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.miniCircleRight} />
                <Text style={styles.legendText}>Unavailable</Text>
              </View>
            </View>
            <CalendarGreen
              width={Dimensions.get('window').width}
              daysBooked={[
                '2023-04-03',
                '2023-04-04',
                '2023-04-05',
                '2023-04-06',
                '2023-04-07',
                '2023-04-10',
                '2023-04-11',
                '2023-04-12',
                '2023-04-13',
                '2023-04-14',
                '2023-04-17',
                '2023-04-18',
                '2023-04-19',
                '2023-04-20',
                '2023-04-21',
                '2023-04-24',
                '2023-04-25',
                '2023-04-26',
                '2023-04-27',
                '2023-04-28',
              ]}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default DatesAvailableScreen;

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
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: Colours.pastelturquoise,
  },

  calendarContainer: {
    paddingBottom: 20,
  },

  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },

  miniCircleLeft: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: Colours.pastelturquoise,
  },

  miniCircleRight: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    borderColor: Colours.mediumgrey,
    borderWidth: 0.25,
  },

  boldGrey: {
    paddingLeft: 10,
    fontSize: 20,
    color: Colours.westerngrey,
    fontWeight: 800,
  },

  smallGreenText: {
    paddingLeft: 10,
    paddingTop: 10,
    fontWeight: '800',
    color: Colours.darkturqouise,
    marginBottom: 5,
  },

  smallText: {
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 5,
    color: Colours.westerngrey,
  },

  smallBoldText: {
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 10,
    paddingTop: 10,
    color: Colours.westerngrey,
  },

  employee: {
    fontSize: 14,
    color: Colours.westerngrey,
    fontWeight: 800,
  },
});
