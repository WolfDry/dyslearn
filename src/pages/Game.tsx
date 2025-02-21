import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../assets/style/style'
import Bubble from '../components/games/Bubble'
import Duel from '../components/games/Duel'
import Frieze from '../components/games/Frieze'
import CustomText from '../components/CustomText'

const Game = ({ route }) => {

  switch (route.params) {
    case 'bubble':
      return (
        <Bubble />
      )
    case 'duel':
      return (
        <Duel />
      )
    case 'frieze':
      return (
        <Frieze />
      )
    default:
      return (
        <View style={[styles.center, styles.flex_1]}>
          <CustomText style={null}>
            No game page
          </CustomText>
        </View>
      )
  }
}

export default Game