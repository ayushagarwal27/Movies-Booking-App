import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {baseImagePath, movieCastDetails, movieDetails} from '../api/apiCalls';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import AppHeader from '../components/AppHeader';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../components/CustomIcon';
import CategoryTitle from '../components/CategoryTitle';
import CastCard from '../components/CastCard';

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
      setMovieCastData(tempCastsData.cast);
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
      <StatusBar hidden />
      <View>
        <ImageBackground
          source={{
            uri: baseImagePath('w780', movieData?.backdrop_path),
          }}
          style={styles.imageBG}>
          <LinearGradient
            colors={[COLORS.BlackRGB10, COLORS.Black]}
            style={styles.linearGradient}>
            <View style={styles.appHeaderContainer}>
              <AppHeader
                name="close"
                header={'Movie Details'}
                onPress={() => navigation.goBack()}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={[styles.imageBG]} />
        <Image
          source={{uri: baseImagePath('w342', movieData?.poster_path)}}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.timeContainer}>
        <CustomIcon name="clock" style={styles.clockIcon} />
        <Text style={styles.runtimeText}>
          {Math.floor(movieData?.runtime / 60)}h{' '}
          {Math.floor(movieData?.runtime % 60)}m
        </Text>
      </View>

      <View>
        <Text style={styles.title}>{movieData?.original_title}</Text>

        <View style={styles.genreContainer}>
          {movieData?.genres.map((genre: any) => (
            <View style={styles.genreBox} key={genre.id}>
              <Text style={styles.genreText}>{genre.name}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.tagline}>{movieData?.tagline}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.rateContainer}>
          <CustomIcon name="star" style={styles.starIcon} />
          <Text style={styles.runtimeText}>
            {movieData?.vote_average.toFixed(1)} ({movieData?.vote_count})
          </Text>
          <Text style={styles.runtimeText}>
            {movieData?.release_date.substring(8, 10)}{' '}
            {new Date(movieData?.release_date).toLocaleString('default', {
              month: 'long',
            })}{' '}
            {movieData?.release_date.substring(0, 4)}
          </Text>
        </View>
        <Text style={styles.overview}>{movieData?.overview}</Text>
      </View>
      <View>
        <CategoryTitle title="Top Cast" />
        <FlatList
          data={movieCastData}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.containerGap24}
          renderItem={({item, index}) => (
            <CastCard
              shouldMarginatedAtEnd={true}
              cardWidth={80}
              isFirst={index === 0}
              isLast={index === movieCastData?.length - 1}
              imagePath={baseImagePath('w185', item.profile_path)}
              title={item.original_name}
              subtitle={item.character}
            />
          )}
        />
        <View>
          <TouchableOpacity
            style={styles.buttonBackground}
            onPress={() =>
              navigation.push('Seat Booking', {
                bgImg: baseImagePath('w780', movieData.backdrop_path),
                posterImg: baseImagePath('original', movieData.poster_path),
              })
            }>
            <Text style={styles.buttonText}>Select Seats</Text>
          </TouchableOpacity>
        </View>
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
  imageBG: {
    width: '100%',
    aspectRatio: 3072 / 1727,
  },
  linearGradient: {height: '100%'},
  cardImage: {
    width: '60%',
    aspectRatio: 200 / 300,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  clockIcon: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.WhiteRGBA50,
    marginRight: SPACING.space_8,
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: SPACING.space_15,
  },
  runtimeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  title: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_24,
    color: COLORS.White,
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_15,
    textAlign: 'center',
  },
  genreContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: SPACING.space_20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  genreBox: {
    borderColor: COLORS.WhiteRGBA50,
    borderWidth: 1,
    paddingHorizontal: SPACING.space_10,
    paddingVertical: SPACING.space_4,
    borderRadius: BORDERRADIUS.radius_25,
  },
  genreText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.WhiteRGBA75,
  },
  tagline: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    fontStyle: 'italic',
    color: COLORS.White,
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_15,
    textAlign: 'center',
  },
  infoContainer: {marginHorizontal: SPACING.space_24},
  rateContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  starIcon: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.Yellow,
  },
  overview: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  containerGap24: {
    gap: SPACING.space_24,
  },
  buttonBackground: {
    alignItems: 'center',
    marginVertical: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_25 * 2,
    overflow: 'hidden',
  },
  buttonText: {
    borderRadius: BORDERRADIUS.radius_20,
    overflow: 'hidden',
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_10,
    backgroundColor: COLORS.Orange,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
});
