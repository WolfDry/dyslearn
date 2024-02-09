import React from 'react'
import { Text, View, TextInput, Pressable } from 'react-native';
import Logo from '../components/Logo'

import { styles } from '../../assets/style/style'

const Login = () => {
  return (
    <View style={[styles.flex_1, styles.bg_cream]}>
        <View style={styles.flex_2}>
          <View style={[styles.flex_1, styles.center]}>
            <View style={[styles.center, {width: '40%', height: '40%'}]}>
              <Logo/>
            </View>
          </View>
        </View>
        <View style={styles.flex_3}>
          <Text style={[styles.title, {fontFamily: 'glacial-regular'}]}>Bienvenu.e</Text>
          <TextInput placeholder='E-mail' />
          <TextInput placeholder='Mot de passe' />
          <Text>Mot de passe oublié ?</Text>
          <Pressable>
            <Text>
              Se connecter
            </Text>
          </Pressable>
        </View>
    </View>
  )
}

export default Login