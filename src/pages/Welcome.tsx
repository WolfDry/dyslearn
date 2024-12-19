import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '../store/type'

import Logo from '../components/Logo'
import Face from '../components/Face'

import { blue, orange, styles, yellow } from '../../assets/style/style'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../components/navigation/CreateUserNavigator'

interface child {
  id: number,
  created_at: Date,
  avatar_id: number,
  color_id: number,
  parent_id: number,
  create: boolean,
  first_name: string,
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

const Welcome = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>()
  const { parent, error }: { parent: { children: child[] }[]; error: string | null } = useSelector((state: RootState) => state.parent)

  const handleNavigation = () => {
    navigation.navigate('Home')
  }

  if (error) {
    return (
      <View style={[styles.center, styles.flex_1]}>
        <Text>{error}</Text>
      </View>
    )
  }


  return (
    <View style={[styles.flex_1, styles.bg_cream, styles.padding_60]}>
      <View style={[styles.flex_1, styles.center]}>
        <View style={[styles.center, { width: '50%', height: '50%', marginTop: '10%' }]}>
          <Logo />
        </View>
      </View>
      <View style={[styles.flex_1]}>
        <Text style={[styles.title, styles.green]}>
          Choisis ton profil
        </Text>
        <Text style={[styles.green, styles.alignItems, styles.textAlign]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        </Text>
      </View>
      <View style={[styles.flex_2, styles.flexWrap, styles.flexRow, styles.alignItems, styles.debug]}>
        <View style={[style.faceContainer, styles.alignItems]}>
          <Face border={yellow} bg={blue} />
          <Text>Parents</Text>
        </View>
        {!parent || parent.length === 0 ? (
          <Text>Aucun profil disponible</Text>
        ) : (
          parent[0]?.children?.map((child, key: number) => {
            return (
              <Pressable key={key} onPress={() => handleNavigation()}>
                <View style={[style.faceContainer, styles.alignItems]}>
                  <Face border={orange} bg={blue} />
                  <Text>{child.first_name}</Text>
                </View>
              </Pressable>
            )
          })
        )}
      </View>
    </View>
  )
}

export default Welcome

const style = StyleSheet.create({
  faceContainer: {
    width: 118,
  }
})