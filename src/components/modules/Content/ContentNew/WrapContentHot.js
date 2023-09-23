import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import user from '../../../../assets/Profile/icon3.png';
import ContentNew from './ContentNew';

const WrapContentHot = () => {
  const Stack = createStackNavigator();

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Mới & Hot</Text>
        <View style={styles.headerNotify}>
          <Icon name="notifications-none" size={28} color="white" />
          <View style={styles.WraplogoUser}>
            <Image style={styles.logoUser} source={user} />
          </View>
        </View>
      </View>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ContentNew}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
};

export default WrapContentHot;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  logoUser: {
    height: 30,
    width: 30,
    borderRadius: 6,
  },
  WraplogoUser: {
    paddingLeft: 15,
  },
  headerNotify: {
    flexDirection: 'row',
  },
  titleHeader: {
    color: 'white',
    fontWeight: '500',
    fontSize: 22,
  },
});
