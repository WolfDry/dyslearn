import React from 'react'
import { Text, View, KeyboardAvoidingView, ScrollView, StyleSheet, Platform } from 'react-native';
import Logo from '../components/Logo'
import LoginContainer from '../components/form/login/LoginContainer';

import { styles } from '../../assets/style/style'

const Login = () => {
  return (
    <KeyboardAvoidingView style={[styles.flex_1, styles.bg_cream]} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={style.container} keyboardShouldPersistTaps="handled">
          <View style={[styles.flex_2]}>
            <View style={[styles.flex_1, styles.center]}>
              <View style={[styles.center, { width: '50%', height: '50%' }]}>
                <Logo />
              </View>
            </View>
          </View>
          <View style={styles.flex_2}>
            <View>
              <Text style={[styles.title]}>Bienvenu.e</Text>
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