import React, {FC} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {SPACING} from '../theme/theme';
import SubMovieCard from './SubMovieCard';
import {baseImagePath} from '../api/apiCalls';

interface MoviesListProps {
  list: Array<any>;
  onItemPress: (item: any) => void;
  width: number;
}

const MoviesList: FC<MoviesListProps> = props => {
  return (
    <FlatList
      horizontal
      data={props.list}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.containerGap36}
      renderItem={({item, index}) => (
        <SubMovieCard
          title={item.original_title}
          imagePath={baseImagePath('w342', item.poster_path)}
          shouldAddMarginAtEnd={true}
          onCardPress={() => props.onItemPress(item)}
          cardWidth={props.width / 3}
          isFirst={index === 0}
          isLast={index === props.list.length - 1}
        />
      )}
    />
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  containerGap36: {
    gap: SPACING.space_36,
  },
});
