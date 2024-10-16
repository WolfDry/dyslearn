import React from 'react'
import { Text, View, StyleSheet} from 'react-native';

import { styles } from '../../assets/style/style'

const Welcome = () => {
  return (
    <View style={[styles.flex_1, styles.center]}>
        <Text>
            Bravo tu es connecté
        </Text>
    </View>
  )
}

export default Welcome