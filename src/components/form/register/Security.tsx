import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../../../../assets/style/style'
import Input from '../Input'
import Button from '../Button'

const Security = ({ handleInputChange, data, handleRegistration }) => {
  return (
    <>
      <View style={[style.titleContainer]}>
        <Text style={[styles.textAlign, style.title]}>Ce code servira à sécuriser votre profil parent</Text>
        <Text style={[styles.textAlign, style.paragraphe]}>A partir de votre profil parent, vous pourrez accéder à vos informations personnelles, aux statistiques de votre enfants et à la gestion des différents paramètres de l’application, dont la limite du temps de jeu.</Text>
      </View>
      <View style={[style.inputContainer]}>
        <Text style={[styles.darkBlue, style.label]}>Mot de passe</Text>
        <View style={style.inputsContainer}>
          <Input placeholder='Mon mot de passe' value={data.securityPassword} setValue={(value) => handleInputChange('securityPassword', value)} password />
          <Input placeholder='Confirmation du mot de passe' value={data.confirmSecurityPasswordsecurityPassword} setValue={(value) => handleInputChange('confirmSecurityPassword', value)} password />
        </View>
      </View>
      <Button text='Valider' color='orange' action={() => handleRegistration()} />
    </>
  )
}

export default Security

const style = StyleSheet.create({
  titleContainer: {
    alignSelf: 'stretch'
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
  inputContainer: {
    alignItems: 'flex-start',
    gap: 10,
    alignSelf: 'stretch'
  },
  label: {
    alignSelf: 'stretch',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: 0.48
  },
  inputsContainer: {
    alignItems: 'flex-start',
    gap: 20,
    alignSelf: 'stretch'
  }
})