import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { styles } from '../../assets/style/style'
import Button from '../components/form/Button'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../components/navigation/LoginNavigator'
import Form from '../components/form/register/Form'
import HealthPro from '../components/form/register/HealthPro'
import Security from '../components/form/register/Security'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/type'
import { register } from '../store/thunks/authThunks'
import CustomText from '../components/CustomText'

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>

const Register = () => {

  const navigation = useNavigation<RegisterScreenNavigationProp>()

  const dispatch: AppDispatch = useDispatch()

  const [title, setTitle] = useState({ value: 'Inscription', label: 'inscription' })
  const [content, setContent] = useState(<></>)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    proName: '',
    securityPassword: '',
    confirmSecurityPassword: '',
  })

  useEffect(() => {
    switch (title.label) {
      case 'inscription':
        setContent(<Form data={formData} handleInputChange={handleInputChange} handleChangeView={handleChangeView} />)
        break
      case 'healthPro':
        setContent(<HealthPro handleInputChange={handleInputChange} handleChangeView={handleChangeView} value={formData.proName} />)
        break
      case 'security':
        setContent(<Security handleInputChange={handleInputChange} data={formData} handleRegistration={handleRegistration} />)
        break
      default:
        break
    }
  }, [title, formData])

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  const handleGoBack = () => {
    switch (title.label) {
      case 'inscription':
        navigation.navigate('Login')
        break
      case 'healthPro':
        setTitle({ value: 'Inscription', label: 'inscription' })
        break
      case 'security':
        setTitle({ value: 'Êtes-vous accompagnés par un professionnel de santé ?', label: 'healthPro' })
        break

      default:
        break
    }
  }

  const handleRegistration = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Erreur champ(s) vide')
      return
    }
    if (!formData.securityPassword || !formData.confirmSecurityPassword) {
      alert('Erreur champ(s) code de sécurité vide')
      return
    }
    dispatch(register(formData))
  }

  const handleChangeView = () => {
    switch (title.label) {
      case 'inscription':
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
          alert('Erreur champ vide')
          return
        }
        if (formData.password !== formData.confirmPassword) {
          alert('Erreur mot de passe différent')
          return
        }
        setTitle({ value: 'Êtes-vous accompagnés par un professionnel de santé ?', label: 'healthPro' })
        break
      case 'healthPro':
        setTitle({ value: 'Sécurité parentale', label: 'security' })
        break
      default:
        break
    }
  }

  return (
    <KeyboardAvoidingView style={[styles.bg_cream, styles.flex_1]}>
      <ScrollView contentContainerStyle={[styles.justifyContentBetween, styles.flex_1, style.container]}>
        <View style={[styles.alignItems, styles.flexRow, style.titleContainer]}>
          <Button isStrech={false} text='Retour' color='white' isReturn action={handleGoBack} />
          <CustomText style={[styles.textAlign, style.title]}>{title.value}</CustomText>
        </View>
        {content}
      </ScrollView>
    </KeyboardAvoidingView >
  )
}

export default Register

const style = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: 'flex-start',
  },
  titleContainer: {
    gap: 50,
    alignSelf: 'stretch',
  },
  title: {
    position: 'absolute',
    width: 985,
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