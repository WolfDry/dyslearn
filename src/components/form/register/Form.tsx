import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../../../../assets/style/style'
import Button from '../Button'
import Input from '../Input'
import CustomText from '../../CustomText'

const Form = ({ handleInputChange, handleChangeView, data }) => {
  return (
    <>
      <View style={[styles.alignItems, styles.flexRow, style.inputsContainer]}>
        <View style={[style.inputContainer, styles.flex_1]}>
          <CustomText style={[styles.darkBlue, style.label]}>Prénom</CustomText>
          <Input placeholder='Exemple : Jean' value={data.firstName} setValue={(value) => handleInputChange('firstName', value)} password={false} />
        </View>
        <View style={[style.inputContainer, styles.flex_1]}>
          <CustomText style={[styles.darkBlue, style.label]}>Nom</CustomText>
          <Input placeholder='Exemple : Valjean' value={data.lastName} setValue={(value) => handleInputChange('lastName', value)} password={false} />
        </View>
      </View>
      <View style={[style.inputContainer, styles.full_w]}>
        <CustomText style={[styles.darkBlue, style.label]}>Adresse email</CustomText>
        <Input placeholder='Exemple : Jean@valjean.com' value={data.email} setValue={(value) => handleInputChange('email', value)} password={false} />
      </View>
      <View style={[style.inputContainer, styles.full_w]}>
        <CustomText style={[styles.darkBlue, style.label]}>Mot de passe</CustomText>
        <Input placeholder='Mon mot de passe' value={data.password} setValue={(value) => handleInputChange('password', value)} password />
        <Input placeholder='Confirmation du mot de passe' value={data.confirmPassword} setValue={(value) => handleInputChange('confirmPassword', value)} password />
      </View>
      <Button isStrech text="Je m'inscris" color='orange' action={handleChangeView} />
    </>
  )
}

export default Form


const style = StyleSheet.create({
  container: {
    // height: 1024,
    padding: 50,
    alignItems: 'flex-start',
  },
  titleContainer: {
    gap: 50,
    alignSelf: 'stretch',
  },
  title: {
    position: 'absolute',
    width: 1080,
    left: 93,
    top: 25.167,
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: 1.8,
  },
  inputsContainer: {
    gap: 50,
    alignSelf: 'stretch'
  },
  inputContainer: {
    alignItems: 'flex-start',
    gap: 10,
  },
  label: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: 0.48
  }
})