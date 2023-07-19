import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import MoviesDetailScreen from './src/screens/MovieDetailScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';

interface AppProps {}

const Stack = createNativeStackNavigator();

const App: FC<AppProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          component={TabNavigator}
          name="Tab"
          options={{animation: 'default'}}
        />
        <Stack.Screen
          component={MoviesDetailScreen}
          name="Movie Detail"
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          component={SeatBookingScreen}
          name="Seat Booking"
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
