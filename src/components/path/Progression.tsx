import React from 'react'
import { Image, StyleSheet, View, Dimensions } from 'react-native'
import Svg, { Circle, Line } from 'react-native-svg'
import { lightBlue, styles } from '../../../assets/style/style'
import CustomText from '../CustomText'

const { width } = Dimensions.get('window')
const treasure = require('../../../assets/images/tresor.png')
const CIRCLE_RADIUS = 16
const NUM_CIRCLES = 7
const TOTAL_WIDTH = width - 450
const SPACING = (TOTAL_WIDTH - 2 * CIRCLE_RADIUS) / (NUM_CIRCLES - 1)

const Progression = ({ image, data }) => {
  return (
    <View style={[styles.bg_blue, style.container]}>
      <View style={[styles.flex_1, styles.center, styles.alignSelfStrech, styles.gap_20, styles.flexRow, style.themeContainer, { backgroundColor: data.color }]}>
        {data.icon}
        <CustomText style={[styles.textAlign, style.text]}>{data.title}</CustomText>
      </View>
      <View style={[style.progressContainer]}>
        <Image style={style.image} source={image} />
        <Svg height="60" width={TOTAL_WIDTH + 2 * CIRCLE_RADIUS}>
          {[...Array(NUM_CIRCLES)].map((_, index) => {
            const cx = index * SPACING + CIRCLE_RADIUS

            return (
              <React.Fragment key={index}>
                {index < NUM_CIRCLES - 1 && (
                  <Line
                    x1={cx}
                    y1="30"
                    x2={cx + SPACING}
                    y2="30"
                    stroke="white"
                    strokeWidth="4"
                  />
                )}
                <Circle
                  cx={cx}
                  cy="30"
                  r={CIRCLE_RADIUS}
                  fill={'white'}
                  stroke={lightBlue}
                  strokeWidth="5"
                />
              </React.Fragment>
            )
          })}
        </Svg>
        <Image source={treasure} />
      </View>
    </View>
  )
}

export default Progression

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  themeContainer: {
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  text: {
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: 1.25,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  image: {
    width: 62,
    height: 100,
  },
})
