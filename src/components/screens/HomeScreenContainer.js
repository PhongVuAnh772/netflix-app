import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabHomeScreen from '../modules/Content/HomeScreen/ListFilm/TabHomeScreen';
import FilmSpecified from '../modules/Content/HomeScreen/ListFilm/FilmSpecified/FilmSpecified';
import EpisodeList from '../modules/Content/HomeScreen/ListFilm/FilmSpecified/Dropdown/EpisodeList';
import TrailerList from '../modules/Content/HomeScreen/ListFilm/FilmSpecified/Dropdown/TrailerList';
import DownLoadIntelligent from '../modules/Content/Downloaded/DownloadIntelligent/DownloadIntelligent';
import DownLoadContentMore from '../modules/Content/Downloaded/DownLoadContentMore';

const Stack = createStackNavigator();
const HomeScreenContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabHomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FilmSpecified"
        component={FilmSpecified}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Thông tin" component={EpisodeList} />
      <Stack.Screen name="Comment" component={TrailerList} />
      <Stack.Screen
        name="DownLoadIntelligent"
        component={DownLoadIntelligent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DownLoadContentMore"
        component={DownLoadContentMore}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenContainer;

const styles = StyleSheet.create({});
