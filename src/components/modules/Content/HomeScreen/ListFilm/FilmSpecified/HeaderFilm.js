import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../../../../../../assets/Profile/icon3.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const HeaderFilm = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)']}
      style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            style={styles.iconBack}
            size={30}
            name="arrow-back"
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerRight}>
        <Icon name="search" size={30} style={styles.iconSearch} color="white" />
        <View style={styles.iconUserContainer}>
          <Image style={styles.logoUser} source={logo} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default HeaderFilm;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  headerLeft: {},
  iconUserContainer: {
    paddingHorizontal: 20,
  },
  logoUser: {
    height: 30,
    width: 30,
    borderRadius: 6,
  },
  headerRight: {
    flexDirection: 'row',
    paddingRight: 7,
  },
  iconBack: {
    paddingHorizontal: 10,
  },
});
