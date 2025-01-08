import React from 'react'
import { Text, View, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import Logo from '../components/Logo'
import LoginContainer from '../components/form/login/LoginContainer';

import { styles } from '../../assets/style/style'

const Login = () => {
  return (
    <KeyboardAvoidingView style={[styles.bg_cream]}>
      <ScrollView contentContainerStyle={[style.container, styles.alignItems]}>
        <View style={[style.logoContainer, styles.center]}>
          <Logo />
        </View>
        <Text style={[styles.title, styles.full_w]}>Connexion</Text>
        <LoginContainer />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 102,
    paddingVertical: 55,
  },

  logoContainer: {
    width: 360,
    height: 280
  }
})

export default Login