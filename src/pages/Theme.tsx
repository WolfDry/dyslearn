import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, View } from 'react-native'
import { styles } from '../../assets/style/style'
import { StackNavigationProp } from '@react-navigation/stack'
import Svg, { Path } from 'react-native-svg'
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import CustomText from '../components/CustomText'
import { RootStackParamList } from '../components/navigation/LogedNavigator'

type ThemeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Theme'>

const Theme = ({ route }) => {

  const navigation = useNavigation<ThemeScreenNavigationProp>()
  const path = useSelector((state: any) => state.path.path)

  const handleNavigation = (direction) => {
    navigation.navigate('LevelPath', direction)
  }

  return (
    <View style={[styles.padding_50, styles.alignItems, styles.bg_cream, styles.flexRow, style.container]}>
      <View style={[styles.center, style.reddContainer]}>
        <View style={[styles.center, styles.flexRow, style.titleContainer]}>
          <CustomText style={[styles.darkBlue, style.title]}>{path.type}</CustomText>
          <View style={[styles.center, style.diceIcon]}>
            <Svg width="72" height="77" viewBox="0 0 72 77" fill="none">
              <Path d="M30.2529 1.72256L4.7681 12.723C2.15691 13.8901 0.712891 16.8485 0.712891 19.8422V55.2374C0.712891 59.3466 2.19491 62.8642 5.7534 64.4384L30.9586 75.4144C32.5436 76.1267 34.2615 76.4949 35.9992 76.4949C37.7368 76.4949 39.4547 76.1267 41.0397 75.4144L66.2449 61.7161C69.8007 60.1364 71.2854 59.3466 71.2854 55.2374V19.8422C71.2854 16.8485 70.1183 13.8928 67.5044 12.723L41.7454 1.72256C39.9369 0.916542 37.9791 0.5 35.9992 0.5C34.0192 0.5 32.0614 0.916542 30.2529 1.72256Z" fill="#F3EEF8" />
              <Path d="M5.7534 64.4488C2.19763 62.8692 0.712891 59.3543 0.712891 55.2451H71.2854C71.2854 59.3543 69.8034 60.3206 66.2449 61.9002L41.0397 75.4194C39.4547 76.1316 37.7368 76.4999 35.9992 76.4999C34.2615 76.4999 32.5436 76.1316 30.9586 75.4194L5.7534 64.4488Z" fill="#B4ACBC" />
              <Path d="M0.712891 20.1277C0.712994 19.4475 0.883542 18.7782 1.20896 18.1808C1.53437 17.5835 2.00428 17.0772 2.57576 16.7082C3.14723 16.3392 3.80206 16.1193 4.48043 16.0685C5.15879 16.0177 5.83907 16.1377 6.45912 16.4175L31.2084 27.5971C32.6362 28.242 33.8476 29.2851 34.6974 30.6013C35.5472 31.9175 35.9992 33.4509 35.9992 35.0175V71.3736C35.9992 72.0501 35.8306 72.7159 35.5087 73.311C35.1868 73.906 34.7217 74.4114 34.1554 74.7816C33.589 75.1518 32.9394 75.375 32.2652 75.431C31.5909 75.4871 30.9133 75.3743 30.2936 75.1028L3.96194 63.5568C2.99622 63.1335 2.17469 62.4381 1.59771 61.5556C1.02073 60.673 0.713269 59.6416 0.712891 58.5872V20.1277Z" fill="#B4ACBC" />
              <Path d="M71.2863 20.1853C71.2862 19.5051 71.1156 18.8358 70.7902 18.2384C70.4648 17.6411 69.9949 17.1348 69.4234 16.7658C68.8519 16.3968 68.1971 16.1769 67.5187 16.1261C66.8404 16.0753 66.1601 16.1953 65.54 16.4751L40.7908 27.652C39.3625 28.2971 38.1508 29.3406 37.301 30.6574C36.4512 31.9741 35.9995 33.5081 36 35.0752V71.4339C36.0004 72.1102 36.1693 72.7757 36.4914 73.3704C36.8135 73.9651 37.2787 74.4701 37.8449 74.84C38.4112 75.2098 39.0607 75.4328 39.7347 75.4887C40.4087 75.5447 41.086 75.4318 41.7055 75.1604L68.0372 63.6171C69.0038 63.1934 69.8259 62.4972 70.4029 61.6136C70.98 60.73 71.2869 59.6974 71.2863 58.6421V20.1853Z" fill="#E1D8EC" />
              <Path d="M10.718 38.482C12.9438 38.3055 14.5371 35.719 14.2548 32.7307C13.9752 29.7207 11.9367 27.449 9.71372 27.6471C7.48797 27.8262 5.89466 30.4128 6.17695 33.4011C6.45652 36.3866 8.49498 38.6611 10.718 38.482ZM65.827 33.3984C66.1093 30.4128 64.516 27.8235 62.293 27.6444C60.0672 27.468 58.0315 29.7424 57.7492 32.728C57.4669 35.7135 59.0602 38.3028 61.2832 38.482C63.509 38.6801 65.5447 36.4084 65.827 33.3984ZM30.5407 59.8722C30.823 62.8577 29.2297 65.447 27.004 65.6262C24.7782 65.8026 22.7425 63.5281 22.4629 60.5426C22.1806 57.5543 23.7739 54.9677 25.9997 54.7886C28.2254 54.5904 30.2612 56.8622 30.5407 59.8722ZM54.15 41.2178C56.3757 41.3942 57.9663 43.9808 57.684 46.9691C57.4045 49.9791 55.366 52.2508 53.1402 52.05C50.9145 51.8736 49.3239 49.287 49.6062 46.2987C49.8858 43.3131 51.9242 41.0387 54.15 41.2178ZM49.541 60.5398C49.8233 57.5543 48.23 54.965 46.007 54.7859C43.7812 54.6094 41.7455 56.8839 41.4632 59.8695C41.1809 62.855 42.7742 65.4443 44.9973 65.6234C47.223 65.8216 49.2588 63.5498 49.541 60.5398Z" fill="#433B6B" />
              <Path d="M36.0004 15.421C40.498 15.421 44.1434 14.205 44.1434 12.7068C44.1434 11.2086 40.498 9.99268 36.0004 9.99268C31.5028 9.99268 27.8574 11.2086 27.8574 12.7068C27.8574 14.205 31.5028 15.421 36.0004 15.421Z" fill="#F8312F" />
            </Svg>
          </View>
        </View>
        <Image style={[styles.alignItems, style.reddContainer]} source={path.image} resizeMode='contain' />
      </View>
      <View style={[styles.alignItems, styles.flexRow, styles.gap_50, styles.flex_1, styles.alignSelfStrech]}>
        <View style={[styles.center, styles.gap_30, styles.flex_1, styles.alignSelfStrech]}>
          <Card action={() => handleNavigation('addition')} label={'addition'} />
          <Card action={() => handleNavigation('subtraction')} label={'subtraction'} />
          <Card action={() => handleNavigation('writing')} label={'writing'} />
        </View>
        <View style={[styles.center, styles.gap_30, styles.flex_1, styles.alignSelfStrech]}>
          <Card action={() => handleNavigation('multiplication')} label={'multiplication'} />
          <Card action={() => handleNavigation('division')} label={'division'} />
          <Card action={() => handleNavigation('geometry')} label={'geometry'} />
        </View>
      </View>
    </View>
  )
}

export default Theme

const style = StyleSheet.create({
  container: {
    gap: 50,
    alignSelf: 'stretch'
  },
  reddContainer: {
    height: 725,
  },
  titleContainer: {
    gap: 30
  },
  title: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 0.64
  },
  diceIcon: {
    width: 82.5,
    height: 80,
    paddingHorizontal: 6,
    paddingVertical: 2,
    gap: 10
  }
})