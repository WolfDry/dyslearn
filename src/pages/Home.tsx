import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

import { styles } from '../../assets/style/style'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../components/navigation/CreateUserNavigator'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

const Home = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>()

  const handleNavigation = () => {
    navigation.navigate('Game')
  }

  return (
    <View style={[styles.flex_1, styles.center]}>
      <View style={[styles.flexRow, styles.bg_blue, style.container]}>
        <Pressable style={[styles.flex_1, styles.bg_orange, styles.padding_100]} onPress={() => handleNavigation()}>
          <Text style={[styles.textAlign, style.card]}>
            Jeux
          </Text>
        </Pressable>
        <Pressable style={[styles.flex_1, styles.bg_orange, styles.padding_100]}>
          <Text style={[styles.textAlign, style.card]}>
            Leçons
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: 1200,
    gap: 100,
    borderRadius: 60,
  },
  card: {
    padding: 100,
    borderRadius: 500,
    gap: 10,
    alignSelf: 'stretch',
  }
})

export default Home