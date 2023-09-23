import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import ContentCorresponding from './ContentCorresponding';
import YoutubePlayer from 'react-native-youtube-iframe';

const EpisodeList = () => {
  const params = {
    api_key: '453a4356643d58f38c56abbf169ccdb6',
    append_to_response: 'videos',
  };
  const [trailers, setTrailers] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/155`, {params})
      .then(response => {
        const credits = response.data;
        setTrailers(credits?.videos?.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  // console.log(trailers);
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);
  const RenderVideo = videoId => {
    if (videoId) {
      return (
        <YoutubePlayer
          height={230}
          play={false}
          videoId={videoId}
          onChangeState={onStateChange}
          controls={false}
        />
      );
    } else {
      return <View style={styles.noVideo}></View>;
    }
  };
  const renderData = () => {
    return trailers.map(item => {
      return (
        <View style={styles.container} key={item.key}>
          <View style={styles.video}>
            <RenderVideo videoId={item.key} />
          </View>
          <Text style={{color: 'white', fontSize: 16, paddingVertical: 6}}>
            {item.name}
          </Text>
        </View>
      );
    });
  };
  return <View>{renderData()}</View>;
};

export default EpisodeList;

const styles = StyleSheet.create({
  titleFilm: {
    color: 'white',
  },
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  video: {
    borderWidth: 1,
    borderColor: 'white',
  },
});
