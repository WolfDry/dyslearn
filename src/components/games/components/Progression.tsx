import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { styles } from '../../../../assets/style/style'

const fishs = [
  require("../../../../assets/images/fish/poisson-1.png"),
  require("../../../../assets/images/fish/poisson-2.png"),
  require("../../../../assets/images/fish/poisson-3.png"),
  require("../../../../assets/images/fish/poisson-4.png"),
  require("../../../../assets/images/fish/poisson-5.png"),
]

const Progression = () => {
  return (
    <View style={[styles.alignItems, styles.justifyContentBetween, styles.bg_lightBlue, style.container]}>
      <View style={styles.flexRow}>
        {fishs.map((fish, index) => (
          <Image key={index} source={fish} />
        ))}
      </View>
    </View>
  )
}

export default Progression

const style = StyleSheet.create({
  container: {
    height: 158,
    paddingHorizontal: 50,
    flexShrink: 0
  }
})