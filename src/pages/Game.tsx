import React from 'react'
import { View } from 'react-native'
import { styles } from '../../assets/style/style'
import Bubble from '../components/games/Bubble'
import Duel from '../components/games/Duel'
import Frieze from '../components/games/Frieze'
import CustomText from '../components/CustomText'
import { useDispatch } from 'react-redux'
import { insertReport } from '../store/thunks/authThunks'
import { AppDispatch } from '../store/type'

const Game = ({ route }) => {

  const dispatch: AppDispatch = useDispatch()

  const addReport = (isWin) => {
    const data = {
      exercice: route.params, isWin
    }
    dispatch(insertReport(data))
  }

  switch (route.params) {
    case 'bubble':
      return (
        <Bubble />
      )
    case 'duel':
      return (
        <Duel addReport={addReport} />
      )
    case 'frieze':
      return (
        <Frieze />
      )
    default:
      return (
        <View style={[styles.center, styles.flex_1]}>
          <CustomText style={null}>
            No game page
          </CustomText>
        </View>
      )
  }
}

export default Game