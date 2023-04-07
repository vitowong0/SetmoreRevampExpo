import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colours} from '../../constants/styles';
import {Calendar as NativeCalendar} from 'react-native-calendars';

// Usage:
// <Calendar width={400} daysBooked={['2023-04-01', ...]} daysAvailable={['2023-04-02', ...]} />
const CalendarGreen = ({width, daysBooked, daysAvailable}) => {
  const navigation = useNavigation();
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth() + 1);

  const onMonthChange = date => {
    setCalendarMonth(date.month);
  };

  const dayComponent = ({date}) => {
    if (date.month === calendarMonth) {
      let isBooked = false;
      if (
        daysBooked !== undefined &&
        daysBooked.find(element => element === date.dateString)
      ) {
        isBooked = true;
      }

      let isAvailable = false;
      if (
        daysAvailable !== undefined &&
        daysAvailable.find(element => element === date.dateString)
      ) {
        isAvailable = true;
      }

      let isUnavailable = false;
      if (daysAvailable !== undefined && !isAvailable) {
        isUnavailable = true;
      }

      return (
        <TouchableOpacity
          style={[
            styles.dayView,
            isBooked ? styles.bookedView : {},
            isUnavailable ? styles.unavailableView : {},
          ]}
          onPress={() => {
            if (isAvailable || isBooked) {
              navigation.navigate('TimesAvailableScreen');
              console.log(`SELECTED MONTH/DAY: ${date.month}/${date.day}`);
            }
          }}>
          <Text style={styles.dayText}>{date.day}</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  return (
    <NativeCalendar
      style={{width: width}}
      dayComponent={dayComponent}
      onMonthChange={onMonthChange}
      minDate={new Date().toISOString().slice(0, 10)}
      theme={{
        monthTextColor: Colours.lightturqouise,
        textMonthFontSize: 26,
        textMonthFontWeight: '800',
        textSectionTitleColor: Colours.darkturqouise,
        textDayHeaderFontWeight: '600',
        arrowColor: Colours.darkturqouise,
      }}
    />
  );
};

export default CalendarGreen;

const styles = StyleSheet.create({
  dayView: {
    width: '80%',
    aspectRatio: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.25,
    borderColor: Colours.mediumgrey,
  },

  dayText: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  bookedView: {
    backgroundColor: Colours.pastelturquoise,
    // opacity: 0.3,
    borderWidth: 0,
  },

  unavailableView: {
    backgroundColor: Colours.pastelturquoise,
    opacity: 0.5,
  },
});
