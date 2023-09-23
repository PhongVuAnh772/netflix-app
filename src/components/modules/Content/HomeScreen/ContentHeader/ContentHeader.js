import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {React, useEffect, useState} from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import netflix from '../../../../../assets/netflix.png';
import top10 from '../../../../../assets/top10.png';
import {useNavigation} from '@react-navigation/native';
const ContentHeader = ({url, title, genres}) => {
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
        const response = await axios.get(url, {
          params,
        });

        if (response.data.results.length > 0) {
          setMovies(response.data.results[Math.floor(Math.random() * 10) + 1]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [url, title, genres]);
  console.log(movies);

  return (
    <View style={styles.listFilm}>
      <Image
        style={styles.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movies.poster_path}`,
        }}
      />

      <LinearGradient
        colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255,0)']}
        style={styles.gradient}>
        <View style={styles.listOfTrend}>
          <View style={styles.AllOfTitle}>
            <View style={styles.titleOfTrendTitle}>
              <Image style={styles.logo} source={netflix} />
              <Text style={styles.textTypeFilm}>loạt phim</Text>
            </View>
            <View style={styles.titleOfTrend}>
              <Text style={styles.textTypeFilmTitle}>
                {movies.original_title || movies.original_name}
              </Text>
            </View>
            <View style={styles.InforOfTrend}>
              <Text style={styles.textTypeFilmCheck}>
                Số điểm IMDB: {movies.vote_average}
              </Text>
            </View>
            <View style={styles.RankOfTrend}>
              <Image style={styles.logoTop10} source={top10} />
              <Text style={styles.textTypeFilmRanking}>
                #10 trong Phim tuyển chọn hôm nay
              </Text>
            </View>
          </View>

          <View style={styles.ButtonOfTrend}>
            <Pressable onPress={() => console.log('alo')}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: 'white',
                }}>
                <Icon name="add" size={24} color="white" />
                <Text style={{marginLeft: 8, color: 'white', paddingTop: 3}}>
                  Danh sách
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => console.log('alo')}>
              <View style={styles.buttonPlay}>
                <Icon name="play-arrow" size={24} color="black" />
                <Text
                  style={{marginLeft: 8, color: 'black', fontWeight: 'bold'}}>
                  Phát
                </Text>
              </View>
            </Pressable>

            <TouchableOpacity
              onPress={() => navigation.navigate('FilmSpecified', [movies])}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Icon name="error-outline" size={24} color="white" />
                <Text style={{marginLeft: 8, color: 'white', paddingTop: 3}}>
                  Thông tin
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ContentHeader;

const styles = StyleSheet.create({
  listFilm: {},
  poster: {
    width: '100%',
    height: 300,
  },
  logoTop10: {
    width: 30,
    height: 30,
  },
  logo: {width: 20, height: 20},
  titleList: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
    paddingVertical: 3,
  },
  ButtonOfTrend: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonPlay: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'white',
    paddingVertical: 3,
    paddingHorizontal: 13,
    borderRadius: 2,
    marginTop: 5,
  },
  gradient: {
    paddingVertical: 10,
    top: -110,
    width: '100%',
    // paddingBottom: 10,
  },
  AllOfTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleOfTrend: {paddingVertical: 5},
  titleOfTrendTitle: {flexDirection: 'row'},
  textTypeFilm: {
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: 'white',
    fontSize: 14,
  },
  textTypeFilmCheck: {
    color: 'white',
    fontSize: 16,
  },
  textTypeFilmTitle: {
    color: 'white',
    letterSpacing: 3,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',

    textAlign: 'center',
  },
  InforOfTrend: {
    paddingVertical: 7,
  },
  textTypeFilmRanking: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    paddingLeft: 5,
    paddingTop: 3,
  },
  RankOfTrend: {flexDirection: 'row', paddingVertical: 5},
});
