import React from 'react'
import { Text, View, Image } from 'react-native';
import logo from '../../assets/logo/logo.png'

const Logo = () => {
  return (
    <View>
        <Image source={logo} />
    </View>
  )
}

export default Logo