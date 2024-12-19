import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Logo from '../components/Logo'
import Face from '../components/Face'

import { blue, orange, styles, yellow } from '../../assets/style/style'
import { useSelector } from 'react-redux'
import { RootState } from '../store/type'

interface child {
  id: number,
  created_at: Date,
  avatar_id: number,
  color_id: number,
  parent_id: number,
  create: boolean,
  first_name: string,
}

const Welcome = () => {

  const { parent, error } = useSelector((state: RootState) => state.parent)

  if (error)
    return (
      <Text>{error}</Text>
    )

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
        {parent[0].children.map((child: child, key: number) => {
          return (
            <View key={key} style={[style.faceContainer, styles.alignItems]}>
              <Face border={orange} bg={blue} />
              <Text>{child.first_name}</Text>
            </View>
          )
        })}
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