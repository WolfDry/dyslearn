import React from 'react'
import { Text, View, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import Logo from '../components/Logo'
import LoginContainer from '../components/form/login/LoginContainer';

import { styles } from '../../assets/style/style'
import CustomText from '../components/CustomText';

const Login = () => {
  return (
    <KeyboardAvoidingView style={[styles.bg_cream, styles.flex_1]}>
      <ScrollView contentContainerStyle={[style.container, styles.alignItems, styles.justifyContentBetween]}>
        <View style={[style.logoContainer]}>
          <Logo />
        </View>
        <CustomText style={styles.title}>Connexion</CustomText>
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