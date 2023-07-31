import React, {FC} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomIcon from './CustomIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface AppHeaderProps {
  name: string;
  header: string;
  onPress: () => void;
}

const AppHeader: FC<AppHeaderProps> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBackground} onPress={props.onPress}>
        <CustomIcon name={props.name} style={styles.iconStyle} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.header}</Text>
      <View style={styles.emptyContainer} />
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackground: {
    height: SPACING.space_20 * 2,
    width: SPACING.space_20 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.Orange,
  },
  iconStyle: {color: COLORS.White, fontSize: FONTSIZE.size_24},
  headerText: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_20,
    textAlign: 'center',
    color: COLORS.White,
  },
  emptyContainer: {height: SPACING.space_20 * 2, width: SPACING.space_20 * 2},
});
