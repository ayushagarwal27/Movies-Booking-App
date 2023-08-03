import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const timeArray: string[] = [
  '10:30',
  '12:30',
  '02:30',
  '05:00',
  '17:00',
  '21:00',
];

const generateDate = () => {
  const date = new Date();
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let weekdays = [];

  for (let index = 0; index < 7; index++) {
    let tempDate = {
      date: new Date(date.getTime() + index * 24 * 60 * 60 * 1000).getDate(),
      day: weekday[
        new Date(date.getTime() + index * 24 * 60 * 60 * 1000).getDay()
      ],
    };
    weekdays.push(tempDate);
  }
  return weekdays;
};

interface SeatBookingScreenProps {}

const SeatBookingScreen: FC<SeatBookingScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>SeatBookingScreen</Text>
    </View>
  );
};

export default SeatBookingScreen;

const styles = StyleSheet.create({
  container: {},
});
