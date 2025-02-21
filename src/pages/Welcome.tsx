import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '../store/type'

import Logo from '../components/Logo'
import Face from '../components/Face'

import { lightBlue, orange, styles } from '../../assets/style/style'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../components/navigation/CreateUserNavigator'
import CustomText from '../components/CustomText'

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
  const { user, error }: { user: { children: child[] }[]; error: string | null } = useSelector((state: RootState) => state.auth)

  const handleNavigation = () => {
    navigation.navigate('Home')
  }

  if (error) {
    return (
      <View style={[styles.center, styles.flex_1]}>
        <CustomText style={styles.darkBlue}>{error}</CustomText>
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
        <CustomText style={[styles.title, styles.darkBlue]}>
          Choisis ton profil
        </CustomText>
        <CustomText style={[styles.darkBlue, styles.alignItems, styles.textAlign]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        </CustomText>
      </View>
      <View style={[styles.flex_2, styles.flexWrap, styles.flexRow, styles.alignItems]}>
        <View style={[style.faceContainer, styles.alignItems]}>
          <Face border={orange} bg={lightBlue} />
          <CustomText style={styles.darkBlue}>Parents</CustomText>
        </View>
        {!user || user.length === 0 ? (
          <CustomText style={styles.darkBlue}>Aucun profil enfant disponible</CustomText>
        ) : (
          user[0]?.children?.map((child, key: number) => {
            return (
              <Pressable key={key} onPress={() => handleNavigation()}>
                <View style={[style.faceContainer, styles.alignItems]}>
                  <Face border={orange} bg={lightBlue} />
                  <CustomText style={styles.darkBlue}>{child.first_name}</CustomText>
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