import React, {FC} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

const CastCard: FC<any> = ({
  imagePath,
  title,
  subtitle,
  shouldMarginatedAtEnd,
  isFirst,
  isLast,
  cardWidth,
}: any) => {
  return (
    <View
      style={[
        styles.container,
        shouldMarginatedAtEnd
          ? isFirst
            ? {marginLeft: SPACING.space_24}
            : isLast
            ? {marginRight: SPACING.space_24}
            : {}
          : {},
        {maxWidth: cardWidth},
      ]}>
      <Image
        source={{uri: imagePath}}
        style={[styles.cardImg, {width: cardWidth}]}
      />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.subtitle} numberOfLines={1}>
        {subtitle}
      </Text>
    </View>
  );
};

export default CastCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cardImg: {aspectRatio: 1920 / 2880, borderRadius: BORDERRADIUS.radius_25 * 4},
  title: {
    alignSelf: 'stretch',
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.White,
  },
  subtitle: {
    alignSelf: 'stretch',
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.White,
  },
});
