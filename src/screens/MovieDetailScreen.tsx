import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {movieCastDetails, movieDetails} from '../api/apiCalls';
import {COLORS, SPACING} from '../theme/theme';
import AppHeader from '../components/AppHeader';

const getMovieDetails = async (movieId: number) => {
  try {
    const res = await fetch(movieDetails(movieId));
    const json = await res.json();
    return json;
  } catch (error) {
    console.error('Something went wrong in getMovieDetailsFn', error);
  }
};

const getMovieCastDetails = async (movieId: number) => {
  try {
    const res = await fetch(movieCastDetails(movieId));
    const json = await res.json();
    return json;
  } catch (error) {
    console.error('Something went wrong in getMovieCastDetailsFn', error);
  }
};

const MoviesDetailScreen: React.FC = ({navigation, route}: any) => {
  const [movieData, setMovieData] = useState<any>(undefined);
  const [movieCastData, setMovieCastData] = useState<any>(undefined);

  useEffect(() => {
    (async () => {
      const {movieId} = route.params;
      const tempMoviesData = await getMovieDetails(movieId);
      setMovieData(tempMoviesData);
      const tempCastsData = await getMovieCastDetails(movieId);
      setMovieCastData(tempCastsData);
    })();
  }, [route.params]);

  if (!movieData && !movieCastData) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.contentContainerStyles}
        showsVerticalScrollIndicator={false}>
        <View style={styles.appHeaderContainer}>
          <AppHeader
            name="close"
            header={'Movie Details'}
            onPress={() => navigation.goBack()}
          />
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
      <View style={styles.appHeaderContainer}>
        <AppHeader
          name="close"
          header={''}
          onPress={() => navigation.goBack()}
        />
      </View>
    </ScrollView>
  );
};

export default MoviesDetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.Black},
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  contentContainerStyles: {
    flex: 1,
  },
});
