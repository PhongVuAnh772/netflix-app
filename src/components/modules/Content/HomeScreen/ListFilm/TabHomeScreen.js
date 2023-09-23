import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Content from '../../Content';
import Header from '../Header/Header';
const TabHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
};

export default TabHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
