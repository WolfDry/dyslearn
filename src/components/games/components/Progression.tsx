import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { styles } from '../../../../assets/style/style'

const Progression = ({ imgs }) => {
  return (
    <View style={[styles.alignItems, styles.justifyContentBetween, styles.bg_lightBlue, style.container]}>
      <View style={styles.flexRow}>
        {imgs.map((fish, index) => (
          <Image style={!fish.isDone ? style.fishNotDone : null} key={index} source={fish.img} />
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
  },
  fishNotDone: {
    opacity: .4
  },
})