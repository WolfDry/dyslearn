import React from 'react'
import { Image } from 'react-native';

const logo = require('../../assets/logo/logo.png')

const Logo = () => {
  return (
    <Image source={logo} resizeMode='contain' />
  )
}

export default Logo