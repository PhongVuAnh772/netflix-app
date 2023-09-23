import {StyleSheet, View} from 'react-native';
import React from 'react';
import HomeScreen from '../modules/Content/HomeScreen/ListFilm/TabHomeScreen';
import ContentNew from '../modules/Content/ContentNew/ContentNew';
import Download from '../modules/Content/Downloaded/Download';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WrapContentHot from '../modules/Content/ContentNew/WrapContentHot';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreenContainer from './HomeScreenContainer';

const TabHomeScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#8f8f8f',
          tabBarStyle: {
            backgroundColor: '#000000',
            height: 55,
          },
          tabBarLabelStyle: {
            fontSize: 13, // Kích thước của chữ
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Trang chủ') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Mới & Hot') {
              iconName = focused ? 'ondemand-video' : 'ondemand-video';
            } else if (route.name === 'Tệp tải xuống') {
              iconName = focused ? 'arrow-circle-down' : 'arrow-circle-down';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Trang chủ"
          component={HomeScreenContainer}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Mới & Hot" component={WrapContentHot} />
        <Tab.Screen name="Tệp tải xuống" component={Download} />
      </Tab.Navigator>
    </View>
  );
};

export default TabHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
