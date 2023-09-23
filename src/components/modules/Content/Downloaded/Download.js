import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import user from '../../../../assets/Profile/icon3.png';
import OctIcons from 'react-native-vector-icons/FontAwesome5';
import download from '../../../../assets/download.png';
import {useNavigation} from '@react-navigation/native';

const Download = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Tệp tải xuống</Text>
        <View style={styles.headerNotify}>
          <Icon name="search" size={28} color="white" />
          <View style={styles.WraplogoUser}>
            <Image style={styles.logoUser} source={user} />
          </View>
        </View>
      </View>
      <View style={styles.contentDownload}>
        <View style={styles.downloadContainer}>
          <TouchableOpacity
            style={styles.buttonDownloadIntelligent}
            onPress={() => navigation.navigate('DownLoadIntelligent')}>
            <Icon name="settings" size={28} color="gray" />
            <Text style={styles.textDownloadHeaderIntelligent}>
              Tải xuống thông minh
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDownloadSetting}>
            <OctIcons name="pencil-alt" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.downloadDesc}>
          <Text style={styles.textDownloadHeader}>
            Giới thiệu Tệp tải xuống cho bạn
          </Text>
          <Text style={styles.textDownloadHeaderDescc}>
            Chúng tôi sẽ tải xuống một loạt phim và chương trình được tuyển chọn
            riêng cho bạn, sao cho bạn luôn có nội dung nào đó để xem trên điện
            thoại
          </Text>
          <View style={styles.DescDownloadIcon}>
            <Image style={styles.logoUserDown} source={download} />
          </View>
          <TouchableOpacity style={styles.buttonDownloadHeader}>
            <Text style={styles.textbuttonDownloadHeader}>Thiết lập</Text>
          </TouchableOpacity>
          <View style={styles.containerbuttonDownload}>
            <TouchableOpacity
              style={styles.buttonDownload}
              onPress={() => navigation.navigate('DownLoadContentMore')}>
              <Text style={styles.textbuttonDownloadHeaderContent}>
                Tìm thêm nội dung để tải xuống
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  textDownloadHeaderIntelligent: {
    color: 'gray',
    fontSize: 16,
    paddingTop: 4,
    paddingLeft: 5,
  },
  textDownloadHeaderDescc: {
    paddingTop: 7,
    color: 'gray',
    fontSize: 17,
    paddingRight: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 18,
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
  titleHeader: {
    color: 'white',
    fontWeight: '500',
    fontSize: 22,
  },
  buttonDownloadIntelligent: {
    flexDirection: 'row',
  },
  downloadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  textDownloadHeader: {
    fontSize: 20,
    paddingTop: 4,
    paddingLeft: 4,
    color: 'white',
  },
  contentDownload: {
    paddingHorizontal: 7,
  },
  downloadDesc: {},
  DescDownloadIcon: {justifyContent: 'center', alignItems: 'center'},
  buttonDownloadHeader: {
    paddingVertical: 15,
    backgroundColor: 'rgb(0, 113, 235)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textbuttonDownloadHeader: {
    color: 'white',
    fontSize: 16,
  },
  textbuttonDownloadHeaderContent: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonDownload: {
    paddingVertical: 6,
    backgroundColor: 'rgb(38, 38, 38)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  containerbuttonDownload: {
    paddingTop: 50,
    paddingHorizontal: 60,
  },
});
