import React from 'react'
import { StyleSheet, View } from 'react-native'
import { styles } from '../../../../assets/style/style'
import Button from '../../form/Button'
import CustomText from '../../CustomText'

const Header = () => {
  return (
    <View style={[styles.alignItems, styles.gap_10, styles.flexRow, styles.bg_lightBlue, style.header]}>
      <Button isReturn isStrech={false} text='Quitter' />
      <CustomText style={[styles.title, style.text]}>Quel est le chiffre le plus grand ?</CustomText>
    </View>
  )
}

export default Header

const style = StyleSheet.create({
  header: {
    flexShrink: 0,
    height: '25%'
  },
  text: {
    textAlignVertical: 'center'
  }
})