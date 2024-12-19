import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../assets/style/style'

const Game = () => {
  const gameLabel = 'addition'

  switch (gameLabel) {
    case 'addition':
      return (
        <View style={[styles.center, styles.flex_1]}>
          <Text>
            Addition games page
          </Text>
        </View>
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