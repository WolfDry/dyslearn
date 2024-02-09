import React from 'react'
import { Text, View, Image } from 'react-native';

const logo = require('../../assets/logo/logo.png')

const Logo = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
        <Image source={logo} style={{width: '100%', height: '100%'}} resizeMode='contain' />
    </View>
  )
}

export default Logo