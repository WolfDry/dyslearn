import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Svg, { Circle, Line, Path } from 'react-native-svg';
import { lightBlue, styles } from '../../../assets/style/style';

const { width } = Dimensions.get('window');
const treasure = require('../../../assets/images/tresor.png');
const CIRCLE_RADIUS = 16;
const NUM_CIRCLES = 7;
const TOTAL_WIDTH = width - 450;
const SPACING = (TOTAL_WIDTH - 2 * CIRCLE_RADIUS) / (NUM_CIRCLES - 1); // Ajustement pour éviter les coupures

const Progression = ({ image }) => {
  return (
    <View style={[style.container]}>
      <View style={style.themeContainer}>
        <Svg width="51" height="51" viewBox="0 0 51 51" fill="none">
          <Path
            d="M25.5 0.166992C11.6929 0.166992 0.5 11.3599 0.5 25.167C0.5 38.9741 11.6929 50.167 25.5 50.167C39.3071 50.167 50.5 38.9741 50.5 25.167C50.5 11.3599 39.3071 0.166992 25.5 0.166992ZM33.9109 7.97633C34.6438 7.98212 35.3553 8.25245 35.8929 8.79003L40.0533 12.9488C41.2033 14.0988 41.1245 16.0365 39.8806 17.2832C38.6338 18.5301 36.693 18.6042 35.5462 17.4574L31.3874 13.2987C30.2374 12.1518 30.3178 10.208 31.5616 8.9642C32.2224 8.30174 33.0803 7.96978 33.9109 7.97633ZM27.0562 13.4712L35.3753 21.7887L21.8558 35.305L13.5367 26.986L27.0562 13.4712ZM11.3773 28.5611L20.1523 37.3362L9.18004 39.5335L11.3773 28.5611Z"
            fill="white"
          />
        </Svg>
        <Text style={style.text}>Écriture</Text>
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
    backgroundColor: '#FFA726',
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
