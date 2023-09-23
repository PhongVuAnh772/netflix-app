import React, {useState, useCallback, useRef, useEffect, FlatList} from 'react';
import {
  Button,
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderFilm from './HeaderFilm';
import axios from 'axios';
import logo from '../../../../../../assets/netflix.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EpisodeList from './Dropdown/EpisodeList';
import TrailerList from './Dropdown/TrailerList';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ContentNew from '../../../ContentNew/ContentNew';
import ContentCorresponding from './Dropdown/ContentCorresponding';
import {useNavigation} from '@react-navigation/native';

export default function FilmSpecified() {
  const navigation = useNavigation();

  const Tab = createMaterialTopTabNavigator();

  const [playing, setPlaying] = useState(true);
  const route = useRoute();
  const [movies, setMovies] = useState([]);
  const [cast, setCast] = useState([]);
  const [directorAPI, setdirectorAPI] = useState([]);

  const {item} = route.params;
  console.log(item);
  const yearFilm = item.release_date;
  const date = new Date(yearFilm);
  const year = date.getFullYear();
  const params = {
    api_key: '453a4356643d58f38c56abbf169ccdb6',
    append_to_response: 'videos',
  };
  const [showMore, setShowMore] = useState(false);
  const maxItemsToShow = 2;
  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };
  const Stack = createStackNavigator();
  // console.log(item);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${item.id}`,
          {params},
        );

        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${item.id}/credits`, {params})
      .then(response => {
        const credits = response.data;
        const authors = credits.cast.filter(
          person =>
            person.job === 'Director' || person.department === 'Writing',
        );
        setCast(response.data.cast.map(actor => actor.name));
        setdirectorAPI(
          response.data.cast.filter(actor => actor.job === 'Director'),
        );
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const RenderVideo = () => {
    if (videokey) {
      return (
        <YoutubePlayer
          height={230}
          play={playing}
          videoId={videokey}
          onChangeState={onStateChange}
          controls={false}
        />
      );
    } else {
      return <View style={styles.noVideo}></View>;
    }
  };
  const videokey = movies.videos?.results[0]?.key;
  // console.log(movies);
  // console.log(videokey);
  // console.log(directorAPI);
  const nameListdisplayArray = cast.length > 0 ? cast.slice(0, 4) : [];
  const nameListdisPlay = cast.length > 0 ? cast.slice(3, 4) : [];

  const directorArr = directorAPI.length > 0 ? directorAPI : [];
  const displayDirector = nameListdisPlay.join(', ');

  const itemsToRender = showMore
    ? nameListdisplayArray
    : nameListdisplayArray.slice(0, maxItemsToShow);

  const displayArray = itemsToRender.join(', ');

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(true);
    }
  }, []);
  // console.log(directorAPI);

  return (
    <View style={styles.container}>
      <HeaderFilm />

      <ScrollView>
        <RenderVideo />
        <View style={styles.titleEventContainer}>
          <View style={styles.titleCompany}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.textTitleCompany}>loạt phim</Text>
          </View>
          <View style={styles.titleCompany}>
            <Text style={styles.textTitleFilm}>{item.original_title}</Text>
          </View>
          <View style={styles.titleCompany}>
            <Text style={styles.textFilmInfor}>{year}</Text>
            <View style={styles.TitleFilmAge}>
              <Text style={styles.textTitleFilmAge}>
                {item.adult ? '18+' : '16+'}
              </Text>
            </View>

            <Text style={styles.textFilmInfor}>
              Lượt xem : {item.popularity}
            </Text>
          </View>
          <View style={styles.buttonPlaying}>
            <TouchableOpacity style={styles.buttonOverlay}>
              <Icon name="play-arrow" size={24} color="black" />

              <Text style={styles.textPlaying}>Phát</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDownloading}>
              <Icon
                name="file-download"
                size={24}
                color="white"
                style={{paddingLeft: 12, paddingVertical: 1}}
              />

              <Text style={styles.textDownload}>Tải xuống T1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.filmDesc}>
            <Text style={styles.textFilmDesc}>{item.overview}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white'}}>Diễn viên : {displayArray}</Text>
              {cast.length > maxItemsToShow && (
                <TouchableOpacity
                  onPress={showMore ? handleShowLess : handleShowMore}>
                  <Text style={{color: 'white'}}>
                    {showMore ? '' : '  ...thêm'}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <Text style={{color: 'white'}}>Tác giả : {displayDirector}</Text>
            <View style={styles.allButtonEvent}>
              <TouchableOpacity
                onPress={() => navigation.navigate('FilmSpecified', {item})}
                style={styles.buttonContainerDrop}>
                <Icon
                  name="add"
                  size={27}
                  color="white"
                  style={{paddingLeft: 12, paddingBottom: 10}}
                />

                <Text style={styles.textButtonDrop}>Danh sách</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainerDrop}>
                <Icon
                  name="thumb-up-off-alt"
                  size={27}
                  color="white"
                  style={{paddingLeft: 12, paddingBottom: 10}}
                />

                <Text style={styles.textButtonDrop}>Xếp hạng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainerDrop}>
                <Icon
                  name="share"
                  size={27}
                  color="white"
                  style={{paddingLeft: 12, paddingBottom: 10}}
                />

                <Text style={styles.textButtonDrop}>Chia sẻ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainerDrop}>
                <Icon
                  name="file-download"
                  size={27}
                  color="white"
                  style={{paddingLeft: 12, paddingBottom: 10}}
                />

                <Text style={styles.textButtonDrop}>Tải xuống</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ContentNew} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  logo: {width: 30, height: 30},
  titleEventContainer: {
    flexDirection: 'column',
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  titleCompany: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  textTitleCompany: {
    textTransform: 'uppercase',
    letterSpacing: 5,
    color: 'white',
    fontSize: 14,
    paddingTop: 5,
    fontWeight: '500',
  },
  textTitleFilm: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  },
  textFilmInfor: {color: 'rgb(169, 169, 169)', fontSize: 15},
  textTitleFilmAge: {
    color: 'rgb(169, 169, 169)',
    backgroundColor: 'rgb(54, 54, 54)',
    fontSize: 14,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  TitleFilmAge: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  buttonOverlay: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonDownloading: {
    marginTop: 7,
    backgroundColor: 'rgb(38, 38, 38)',
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonPlaying: {
    paddingTop: 15,
  },
  textPlaying: {
    fontSize: 17,
    color: 'black',
    fontWeight: '700',
  },
  textDownload: {
    fontSize: 17,
    color: 'white',
    fontWeight: '700',
  },
  textFilmDesc: {
    color: 'white',
    paddingVertical: 5,
    fontSize: 16,
  },
  allButtonEvent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  buttonContainerDrop: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textButtonDrop: {color: 'white', textAlign: 'center'},
});
