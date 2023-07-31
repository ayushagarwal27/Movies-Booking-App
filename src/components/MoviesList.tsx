import React, {FC} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {SPACING} from '../theme/theme';
import SubMovieCard from './SubMovieCard';
import {baseImagePath} from '../api/apiCalls';
import MovieCard from './MovieCard';

interface MoviesListProps {
  list: Array<any>;
  onItemPress: (item: any) => void;
  width: number;
  type: 'main' | 'sub';
  numberOfCol?: number;
  listHeaderComponent?: any;
}

const MoviesList: FC<MoviesListProps> = props => {
  const card = (item: any, index: number) => {
    switch (props.type) {
      case 'sub': {
        return (
          <SubMovieCard
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
            shouldAddMarginAtEnd={props.listHeaderComponent ? false : true}
            shouldAddMarginAround={props.listHeaderComponent ? true : false}
            onCardPress={() => props.onItemPress(item)}
            cardWidth={
              props.listHeaderComponent
                ? props.width / 2 - SPACING.space_10 * 2
                : props.width / 3
            }
            isFirst={index === 0}
            isLast={index === props.list.length - 1}
          />
        );
      }

      case 'main': {
        return (
          <MovieCard
            title={item.original_title}
            imagePath={baseImagePath('w780', item.poster_path)}
            shouldAddMarginAtEnd={true}
            onCardPress={() => props.onItemPress(item)}
            cardWidth={props.width * 0.7}
            isFirst={index === 0}
            isLast={index === props.list.length - 1}
            genre={item.genre_ids.slice(1, 4)}
            voteAverage={item.vote_average}
            voteCount={item.vote_count}
          />
        );
      }
    }
  };

  return (
    <FlatList
      horizontal={props.numberOfCol ? false : true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={props.list}
      bounces={false}
      snapToInterval={
        props.type === 'main' ? props.width * 0.7 + SPACING.space_36 : undefined
      }
      decelerationRate={0}
      keyExtractor={item => item.id}
      contentContainerStyle={
        props.listHeaderComponent
          ? styles.centerContainer
          : styles.containerGap36
      }
      renderItem={({item, index}) => card(item, index)}
      numColumns={props.numberOfCol ? props.numberOfCol : 1}
      ListHeaderComponent={
        props.listHeaderComponent ? props.listHeaderComponent : null
      }
    />
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  containerGap36: {
    gap: SPACING.space_36,
  },
  centerContainer: {
    alignItems: 'center',
  },
});
