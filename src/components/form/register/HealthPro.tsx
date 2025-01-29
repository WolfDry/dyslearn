import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../../../../assets/style/style'
import Input from '../Input'
import Button from '../Button'

const HealthPro = ({ handleInputChange, handleChangeView, value }) => {
  return (
    <>
      <View style={[styles.flex_1, styles.center, styles.flexRow, style.container]}>
        <View style={[styles.center, styles.flex_1, styles.bg_orange, style.card]}>
          <Text style={[styles.darkBlue, style.title]}>Oui</Text>
        </View>
        <View style={[styles.center, styles.flex_1, styles.bg_lightBlue, style.card]}>
          <Text style={[styles.darkBlue, style.title]}>Non</Text>
        </View>
      </View>
      <Text style={[styles.darkBlue, styles.textAlign, style.title, { alignSelf: 'stretch' }]}>
        Comment s'appelle t-il/elle
      </Text>
      <Input placeholder='Exemple : Marion Pelletier' password={false} setValue={handleInputChange} value={value} />
      <Button text='Je confirme ma réponse' color='orange' action={handleChangeView} />
    </>
  )
}

export default HealthPro

const style = StyleSheet.create({
  container: {
    gap: 70,
    alignSelf: 'stretch'
  },
  card: {
    paddingHorizontal: 40,
    gap: 40,
    alignSelf: 'stretch',
    borderRadius: 40,
  },
  title: {
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 1.8
  }
})