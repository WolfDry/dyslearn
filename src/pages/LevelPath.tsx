import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../components/navigation/LogedNavigator'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Progression from '../components/path/Progression'
import { orange, styles, white, yellow } from '../../assets/style/style'
import CustomText from '../components/CustomText'
import Svg, { Path } from 'react-native-svg'

type LevelPathScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LevelPath'>

const bg = require('../../assets/images/background/illustration-plage.png')

const LevelPath = ({ route }) => {

  const theme = route.params
  const navigation = useNavigation<LevelPathScreenNavigationProp>()
  const path = useSelector((state: any) => state.path.path)
  const levels = [{
    index: 1,
    isDone: true,
    isUnlock: true,
    star: 3
  },
  {
    index: 2,
    isDone: false,
    isUnlock: true,
    star: 0
  },
  {
    index: 3,
    isDone: false,
    isUnlock: false,
    star: 0
  },
  {
    index: 4,
    isDone: false,
    isUnlock: false,
    star: 0
  },
  {
    index: 5,
    isDone: false,
    isUnlock: false,
    star: 0
  }]

  const { height } = Dimensions.get('window')
  const offset = height * 0.2

  return (
    <ImageBackground source={bg} style={[styles.flex_1, styles.center, styles.alignSelfStrech]}>
      <Progression image={path.image} />
      <View style={[styles.flex_1]}>
        <FlatList
          data={levels}
          horizontal
          contentContainerStyle={[styles.full_h, styles.full_w, styles.center, styles.justifyContentAround]}
          renderItem={({ item, index }) => (
            <View
              style={[
                style.containerLevel,
                index % 2 === 0 ? { marginTop: offset } : { marginBottom: offset },
              ]}
            >
              {
                item.isUnlock ?
                  <>
                    <View style={[styles.gap_10, style.containerLittleStar]}>
                      <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <Path
                          fill={item.isDone ? yellow : white}
                          stroke={item.isDone ? white : yellow}
                          strokeWidth={item.isDone ? 1 : 5}
                          transform="scale(0.6667)"
                          d="M21.041 17.4936L21.1861 17.4423L21.2773 17.3182L31.2891 3.69033C31.2894 3.68995 31.2897 3.68957 31.29 3.68919C32.0974 2.60257 33.0376 1.80716 34.1089 1.28773L33.9265 0.911556L34.1089 1.28773C35.195 0.761083 36.3172 0.5 37.4806 0.5C38.6439 0.5 39.7661 0.761082 40.8522 1.28773L41.0346 0.911556L40.8522 1.28773C41.9236 1.80719 42.8639 2.60267 43.6713 3.6894C43.6715 3.68971 43.6717 3.69002 43.672 3.69033L53.6839 17.3182L53.775 17.4423L53.9201 17.4936L69.0685 22.8516L69.0684 22.8517L69.0768 22.8545C70.7905 23.4269 72.1124 24.4489 73.0612 25.928C74.0225 27.4265 74.5 29.0428 74.5 30.7871C74.5 31.635 74.3852 32.475 74.1547 33.3084C73.9279 34.1281 73.5591 34.9139 73.0441 35.6667L73.0406 35.6718L63.3071 50.2826L63.2197 50.4139L63.2234 50.5715L63.581 65.9344C63.6376 68.3531 62.8563 70.3607 61.2396 71.9938C59.6124 73.6374 57.7075 74.4469 55.5017 74.4469C55.5056 74.4469 55.5034 74.4467 55.4925 74.4458C55.4762 74.4444 55.4407 74.4415 55.3775 74.4351C55.2859 74.4259 55.1569 74.4118 54.9895 74.3929C54.6623 74.3557 54.1943 74.3003 53.5846 74.2265L37.62 69.5909L37.4806 69.5505L37.3411 69.5909L21.3375 74.2378L21.3186 74.2433L21.3002 74.2503C21.0118 74.3593 20.7119 74.4275 20.3993 74.4549C20.055 74.4851 19.7249 74.5 19.4089 74.5C17.2406 74.5 15.3525 73.6846 13.7233 72.0221L13.3662 72.372L13.7233 72.0221C12.1066 70.3724 11.342 68.3576 11.4306 65.9411L11.4307 65.9344L11.7883 50.5307L11.792 50.3726L11.7041 50.2411L1.95886 35.6711L1.95593 35.6668C1.44098 34.9139 1.07213 34.1281 0.845342 33.3084C0.614853 32.475 0.5 31.635 0.5 30.7871C0.5 29.0701 0.971029 27.4664 1.92088 25.9663C2.85753 24.4873 4.17425 23.4512 5.89064 22.8523L5.89264 22.8516L21.041 17.4936Z"
                        />
                      </Svg>
                    </View>
                    <View style={[styles.gap_10, style.containerMiddleStar]}>
                      <Svg width="75" height="75" viewBox="0 0 75 75" fill="none">
                        <Path fill={item.isDone ? orange : white} stroke={item.isDone ? white : yellow} strokeWidth={item.isDone ? 1 : 5} d="M21.041 17.4936L21.1861 17.4423L21.2773 17.3182L31.2891 3.69033C31.2894 3.68995 31.2897 3.68957 31.29 3.68919C32.0974 2.60257 33.0376 1.80716 34.1089 1.28773L33.9265 0.911556L34.1089 1.28773C35.195 0.761083 36.3172 0.5 37.4806 0.5C38.6439 0.5 39.7661 0.761082 40.8522 1.28773L41.0346 0.911556L40.8522 1.28773C41.9236 1.80719 42.8639 2.60267 43.6713 3.6894C43.6715 3.68971 43.6717 3.69002 43.672 3.69033L53.6839 17.3182L53.775 17.4423L53.9201 17.4936L69.0685 22.8516L69.0684 22.8517L69.0768 22.8545C70.7905 23.4269 72.1124 24.4489 73.0612 25.928C74.0225 27.4265 74.5 29.0428 74.5 30.7871C74.5 31.635 74.3852 32.475 74.1547 33.3084C73.9279 34.1281 73.5591 34.9139 73.0441 35.6667L73.0406 35.6718L63.3071 50.2826L63.2197 50.4139L63.2234 50.5715L63.581 65.9344C63.6376 68.3531 62.8563 70.3607 61.2396 71.9938C59.6124 73.6374 57.7075 74.4469 55.5017 74.4469C55.5056 74.4469 55.5034 74.4467 55.4925 74.4458C55.4762 74.4444 55.4407 74.4415 55.3775 74.4351C55.2859 74.4259 55.1569 74.4118 54.9895 74.3929C54.6623 74.3557 54.1943 74.3003 53.5846 74.2265L37.62 69.5909L37.4806 69.5505L37.3411 69.5909L21.3375 74.2378L21.3186 74.2433L21.3002 74.2503C21.0118 74.3593 20.7119 74.4275 20.3993 74.4549C20.055 74.4851 19.7249 74.5 19.4089 74.5C17.2406 74.5 15.3525 73.6846 13.7233 72.0221L13.3662 72.372L13.7233 72.0221C12.1066 70.3724 11.342 68.3576 11.4306 65.9411L11.4307 65.9344L11.7883 50.5307L11.792 50.3726L11.7041 50.2411L1.95886 35.6711L1.95593 35.6668C1.44098 34.9139 1.07213 34.1281 0.845342 33.3084C0.614853 32.475 0.5 31.635 0.5 30.7871C0.5 29.0701 0.971029 27.4664 1.92088 25.9663C2.85753 24.4873 4.17425 23.4512 5.89064 22.8523L5.89264 22.8516L21.041 17.4936Z" />
                      </Svg>
                    </View>
                    <View style={[styles.gap_10, style.containerBigStar]}>
                      <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <Path fill={item.isDone ? "#F56004" : white} stroke={item.isDone ? white : yellow} strokeWidth={item.isDone ? 1 : 5} d="M27.9991 23.1677L28.1442 23.1163L28.2354 22.9923L41.5851 4.82106C41.5853 4.82076 41.5855 4.82047 41.5857 4.82017C42.6765 3.35197 43.9504 2.27266 45.4058 1.567L45.1876 1.1171L45.4058 1.567C46.8759 0.854175 48.397 0.5 49.9741 0.5C51.5512 0.5 53.0723 0.854175 54.5423 1.567L54.7605 1.1171L54.5424 1.567C55.9977 2.27265 57.2716 3.35195 58.3624 4.82013C58.3626 4.82044 58.3628 4.82075 58.3631 4.82106L71.7128 22.9923L71.8039 23.1163L71.949 23.1677L92.1469 30.3117L92.1468 30.3117L92.1552 30.3145C94.4753 31.0895 96.269 32.4757 97.5552 34.4806C98.8538 36.505 99.5 38.6912 99.5 41.0495C99.5 42.1953 99.3448 43.3303 99.0335 44.4556C98.726 45.5673 98.2261 46.6317 97.5296 47.6497L97.5262 47.6548L84.5482 67.1359L84.4608 67.2672L84.4644 67.4248L84.9413 87.9087C85.0177 91.1765 83.9603 93.8978 81.7712 96.1089C79.5717 98.3307 76.9899 99.4292 74.0022 99.4292C74.0027 99.4292 74.0014 99.4291 73.9978 99.4288C73.9831 99.4277 73.9308 99.4238 73.82 99.4126C73.6968 99.4002 73.524 99.3814 73.3006 99.3561C72.8613 99.3062 72.2323 99.2318 71.4127 99.1325L50.1135 92.948L49.9741 92.9075L49.8346 92.948L28.4964 99.1438L28.4775 99.1493L28.4591 99.1563C28.0602 99.307 27.6454 99.4014 27.2136 99.4392C26.7501 99.4799 26.3052 99.5 25.8786 99.5C22.9397 99.5 20.3802 98.3926 18.1787 96.1461L17.8216 96.496L18.1787 96.1461C15.9897 93.9124 14.9545 91.1811 15.0742 87.9154L15.0743 87.9087L15.5512 67.3704L15.5548 67.2122L15.4669 67.0808L2.47327 47.6541L2.47034 47.6498C1.77399 46.6317 1.27404 45.5673 0.966476 44.4556C0.655231 43.3302 0.5 42.1953 0.5 41.0495C0.5 38.7276 1.13752 36.5585 2.42034 34.5326C3.69004 32.5277 5.47648 31.1229 7.79928 30.3124L7.80127 30.3117L27.9991 23.1677Z" />
                      </Svg>
                    </View>
                  </>
                  :
                  <Svg style={style.lock} width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <Path d="M73.5832 68.1832C70.9404 68.1832 68.798 66.0408 68.798 63.398V35.5338C68.798 26.1426 61.1576 18.502 51.7662 18.502C42.375 18.502 34.7344 26.1424 34.7344 35.5338V51.7402C34.7344 54.383 32.592 56.5254 29.9492 56.5254C27.3064 56.5254 25.1641 54.383 25.1641 51.7402V35.5338C25.1641 20.8652 37.0977 8.93164 51.7662 8.93164C66.4348 8.93164 78.3684 20.8652 78.3684 35.5338V63.398C78.3684 66.0408 76.226 68.1832 73.5832 68.1832Z" fill="#B1B4B5" />
                    <Path d="M80.8824 97.1598H22.6523C17.2158 97.1598 12.8086 92.7525 12.8086 87.316V53.6504C12.8086 48.2139 17.2158 43.8066 22.6523 43.8066H80.8824C86.3189 43.8066 90.7262 48.2139 90.7262 53.6504V87.3158C90.7262 92.7525 86.3189 97.1598 80.8824 97.1598Z" fill="#FFB636" />
                    <Path d="M21.3506 89.227H20.8574C19.3041 89.227 18.0449 87.9678 18.0449 86.4145V54.5527C18.0449 52.9994 19.3041 51.7402 20.8574 51.7402H21.3506C22.9039 51.7402 24.1631 52.9994 24.1631 54.5527V86.4145C24.1631 87.9678 22.9039 89.227 21.3506 89.227Z" fill="#FFD469" />
                  </Svg>
              }
              <View style={[styles.center, styles.gap_10, !item.isUnlock ? styles.border_lock : styles.border_yellow, style.level, !item.isUnlock ? styles.bg_lock : item.isDone ? styles.bg_yellow : styles.bg_white]}>
                <CustomText style={[!item.isUnlock ? styles.lockTypo : item.isDone ? styles.white : styles.yellow, styles.textAlign, style.text]}>
                  {item.index}
                </CustomText>
              </View>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  )
}

export default LevelPath

const style = StyleSheet.create({
  containerLevel: {
    position: 'relative',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    rowGap: 0,
    columnGap: -24,
    flexWrap: 'wrap'
  },
  lock: {
    position: 'absolute',
    left: -14,
    bottom: -8,
    zIndex: 999
  },
  containerLittleStar: {
    position: 'absolute',
    left: -20,
    top: 38,
    flexDirection: 'column',
    alignItems: 'flex-start',
    zIndex: 999
  },
  containerMiddleStar: {
    position: 'absolute',
    left: 36,
    top: -34,
    flexDirection: 'column',
    alignItems: 'flex-start',
    zIndex: 999
  },
  containerBigStar: {
    width: 100,
    position: 'absolute',
    right: -35,
    top: -29,
    flexDirection: 'column',
    alignItems: 'flex-start',
    zIndex: 999
  },
  level: {
    display: 'flex',
    width: 200,
    height: 200,
    paddingVertical: 30,
    paddingHorizontal: 60,
    borderWidth: 5,
    borderRadius: 100
  },
  text: {
    fontSize: 96,
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: -0.96
  }
})