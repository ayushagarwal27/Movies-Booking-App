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
import {COLORS, SPACING} from '../theme/theme';
import {
  upcomingMovies,
  nowPlayingMovies,
  popularMovies,
  baseImagePath,
} from '../api/apiCalls';
import InputHeader from '../components/InputHeader';

const {width, height} = Dimensions.get('window');

const HomeScreen: React.FC = ({navigation}: any) => {
  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<
    any | undefined
  >(undefined);
  const [popularMoviesList, setPopularMoviesList] = useState<any | undefined>(
    undefined,
  );
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<any | undefined>(
    undefined,
  );

  const handleSearch = () => {
    navigation.navigate('Search');
  };

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
        <View style={styles.inputHeaderContainer}>
          <InputHeader onSearch={handleSearch} />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.Orange} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      contentContainerStyle={styles.scrollViewContainer}>
      <StatusBar hidden />
      <View style={styles.inputHeaderContainer}>
        <InputHeader onSearch={handleSearch} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.Black},
  scrollViewContainer: {flex: 1},
  inputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
