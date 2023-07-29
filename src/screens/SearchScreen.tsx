import React, {FC, useState} from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {COLORS, SPACING} from '../theme/theme';
import MoviesList from '../components/MoviesList';
import {searchMovies} from '../api/apiCalls';
import InputHeader from '../components/InputHeader';

interface SearchScreenProps {}

const {width} = Dimensions.get('window');

const SearchScreen: FC<SearchScreenProps> = ({navigation}: any) => {
  const [searchList, setSearchList] = useState([]);

  const searchMoviesListfn = async (name: string) => {
    try {
      const res = await fetch(searchMovies(name));
      const json = await res.json();
      setSearchList(json.results);
    } catch (error) {
      console.error('Something went wrong in searchMoviesListfn');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <MoviesList
        list={searchList}
        width={width}
        numberOfCol={2}
        type="sub"
        onItemPress={item =>
          navigation.navigate('Movie Detail', {movieId: item.id})
        }
        listHeaderComponent={
          <View style={styles.inputHeaderContainer}>
            <InputHeader onSearch={searchMoviesListfn} />
          </View>
        }
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.Black,
    width,
  },
  inputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
    marginBottom: SPACING.space_28 - SPACING.space_12,
  },
});
