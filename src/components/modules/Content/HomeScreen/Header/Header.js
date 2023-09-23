import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import logo from '../../../../../assets/netflix.png';
import user from '../../../../../assets/Profile/icon3.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)']}
      style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.headerRight}>
        <Icon name="search" size={40} style={styles.iconSearch} color="white" />
        <View style={styles.iconUserContainer}>
          <Image style={styles.logoUser} source={user} />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Nâng cấp</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  headerLeft: {},
  logo: {
    width: 55,
    height: 55,
  },
  iconUserContainer: {
    paddingHorizontal: 20,
  },
  logoUser: {
    height: 40,
    width: 40,
    borderRadius: 6,
  },
  headerRight: {
    flexDirection: 'row',
    paddingRight: 7,
  },
  button: {
    paddingHorizontal: 25,
    backgroundColor: 'red',
    paddingVertical: 7,
    maxHeight: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
