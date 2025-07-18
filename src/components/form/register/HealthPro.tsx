import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { styles } from '../../../../assets/style/style'
import Input from '../Input'
import Button from '../Button'
import CustomText from '../../CustomText'

const HealthPro = ({ handleInputChange, handleChangeView, value }) => {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <View style={[styles.flex_1, styles.center, styles.flexRow, style.container]}>
        <Pressable onPress={() => setIsVisible(true)} style={[styles.center, styles.flex_1, styles.bg_orange, style.card]}>
          <CustomText style={[styles.darkBlue, style.title]}>Oui</CustomText>
        </Pressable>
        <Pressable onPress={() => handleChangeView()} style={[styles.center, styles.flex_1, styles.bg_lightBlue, style.card]}>
          <CustomText style={[styles.darkBlue, style.title]}>Non</CustomText>
        </Pressable>
      </View>
      {/* En rajoutant une view vide quand oui pas séléctionner peut régler le problème de bouton trop grand */}
      <View style={[styles.alignSelfStrech, styles.flex_1]}>
        {
          isVisible &&
          <>
            <CustomText style={[styles.darkBlue, styles.textAlign, style.title, { alignSelf: 'stretch' }]}>
              Comment s'appelle t-il/elle
            </CustomText>
            <Input placeholder='Exemple : Marion Pelletier' password={false} setValue={(value) => handleInputChange('proName', value)} value={value} />
            <Button isStrech text='Je confirme ma réponse' color='orange' action={handleChangeView} />
          </>
        }
      </View>
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