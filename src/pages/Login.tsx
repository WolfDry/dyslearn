import React from 'react'
import { Text, View, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import Logo from '../components/Logo'
import LoginContainer from '../components/form/login/LoginContainer';

import { styles } from '../../assets/style/style'

const Login = () => {
  return (
    <KeyboardAvoidingView style={[styles.flex_1, styles.bg_cream]}>
      <ScrollView contentContainerStyle={style.container}>
          <View style={[styles.flex_2, styles.center]}>
              <View style={[styles.center, { width: '50%', height: '50%', marginTop: '10%' }]}>
                <Logo />
              </View>
          </View>
          <View style={styles.flex_2}>
            <View style={styles.flex_025}>
              <Text style={[styles.title]}>Bienvenue</Text>
            </View>
            <View style={[styles.flex_4]}>
              <LoginContainer />
            </View>
          </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
})

export default Login