import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import {COLORS} from '../theme/theme';
import {
  upcomingMovies,
  nowPlayingMovies,
  popularMovies,
  baseImagePath,
} from '../api/apiCalls';

const {width, height} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<
    any | undefined
  >(undefined);
  const [popularMoviesList, setPopularMoviesList] = useState<any | undefined>(
    undefined,
  );
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<any | undefined>(
    undefined,
  );

  if (
    nowPlayingMoviesList === undefined &&
    popularMoviesList === undefined &&
    upcomingMoviesList === undefined
  ) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar hidden />
        <View style={styles.inputHeaderContainer}></View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.Orange} />
        </View>
      </ScrollView>
    );
  }

  return <View style={styles.container}></View>;
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.Black},
  scrollViewContainer: {flex: 1},
  inputHeaderContainer: {},
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
