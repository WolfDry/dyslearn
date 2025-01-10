import React from 'react'
import { Text, View, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import Logo from '../components/Logo'
import LoginContainer from '../components/form/login/LoginContainer';

import { styles } from '../../assets/style/style'

const Login = () => {
  return (
    <KeyboardAvoidingView style={[styles.bg_cream, styles.flex_1]}>
      <ScrollView contentContainerStyle={[style.container, styles.alignItems, styles.justifyContentBetween]}>
        <View style={[style.logoContainer]}>
          <Logo />
        </View>
        <Text style={[styles.title]}>Connexion</Text>
        <LoginContainer />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 50
  },

  logoContainer: {
    alignItems: 'flex-start',
    gap: 10
  }
})

export default Login