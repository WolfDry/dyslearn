import React from 'react'
import { Text, View } from 'react-native';
import Logo from '../components/Logo'
import LoginContainer from '../components/form/login/LoginContainer';

import { styles } from '../../assets/style/style'

const Login = () => {
  return (
    <View style={[styles.flex_1, styles.bg_cream]}>
      <View style={styles.flex_2}>
        <View style={[styles.flex_1, styles.center]}>
          <View style={[styles.center, { width: '40%', height: '40%' }]}>
            <Logo />
          </View>
        </View>
      </View>
      <View style={styles.flex_3}>
        <View style={styles.flex_1}>
          <Text style={[styles.title]}>Bienvenu.e</Text>
        </View>
        <View style={styles.flex_5}>
          <LoginContainer />
        </View>
      </View>
    </View>
  )
}

export default Login