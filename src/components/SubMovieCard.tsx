import React, {FC} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface SubMovieCardProps {
  title: string;
  imagePath: string;
  shouldAddMarginAtEnd: boolean;
  shouldAddMarginAround?: boolean;
  onCardPress: () => void;
  cardWidth: number;
  isFirst?: boolean;
  isLast?: boolean;
}

const SubMovieCard: FC<SubMovieCardProps> = props => {
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
        <Text numberOfLines={1} style={styles.textTitle}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubMovieCard;

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
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
    textAlign: 'center',
    paddingVertical: SPACING.space_10,
  },
});
