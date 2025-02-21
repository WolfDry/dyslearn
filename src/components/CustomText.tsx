import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../store/type'

const CustomText = ({ style, ...props }) => {

  const fontFamily = useSelector((state: RootState) => state.typo.typo)

  return (
    <Text style={[{ fontFamily }, style]} {...props} />
  )
}

export default CustomText