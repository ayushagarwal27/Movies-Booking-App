import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import {StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}>
      <Tab.Screen
        component={HomeScreen}
        name="Home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}>
              <CustomIcon
                name="video"
                color={COLORS.White}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={SearchScreen}
        name="Search"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}>
              <CustomIcon
                name="search"
                color={COLORS.White}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={TicketScreen}
        name="Ticket"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}>
              <CustomIcon
                name="ticket"
                color={COLORS.White}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={UserAccountScreen}
        name="User"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}>
              <CustomIcon
                name="user"
                color={COLORS.White}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
});
