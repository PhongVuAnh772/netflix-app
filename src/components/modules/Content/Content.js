import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import ListFilm from './HomeScreen/ListFilm/ListFilm';
import ContentHeader from './HomeScreen/ContentHeader/ContentHeader';
const Content = () => {
  return (
    <ScrollView style={styles.container}>
      <ContentHeader url="https://api.themoviedb.org/3/trending/all/day" />
      <View style={styles.containerListFilm}>
        <ListFilm
          url="https://api.themoviedb.org/3/trending/all/day"
          title="Chỉ có trên Netflix"
        />
        <ListFilm
          url="https://api.themoviedb.org/3/discover/movie"
          title="Phim hành động"
        />
        <ListFilm
          url="https://api.themoviedb.org/3/discover/movie"
          title="Tội phạm có thật"
        />
        <ListFilm
          url="https://api.themoviedb.org/3/discover/movie"
          title="Phim tài liệu"
        />
        {/* ?api_key=453a4356643d58f38c56abbf169ccdb6&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=2022&with_genres=28 */}

        {/* <ListFilm
        url={apiList[0].getPopular.apiUrl}
        title="Phim & chương trình truyền hình Đông Nam Á"
      /> */}
      </View>
    </ScrollView>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
  containerListFilm: {
    marginTop: -50,
  },
});
