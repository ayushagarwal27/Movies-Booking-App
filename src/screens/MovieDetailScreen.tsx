import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface MoviesDetailScreenProps {}

const MoviesDetailScreen = (props: MoviesDetailScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>MoviesDetailScreen</Text>
    </View>
  );
};

export default MoviesDetailScreen;

const styles = StyleSheet.create({
  container: {},
});
