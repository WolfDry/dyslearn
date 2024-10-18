import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../store/type'

import { styles } from '../../assets/style/style'

const Loading = () => {
  const loading = useSelector((state: RootState) => state.auth.loading)

  if (!loading) {
    return null
  }

  return (
    <View style={[styles.flex_1, styles.center]}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text >Chargement...</Text>
    </View>
  )
}

export default Loading