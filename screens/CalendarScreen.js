import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import Calendar from '../components/calendar/Calendar';

import Header from '../components/headers/Header';
import {Colours} from '../constants/styles';

import BookedAppointmentItem from '../components/items/BookedAppointmentItem';
import {BOOKEDAPPOINTMENTS} from '../components/data/DummyBookedAppointments';

function CalendarScreen() {
  function renderBookedAppointmentItem(itemData) {
    return (
      <BookedAppointmentItem
        id={itemData.item.id}
        name={itemData.item.name}
        date={itemData.item.date}
        time={itemData.item.time}
        image={itemData.item.image}
      />
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header headerTitle={'Calendar'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.legendContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.miniCirclePink} />
            <Text style={styles.legendText}>Booked</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.miniCircleBorder} />
            <Text style={styles.legendText}>No booking</Text>
          </View>
        </View>
        <View style={styles.calendarContainer}>
          <Calendar
            width={Dimensions.get('window').width}
            daysBooked={[
              '2023-04-01',
              '2023-04-07',
              '2023-04-08',
              '2023-04-20',
              '2023-04-26',
            ]}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
            <Text style={styles.upcomingText}>Upcoming appointments</Text>
          </View>
          <FlatList
            data={BOOKEDAPPOINTMENTS}
            keyExtractor={item => item.id}
            renderItem={renderBookedAppointmentItem}
          />
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

  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },

  miniCirclePink: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: Colours.pastelpink,
  },

  miniCircleBorder: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 0.25,
    marginHorizontal: 5,
    borderColor: Colours.mediumgrey,
  },

  calendarContainer: {
    paddingBottom: 20,
    borderBottomWidth: 0.25,
    borderBottomColor: Colours.westerngrey,
  },

  bottomContainer: {
    flex: 1,
  },

  upcomingText: {
    fontWeight: 700,
    fontSize: 18,

    color: Colours.westerngrey,
  },
});

export default CalendarScreen;
