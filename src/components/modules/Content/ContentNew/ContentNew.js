import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import HeaderHot from './HeaderHot/HeaderHot';
import ContentHot from './ContentHot/ContentHot';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EpisodeList from '../HomeScreen/ListFilm/FilmSpecified/Dropdown/EpisodeList';
import ContentCorresponding from '../HomeScreen/ListFilm/FilmSpecified/Dropdown/ContentCorresponding';

const ContentNew = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#8f8f8f',
        activeBackgroundColor: 'white',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        activeBackgroundColor: '#c4461c',
        inactiveBackgroundColor: '#b55031',
        style: {
          backgroundColor: '#CE4418',
        },

        tabBarStyle: {
          backgroundColor: '#000000',
          width: 320,
          borderRadius: 20,
          height: 50,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
          fontWeight: 'bold',
        },
        barStyle: {width: 400},
        tabBarIconStyle: {
          right: 55,
          top: 2,
          position: 'absolute',
        },
        tabBarIndicatorStyle: {display: 'none'},
      })}>
      <Tab.Screen
        name="Sắp ra mắt"
        component={ContentCorresponding}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../../../assets/popcorn.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mọi người đang xem"
        component={ContentHot}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../../../assets/flames.png')}
              style={{
                width: 15,
                height: 20,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ContentNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
  },
});
