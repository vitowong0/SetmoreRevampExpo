import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SubHeader from '../components/headers/SubHeader';
import {Colours} from '../constants/styles';
import TimeButton from '../components/buttons/TimeButton';
import staff from '../assets/images/briar.png';
import CustomButton from '../components/buttons/CustomButton';
import CustomImageButton from '../components/buttons/CustomImageButton';
import bell_white from '../assets/icons/bell_white.png';

function TimesAvailableScreen() {
  const navigation = useNavigation();

  const bookAppointmentAlert = () =>
    Alert.alert('Book appointment', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => console.log('APPOINTMENT NOT BOOKED: Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: () => {
          console.log('APPOINTMENT BOOKED: Going to BookingOverviewScreen'),
            navigation.navigate('BookingOverviewScreen');
        },
      },
    ]);

  const contactButtonAlert = () =>
    Alert.alert('Contact staff', 'Briar', [
      {
        text: 'Open iMessage',
        onPress: () => console.log('Open messages pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Open Mail', onPress: () => console.log('Open mail pressed')},
    ]);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SubHeader headerTitle={'Select time'} />
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

          <View style={styles.bottomContainer}>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.boldGreyDateTime}>Date selected</Text>
              <Text style={styles.boldTurquoise}>Friday, April 7th, 2023</Text>
              <Text style={styles.boldGreyDateTime}>Available times</Text>

              <View style={styles.timeContainer}>
                <ScrollView horizontal={true}>
                  <TimeButton time={'9:30 AM'} disableButton={false} />
                  <TimeButton time={'12:30 PM'} disableButton={false} />
                  <TimeButton time={'4:20 PM'} disableButton={false} />
                  <TimeButton time={'5:00 PM'} disableButton={false} />
                </ScrollView>
              </View>

              <View style={styles.bookAppointmentContainer}>
                <TouchableOpacity onPress={bookAppointmentAlert}>
                  <CustomButton
                    text={'Book appointment'}
                    textColour={Colours.white}
                    backgroundColour={Colours.pastelgreen}
                    buttonWidth={200}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.unavailableTimeContainer}>
                <Text style={styles.smallBoldTextTwo}>
                  Need a time that isn't available?
                </Text>
                <TouchableOpacity onPress={contactButtonAlert}>
                  <CustomImageButton
                    image={bell_white}
                    text={'Contact staff'}
                    textColour={Colours.white}
                    backgroundColour={Colours.pastelorange}
                    buttonWidth={180}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default TimesAvailableScreen;

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

  bottomContainer: {
    paddingBottom: 20,
  },

  dateTimeContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  timeContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingLeft: 10,
  },

  bookAppointmentContainer: {
    paddingTop: 30,
    flexDirection: 'row',
    paddingLeft: 10,
    justifyContent: 'space-evenly',
  },

  unavailableTimeContainer: {
    paddingTop: 35,
    paddingLeft: 10,
    alignItems: 'center',
  },

  boldGrey: {
    paddingLeft: 10,
    fontSize: 20,
    color: Colours.westerngrey,
    fontWeight: 800,
  },

  boldGreyDateTime: {
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
    color: Colours.westerngrey,
    fontWeight: 800,
  },

  boldTurquoise: {
    fontSize: 24,
    paddingLeft: 10,
    paddingVertical: 10,
    color: Colours.darkturqouise,
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

  smallBoldTextTwo: {
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 5,
    color: Colours.westerngrey,
  },

  employee: {
    fontSize: 14,
    color: Colours.westerngrey,
    fontWeight: 800,
  },

  bell: {
    width: 50,
    height: 50,

    borderColor: 'red',
    borderWidth: 1,
  },
});
