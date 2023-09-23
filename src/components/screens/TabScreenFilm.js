import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ContentNew from '../modules/Content/ContentNew/ContentNew';

const Stack = createStackNavigator();

const TabScreenFilm = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ContentNew} />
    </Stack.Navigator>
  );
};

export default TabScreenFilm;

const styles = StyleSheet.create({});
