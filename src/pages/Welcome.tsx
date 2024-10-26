import React from 'react'
import { Text, View } from 'react-native'

import { styles } from '../../assets/style/style'
import { useSelector } from 'react-redux'
import { RootState } from '../store/type'

const Welcome = () => {

  const { parent } = useSelector((state: RootState) => state.parent)

  return (
    <View style={[styles.flex_1, styles.center]}>
      <Text>
        Bravo {parent[0].first_name}, tu es connecté
      </Text>
    </View>
  )
}

export default Welcome