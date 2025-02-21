import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Logo from '../Logo'
import Button from '../form/Button'
import { styles } from '../../../assets/style/style'
import CustomText from '../CustomText'

const Confirm_register = ({ setStep, handleLogout }) => {
  return (
    <View style={[styles.alignItems, styles.justifyContentBetween, styles.flex_1, style.container]}>
      <View style={style.logoContainer}>
        <Logo />
      </View>
      <CustomText style={styles.title}>C'est parti !</CustomText>
      <View style={styles.alignSelfStrech}>
        <CustomText style={[styles.textAlign, styles.darkBlue, style.title]}>
          Vous êtes prêt à débuter l'aventure !
        </CustomText>
        <CustomText style={[styles.textAlign, styles.darkBlue]}>
          Il est temps pour votre enfant de créer son profil, nous vous conseillons de rester avec lui durant cette phase afin de l’accompagner dans cette étape qui dure 5 minutes environ.
        </CustomText>
      </View>
      <View style={[styles.alignSelfStrech, style.buttonContainer]}>
        <Button isStrech text='Je crée le 1er profil enfant (durée 5 minutes environ)' color='orange' action={() => setStep('intro')} />
        <Button isStrech text="Je n'ai pas le temps, je le ferais à ma prochaine connexion" color='lightBlue' action={handleLogout} />
      </View>
    </View>
  )
}

export default Confirm_register

const style = StyleSheet.create({
  container: {
    padding: 50,
  },
  logoContainer: {
    alignItems: 'flex-start',
    gap: 10,
    flexShrink: 0
  },
  title: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: 0.64
  },
  paragraphe: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: 0.48
  },
  buttonContainer: {
    alignItems: 'flex-start',
    gap: 50,
    flexShrink: 0,
  }
})