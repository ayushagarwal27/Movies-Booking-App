import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={HomeScreen} name="Home" />
      <Tab.Screen component={SearchScreen} name="Search" />
      <Tab.Screen component={TicketScreen} name="Ticket" />
      <Tab.Screen component={UserAccountScreen} name="User" />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
