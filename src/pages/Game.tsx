import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../assets/style/style'
import Bubble from '../components/games/Bubble'
import Duel from '../components/games/Duel'

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
    default:
      return (
        <View style={[styles.center, styles.flex_1]}>
          <Text>
            No game page
          </Text>
        </View>
      )
  }
}

export default Game