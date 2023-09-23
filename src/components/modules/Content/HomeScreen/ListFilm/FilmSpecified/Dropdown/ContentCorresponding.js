import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';

import {React, useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const ListFilm = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let params = {
          api_key: '453a4356643d58f38c56abbf169ccdb6',
          language: 'en-US',
          page: 1,
        };

        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/all/day',
          {
            params,
          },
        );

        setMovies(response.data.results.slice(0, 22));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  const renderData = () => {
    return (
      <>
        {movies.map(item => {
          return (
            <Pressable
              key={item.poster_path}
              onPress={() => navigation.navigate('FilmSpecified', {item})}
              style={{paddingHorizontal: 15, paddingVertical: 20}}>
              <Image
                style={styles.poster}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                }}
              />
            </Pressable>
          );
        })}
      </>
    );
  };
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View style={styles.listFilm}>{renderData()}</View>
    </ScrollView>
  );
};

export default ListFilm;

const styles = StyleSheet.create({
  listFilm: {
    marginRight: 10,
  },
  poster: {
    width: 90,
    height: 140,
  },
  titleList: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
    paddingVertical: 3,
  },
  listFilm: {
    // marginRight: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
