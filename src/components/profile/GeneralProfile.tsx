import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TitleReusable from '../../reusables/Text/TitleReusable';
import {COLORS, FONTS, SIZES} from '../../constant/theme';
import HeightSpacer from '../../reusables/height_spacer/HeightSpacer';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const options = [
  {
    id: 1,
    title: 'Khách hàng thân thiết',
    screen: 'Cart',
    icon: () => (
      <MaterialCommunityIcons name="heart" size={25} color="#D13852" />
    ),
  },
  {
    id: 2,
    title: 'Bán hàng cùng Ewamall',
    screen: 'Categories',
    icon: () => (
      <MaterialCommunityIcons name="heart" size={25} color="#D13852" />
    ),
  },
  {
    id: 3,
    title: 'Đã thích',
    screen: 'Home',
    icon: () => (
      <MaterialCommunityIcons name="heart" size={25} color="#D13852" />
    ),
  },
  {
    id: 4,
    title: 'Đã xem gần đây',
    screen: 'Voucher',
    icon: () => (
      <MaterialCommunityIcons name="heart" size={25} color="#D13852" />
    ),
  },
  {
    id: 5,
    title: 'Shop đang theo dõi',
    screen: 'Profile',
    icon: () => (
      <MaterialCommunityIcons name="heart" size={25} color="#D13852" />
    ),
  },
  {
    id: 6,
    title: 'Đánh giá sản phẩm',
    screen: 'Profile',
    icon: () => (
      <MaterialCommunityIcons name="heart" size={25} color="#D13852" />
    ),
  },
];

const GeneralProfile = () => {
  const [showMore, setShowMore] = useState(false);
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <View style={{paddingHorizontal: '4%'}}>
          <TitleReusable
            text="Tổng hợp"
            size={18}
            color={COLORS.black}
            font={FONTS.inter_SemiBold}
          />
        </View>
        <HeightSpacer height={SIZES.height / 70} />
        <View style={styles.containerOptions}>
          {options.slice(0, showMore ? options.length : 4).map(item =>
            item.title === 'Bán hàng cùng Ewamall' ? (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('Home' as never)}>
                <LinearGradient
                  key={item.id}
                  style={styles.optionSeller}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  colors={['#DDDDB2', '#DDDDB2', '#78A7D7']}
                  locations={[0, 0.3, 1]}>
                  <View style={styles.structureOption}>
                    {item.icon && item.icon()}
                    <Text style={styles.textSeller}>{item.title}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                // onPress={() => navigation.navigate('Home' as never)}
                key={item.id}
                style={styles.option}>
                <View style={styles.structureOption}>
                  {item.icon && item.icon()}
                  <Text style={styles.textOption}>{item.title}</Text>
                </View>
                <Feather name="chevron-right" size={16} color={COLORS.gray_2} />
              </TouchableOpacity>
            ),
          )}
        </View>
      </View>
      <TouchableOpacity
        style={styles.showMoreContainer}
        onPress={() => setShowMore(!showMore)}>
        <View style={styles.trapezium}>
          {!showMore ? (
            <FontAwesome5
              style={styles.icon}
              name="chevron-up"
              color="#FDD501"
              size={20}
            />
          ) : (
            <FontAwesome5
              style={styles.icon}
              name="chevron-down"
              color="#FDD501"
              size={20}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GeneralProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: '4%',
  },
  showMoreContainer: {
    alignItems: 'center',
  },
  trapezium: {
    width: SIZES.width / 6,
    height: 0,
    borderBottomWidth: SIZES.width / 16,
    borderBottomColor: 'white',
    borderLeftWidth: SIZES.width / 36,
    borderLeftColor: 'transparent',
    borderRightWidth: SIZES.width / 36,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    transform: [{rotate: '180deg'}],
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  icon: {
    position: 'absolute',
    top: '50%',
    transform: [{translateX: 14}, {translateY: 2}],
    zIndex: 9999,
  },
  containerOptions: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '6%',
    paddingVertical: '1%',
  },
  optionSeller: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: '6%',
    paddingVertical: '2%',
  },
  textOption: {
    fontSize: 15,
    fontFamily: FONTS.inter_medium,
  },
  textSeller: {
    color: 'white',
    fontSize: 15,
    fontFamily: FONTS.inter_SemiBold,
  },
  structureOption: {
    flexGrow: 1,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});