import React from 'react'
import { Text, View, TextInput, Pressable } from 'react-native';
import Logo from '../components/Logo'

const Login = () => {
  return (
    <View style={{flex: 1}}>
        <View style={{flex: 2}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: '40%', height: '40%', justifyContent: 'center', alignItems: 'center'}}>
              <Logo/>
            </View>
          </View>
        </View>
        <View style={{flex: 3}}>
          <Text>Bienvenu.e</Text>
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