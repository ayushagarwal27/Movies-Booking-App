import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import {COLORS, SPACING} from '../theme/theme';
import {upcomingMovies, nowPlayingMovies, popularMovies} from '../api/apiCalls';
import InputHeader from '../components/InputHeader';
import CategoryTitle from '../components/CategoryTitle';
import MoviesList from '../components/MoviesList';

const {width} = Dimensions.get('window');

const getNowPlayingMovies = async () => {
  try {
    let res = await fetch(nowPlayingMovies);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log('Something went wrong in getNowPlayingMovies', err);
  }
};
const getUpcomingMovies = async () => {
  try {
    let res = await fetch(upcomingMovies);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log('Something went wrong in getUpcomingMovies', err);
  }
};
const getPopularMovies = async () => {
  try {
    let res = await fetch(popularMovies);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log('Something went wrong in getPopularMovies', err);
  }
};

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

  useEffect(() => {
    getNowPlayingMovies().then(data => setNowPlayingMoviesList(data.results));
    getUpcomingMovies().then(data => setUpcomingMoviesList(data.results));
    getPopularMovies().then(data => setPopularMoviesList(data.results));
  }, []);

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
        showsVerticalScrollIndicator={false}
        // bounces={false}
      >
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
      showsVerticalScrollIndicator={false}>
      <StatusBar hidden />
      <View style={styles.inputHeaderContainer}>
        <InputHeader onSearch={handleSearch} />
      </View>
      <CategoryTitle title="Now Playing" />
      <MoviesList
        list={nowPlayingMoviesList}
        type="main"
        width={width}
        onItemPress={item =>
          navigation.navigate('Movie Detail', {movieId: item.id})
        }
      />
      <CategoryTitle title="Popular" />
      <MoviesList
        list={popularMoviesList}
        width={width}
        type="sub"
        onItemPress={item =>
          navigation.navigate('Movie Detail', {movieId: item.id})
        }
      />
      <CategoryTitle title="Upcoming" />
      <MoviesList
        list={upcomingMoviesList}
        width={width}
        type="sub"
        onItemPress={item =>
          navigation.navigate('Movie Detail', {movieId: item.id})
        }
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.Black},
  // scrollViewContainer: {flex: 1},
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
