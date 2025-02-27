import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import { lightBlue } from '../../../assets/style/style';

const { width } = Dimensions.get('window');
const treasure = require('../../../assets/images/tresor.png');
const CIRCLE_RADIUS = 16;
const NUM_CIRCLES = 7;
const TOTAL_WIDTH = width - 450;
const SPACING = (TOTAL_WIDTH - 2 * CIRCLE_RADIUS) / (NUM_CIRCLES - 1); // Ajustement pour éviter les coupures

const Progression = ({ image, data }) => {
  return (
    <View style={[style.container]}>
      <View style={[style.themeContainer, { backgroundColor: data.color }]}>
        {data.icon}
        <Text style={style.text}>{data.title}</Text>
      </View>
      <View style={[style.progressContainer]}>
        <Image style={style.image} source={image} />
        <Svg height="60" width={TOTAL_WIDTH + 2 * CIRCLE_RADIUS}>
          {[...Array(NUM_CIRCLES)].map((_, index) => {
            const cx = index * SPACING + CIRCLE_RADIUS; // Décalage pour que les cercles restent dans le cadre

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
            );
          })}
        </Svg>
        <Image source={treasure} />
      </View>
    </View>
  );
};

export default Progression;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4DB6E9',
  },
  themeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  text: {
    color: '#003F7F',
    marginLeft: 10,
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
});
