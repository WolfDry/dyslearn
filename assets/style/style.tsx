import { StyleSheet } from "react-native";

export const blue = '#29BADA'
export const orange = '#F56004'
export const cream = '#FFFAEF'
export const yellow = '#FCBD25'
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

  full: {
    width: '100%'
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

  blue: {
    color: blue,
  },
  orange: {
    color: orange,
  },
  cream: {
    color: cream,
  },
  yellow: {
    color: yellow,
  },

  bg_blue: {
    backgroundColor: blue,
  },
  bg_orange: {
    backgroundColor: orange,
  },
  bg_cream: {
    backgroundColor: cream,
  },
  bg_yellow: {
    backgroundColor: yellow,
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
    fontSize: 25,
    color: orange,
    fontFamily: glacialBold
  }
})