import { StyleSheet } from "react-native";

export const lightBlue = '#34BDE8'
export const darkBlue = '#201726'
export const orange = '#FD9830'
export const cream = '#FFFAEF'
export const white = '#fff'
export const black = '#000'
const glacialRegular = 'glacial-regular'
const glacialBold = 'glacial-bold'

export const styles = StyleSheet.create({
  flex_025: {
    flex: 0.25,
  },
  flex_05: {
    flex: 0.5,
  },
  flex_075: {
    flex: 0.75,
  },
  flex_1: {
    flex: 1,
  },
  flex_2: {
    flex: 2,
  },
  flex_3: {
    flex: 3,
  },
  flex_4: {
    flex: 4,
  },
  flex_5: {
    flex: 5,
  },

  padding_10: {
    padding: 10
  },
  padding_20: {
    padding: 20
  },
  padding_30: {
    padding: 30
  },
  padding_40: {
    padding: 40
  },
  padding_50: {
    padding: 50
  },
  padding_60: {
    padding: 60
  },
  padding_70: {
    padding: 70
  },
  padding_80: {
    padding: 80
  },
  padding_90: {
    padding: 90
  },
  padding_100: {
    padding: 100
  },

  full_w: {
    width: '100%',
  },
  full_h: {
    height: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center'
  },
  justifyContentAround: {
    justifyContent: 'space-around'
  },
  justifyContentBetween: {
    justifyContent: 'space-between'
  },
  alignItems: {
    alignItems: 'center'
  },
  flexWrap: {
    flexWrap: 'wrap'
  },
  flexRow: {
    flexDirection: 'row'
  },

  lightBlue: {
    color: lightBlue,
  },
  darkBlue: {
    color: darkBlue,
  },
  orange: {
    color: orange,
  },
  cream: {
    color: cream,
  },
  white: {
    color: white,
  },
  black: {
    color: black,
  },

  bg_lightBlue: {
    backgroundColor: lightBlue,
  },
  bg_darkBlue: {
    backgroundColor: darkBlue,
  },
  bg_orange: {
    backgroundColor: orange,
  },
  bg_cream: {
    backgroundColor: cream,
  },

  glacialRegular: {
    fontFamily: glacialRegular
  },
  glacialBold: {
    fontFamily: glacialBold,
  },

  debug: {
    borderWidth: 1,
    borderColor: 'red'
  },

  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 700,
    letterSpacing: 1.8,
    color: darkBlue,
    fontFamily: glacialBold,
    alignSelf: 'stretch',
  },
  textAlign: {
    textAlign: 'center',
  }
})