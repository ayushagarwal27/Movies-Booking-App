import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

interface CategoryTitleProps {
  title: string;
}

const CategoryTitle: FC<CategoryTitleProps> = props => {
  return <Text style={styles.text}>{props.title}</Text>;
};

export default CategoryTitle;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.White,
    paddingHorizontal: SPACING.space_36,
    paddingVertical: SPACING.space_28,
  },
});
