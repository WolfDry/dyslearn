import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../../assets/style/style'
import Logo from '../components/Logo'
import Button from '../components/form/Button'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/type'
import { logout } from '../store/thunks/authThunks'

const CreateChild = () => {

  const dispatch: AppDispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <View style={[styles.alignItems, styles.justifyContentBetween, styles.flex_1, style.container]}>
      <View style={style.logoContainer}>
        <Logo />
      </View>
      <Text style={styles.title}>C'est parti !</Text>
      <View style={styles.alignSelfStrech}>
        <Text style={[styles.textAlign, styles.darkBlue, style.title]}>
          Vous êtes prêt à débuter l'aventure !
        </Text>
        <Text style={[styles.textAlign, styles.darkBlue]}>
          Il est temps pour votre enfant de créer son profil, nous vous conseillons de rester avec lui durant cette phase afin de l’accompagner dans cette étape qui dure 5 minutes environ.
        </Text>
      </View>
      <View style={[styles.alignSelfStrech, style.buttonContainer]}>
        <Button text='Je crée le 1er profil enfant (durée 5 minutes environ)' color='orange' />
        <Button text="Je n'ai pas le temps, je le ferais à ma prochaine connexion" color='lightBlue' action={handleLogout} />
      </View>
    </View>
  )
}

export default CreateChild

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