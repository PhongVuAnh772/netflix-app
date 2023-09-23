import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';

import {React, useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const ListFilm = ({url, title}) => {
  const [movies, setMovies] = useState([]);
  const genres = {
    'Phim hành động': 28,
    'Phim hài': 35,
    'Phim kinh dị': 27,
    'Tội phạm có thật': 80,
    'Phim tài liệu': 99,
  };
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let params = {
          api_key: '453a4356643d58f38c56abbf169ccdb6',
          language: 'en-US',
          page: 1,
        };

        // Kiểm tra nếu URL là discover/movie thì thêm tham số with_genres
        if (
          url === 'https://api.themoviedb.org/3/discover/movie' &&
          genres[title]
        ) {
          params = {...params, with_genres: genres[title]};
        }
        const response = await axios.get(url, {
          params,
        });

        setMovies(response.data.results.slice(0, 40));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [url, title, genres]);

  const renderItem = ({item}) => (
    <Pressable
      onPress={() => navigation.navigate('FilmSpecified', {item})}
      style={{paddingLeft: 13}}>
      <Image
        style={styles.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
      />
    </Pressable>
  );

  return (
    <View style={styles.listFilm}>
      <Text style={styles.titleList}>{title}</Text>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal
      />
    </View>
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
});
