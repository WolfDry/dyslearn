import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../assets/style/style'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../components/navigation/CreateUserNavigator'

type ThemeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Theme'>

const Theme = ({ route }) => {

  const navigation = useNavigation<ThemeScreenNavigationProp>()

  const handleNavigate = (game) => {
    navigation.navigate('Game', game)
  }

  return (
    <View style={[styles.center, styles.full_h]}>
      <Pressable onPress={() => handleNavigate('bubble')}>
        <Text>Bulles</Text>
      </Pressable>
      <Pressable onPress={() => handleNavigate('duel')}>
        <Text>Duel</Text>
      </Pressable>
      <Pressable onPress={() => handleNavigate('frieze')}>
        <Text>Frise</Text>
      </Pressable>
    </View>
  )
}

export default Theme