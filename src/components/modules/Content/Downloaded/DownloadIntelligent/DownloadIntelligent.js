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
import user from '../../../../../assets/Profile/icon3.png';
import {ScrollView} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/FontAwesome';

const DownLoadIntelligent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledTwice, setIsEnabledTwice] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const navigation = useNavigation();
  const options = {
    style: 'decimal',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    locale: 'de-DE', // hoặc 'fr-FR'
  };
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  const toggleSwitchTwice = () => {
    setIsEnabledTwice(previousState => !previousState);
  };

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.headerBack}>
            <Icon name="arrow-back" size={28} color="white" />
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
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.contentContainerView}>
            <Text style={styles.contentTextHeader}>
              Tải xuống tập tiếp theo
            </Text>

            <View style={styles.contentContainerSwitch}>
              <Icon
                name="skip-next"
                size={30}
                color="white"
                style={styles.contentDecsLogo}
              />
              <View style={styles.contentDecs}>
                <Text style={styles.contentTextDecs}>
                  Khi bạn xem một tập của loạt phim đã tải xuống, chúng tôi sẽ
                  tìm tập tiếp theo cho bạn và xóa tập bạn đã xem xong. Chỉ thực
                  hiện tải xuống khi có Wi-Fi
                </Text>
              </View>

              <Switch
                trackColor={{false: '#767577', true: 'rgb(3, 112, 232)'}}
                thumbColor={isEnabled ? 'white' : 'white'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View style={styles.contentContainerView}>
            <Text style={styles.contentTextHeader}>Tệp tải xuống cho bạn</Text>

            <View style={styles.contentContainerSwitch}>
              <Icon
                name="file-download"
                size={30}
                color="white"
                style={styles.contentDecsLogo}
              />
              <View style={styles.contentDecs}>
                <Text style={styles.contentTextDecsTwice}>
                  Chúng tôi đã tải xuống một loạt phim và chương trình tuyển
                  chọn nhằm giúp bạn luôn có nội dung phù hợp để xem. Chỉ thực
                  hiện tải xuống khi có Wi-Fi
                </Text>
              </View>
              <Switch
                trackColor={{false: '#767577', true: 'rgb(3, 112, 232)'}}
                thumbColor={isEnabledTwice ? 'white' : 'white'}
                onValueChange={toggleSwitchTwice}
                value={isEnabledTwice}
              />
            </View>
            {isEnabledTwice ? (
              <>
                <View style={styles.contentContainerView}>
                  <Text style={styles.contentTextHeader}>
                    Phân bổ dung lượng
                  </Text>

                  <View style={styles.contentContainerSwitch}>
                    <Icon
                      name="store-mall-directory"
                      size={30}
                      color="white"
                      style={styles.contentDecsLogo}
                    />
                    <View style={styles.contentDecsBottom}>
                      <Text style={styles.contentTextDecBottom}>
                        Khi bạn xem một tập của loạt phim đã tải xuống, chúng
                        tôi sẽ tìm tập tiếp theo cho bạn và xóa tập bạn đã xem
                        xong. Chỉ thực hiện tải xuống khi có Wi-Fi
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.contentContainerUser}>
                  <View style={styles.contentWrapUser}>
                    <Image style={styles.logoUser} source={user} />
                    <Text
                      style={{
                        color: 'white',
                        paddingHorizontal: 10,
                        fontSize: 16,
                      }}>
                      Người dùng 1
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() => {
                        if (quantity > 0) {
                          setQuantity(quantity - 0.5);
                        }
                      }}>
                      <Icons
                        name="minus"
                        size={15}
                        color="white"
                        style={styles.minusIcon}
                      />
                    </TouchableOpacity>
                    <View style={styles.resultsOpacityWrap}>
                      <Text style={styles.resultsOpacity}>
                        {quantity.toLocaleString('de-DE', options)}
                      </Text>
                      <Text style={styles.resultsOpacityRoll}>GB</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => setQuantity(quantity + 0.5)}>
                      <Icons
                        name="plus"
                        size={15}
                        color="white"
                        style={styles.plusIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : (
              <View style={styles.disabled}>
                <View style={styles.contentContainerView}>
                  <Text style={styles.contentTextHeader}>
                    Phân bổ dung lượng
                  </Text>

                  <View style={styles.contentContainerSwitch}>
                    <Icon
                      name="store-mall-directory"
                      size={30}
                      color="white"
                      style={styles.contentDecsLogo}
                    />
                    <View style={styles.contentDecsBottom}>
                      <Text style={styles.contentTextDecBottom}>
                        Khi bạn xem một tập của loạt phim đã tải xuống, chúng
                        tôi sẽ tìm tập tiếp theo cho bạn và xóa tập bạn đã xem
                        xong. Chỉ thực hiện tải xuống khi có Wi-Fi
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.contentContainerUser}>
                  <View style={styles.contentWrapUser}>
                    <Image style={styles.logoUser} source={user} />
                    <Text
                      style={{
                        color: 'white',
                        paddingHorizontal: 10,
                        fontSize: 16,
                      }}>
                      Người dùng 1
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      disabled
                      onPress={() => {
                        if (quantity > 0) {
                          setQuantity(quantity - 0.5);
                        }
                      }}>
                      <Icons
                        name="minus"
                        size={15}
                        color="white"
                        style={styles.minusIcon}
                      />
                    </TouchableOpacity>
                    <View style={styles.resultsOpacityWrap}>
                      <Text style={styles.resultsOpacity}>
                        {quantity.toLocaleString('de-DE', options)}
                      </Text>
                      <Text style={styles.resultsOpacityRoll}>GB</Text>
                    </View>
                    <TouchableOpacity
                      disabled
                      onPress={() => setQuantity(quantity + 0.5)}>
                      <Icons
                        name="plus"
                        size={15}
                        color="white"
                        style={styles.plusIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default DownLoadIntelligent;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 18,
    paddingVertical: 13,
  },
  container: {flex: 1, backgroundColor: 'black'},
  headerBack: {paddingTop: 2},
  headerNotify: {
    flexDirection: 'row',
  },
  titleHeader: {
    color: 'white',
    fontWeight: '500',
    fontSize: 22,
    paddingLeft: 7,
  },
  WraplogoUser: {
    paddingLeft: 15,
  },
  logoUser: {
    height: 30,
    width: 30,
    borderRadius: 6,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  contentTextHeader: {
    color: 'white',
    fontSize: 17,
    paddingLeft: 7,
  },
  contentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    // flexDirection: 'row',
  },
  contentContainerView: {},

  contentContainerSwitch: {
    flexDirection: 'row',
    paddingVertical: 30,
  },
  contentTextDecs: {
    paddingRight: 18,
    color: 'white',
    fontSize: 16,
  },
  contentTextDecsTwice: {
    paddingRight: 10,
    color: 'white',
    fontSize: 16,
  },
  contentDecsLogo: {
    paddingTop: 24,
  },
  contentDecs: {width: '80%', paddingHorizontal: 7},
  contentTextDecBottom: {color: 'white', fontSize: 16, width: '100%'},
  contentDecsBottom: {width: '90%', paddingHorizontal: 7},
  contentContainerUser: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 5,
  },
  contentWrapUser: {flexDirection: 'row', alignItems: 'center'},
  minusIcon: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  plusIcon: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  resultsOpacity: {
    paddingHorizontal: 10,
    color: 'white',
    fontWeight: '500',
    fontSize: 23,
  },
  resultsOpacityRoll: {
    paddingHorizontal: 10,
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  resultsOpacityWrap: {
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
    // any other styles you want to apply when disabled
  },
});
