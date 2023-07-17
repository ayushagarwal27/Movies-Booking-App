import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS} from '../theme/theme';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.Black},
});
