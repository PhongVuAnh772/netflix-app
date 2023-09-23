import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import user from '../../../../assets/Profile/icon3.png';
import {ScrollView} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/FontAwesome';

import Content from '../Content';

const DownLoadContentMore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.headerBack}>
            <Icon
              name="arrow-back"
              size={28}
              color="white"
              style={styles.arrowBack}
            />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>Tải xuống thông minh</Text>
        </View>
        <View style={styles.headerNotify}>
          <Icon name="search" size={28} color="white" />
          <View style={styles.WraplogoUser}>
            <Image style={styles.logoUser} source={user} />
          </View>
        </View>
      </View>
      <Content />
    </View>
  );
};

export default DownLoadContentMore;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 13,
  },
  container: {flex: 1, backgroundColor: 'black'},
  logoUser: {
    height: 30,
    width: 30,
    borderRadius: 6,
  },
  logoUserDown: {
    height: 230,
    width: 280,
    borderRadius: 6,
  },
  WraplogoUser: {
    paddingLeft: 15,
  },
  headerNotify: {
    flexDirection: 'row',
  },
  arrowBack: {paddingTop: 3},
  titleHeader: {
    color: 'white',
    fontWeight: '500',
    fontSize: 22,
    paddingHorizontal: 5,
  },
  headerLeft: {flexDirection: 'row'},
});
