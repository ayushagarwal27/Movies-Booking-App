import React, {FC} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface MovieCardProps {
  title: string;
  imagePath: string;
  shouldAddMarginAtEnd: boolean;
  shouldAddMarginAround?: boolean;
  onCardPress: () => void;
  cardWidth: number;
  isFirst: boolean;
  isLast: boolean;
  genre: Array<any>;
  voteAverage: number;
  voteCount: number;
}

const genres: any = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentry',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystry',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

const MovieCard: FC<MovieCardProps> = props => {
  return (
    <TouchableOpacity onPress={props.onCardPress}>
      <View
        style={[
          styles.container,
          props.shouldAddMarginAtEnd
            ? props.isFirst
              ? {marginLeft: SPACING.space_36}
              : props.isLast
              ? {marginRight: SPACING.space_36}
              : {}
            : {},
          props.shouldAddMarginAround ? {margin: SPACING.space_12} : {},
          {maxWidth: props.cardWidth},
        ]}>
        <Image
          source={{uri: props.imagePath}}
          style={[styles.image, {width: props.cardWidth || '100%'}]}
        />
        <View>
          <View style={styles.rateContainer}>
            <CustomIcon name="star" style={styles.starIcon} />
            <Text style={styles.voteText}>
              {props.voteAverage} ({props.voteCount})
            </Text>
          </View>

          <Text numberOfLines={1} style={styles.textTitle}>
            {props.title}
          </Text>

          <View style={styles.genreContainer}>
            {props.genre.map(item => (
              <View key={item} style={styles.genreBox}>
                <Text style={styles.genreText}>{genres[item]}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  image: {
    aspectRatio: 2 / 3,
    borderRadius: BORDERRADIUS.radius_20,
  },
  textTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_24,
    color: COLORS.White,
    textAlign: 'center',
    paddingVertical: SPACING.space_10,
  },
  rateContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.space_10,
  },
  starIcon: {fontSize: 20, color: COLORS.Yellow},
  voteText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
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
    paddingVertical: SPACING.space_4,
    paddingHorizontal: SPACING.space_10,
    borderRadius: SPACING.space_20,
  },
  genreText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.WhiteRGBA75,
  },
});
