import React, { useEffect, useState } from 'react'
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native'

import { styles, yellow } from '../../../assets/style/style'
import CustomText from '../CustomText'
import Header from './components/Header'
import Progression from './components/Progression'
import { useNavigation } from '@react-navigation/native'

const bg = require('../../../assets/images/background/illustration-fond-marin.png')

const fishs = [
  require("../../../assets/images/fish/poisson-1.png"),
  require("../../../assets/images/fish/poisson-2.png"),
  require("../../../assets/images/fish/poisson-3.png"),
  require("../../../assets/images/fish/poisson-4.png"),
  require("../../../assets/images/fish/poisson-5.png"),
]

const Duel = ({ addReport }) => {

  const navigation = useNavigation()

  const [values, setValues] = React.useState<number[]>([1, 2])
  const [correctValue, setCorrectValue] = useState(2)
  const [progressionImage, setProgressionImage] = useState([
    { id: 1, img: fishs[0], isDone: false },
    { id: 2, img: fishs[1], isDone: false },
    { id: 3, img: fishs[2], isDone: false },
    { id: 4, img: fishs[3], isDone: false },
    { id: 5, img: fishs[4], isDone: false },
  ])
  const [currentStep, setCurrentStep] = useState(1)
  const maxStep = 5

  useEffect(() => {
    setNumbers()
  }, [])

  const handlePress = (value: number) => {
    let isCorrect = false
    if (value === correctValue) {
      isCorrect = true
      alert('Bravo tu as réussi')
      addReport(true)
    }
    else {
      alert('Dommage tu as perdu')
      addReport(false)
    }
    setNextStep(isCorrect)
    setNumbers()
  }

  const setNextStep = (isCorrect) => {

    if (isCorrect) {
      const updated = [...progressionImage]
      const index = currentStep - 1

      updated[index].isDone = true

      setProgressionImage(updated)
    }

    if ((currentStep + 1) > maxStep) {
      setCurrentStep(1)
      navigation.goBack()
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const setNumbers = () => {
    const firstNumber = Math.floor(Math.random() * 9) + 1
    let secondNumber

    do {
      secondNumber = Math.floor(Math.random() * 9) + 1
    } while (secondNumber === firstNumber)

    const tempValues = [firstNumber, secondNumber]
    setValues(tempValues)
    setCorrectValue(getMaxValue(tempValues))
  }

  const getMaxValue = (values: number[]): number => {
    return Math.max(...values)
  }

  return (
    <ImageBackground source={bg} style={styles.flex_1}>
      <Header />
      <View style={[styles.alignItems, styles.justifyContentAround, styles.flexRow, style.container]}>
        <Pressable style={[styles.center, styles.gap_10, styles.bg_cream, style.answers]} onPress={() => handlePress(values[0])}>
          <CustomText style={[styles.yellow, style.text]}>{values[0]}</CustomText>
        </Pressable>
        <Pressable style={[styles.center, styles.gap_10, styles.bg_cream, style.answers]} onPress={() => handlePress(values[1])}>
          <CustomText style={[styles.orange, style.text]}>{values[1]}</CustomText>
        </Pressable>
      </View>
      <Progression imgs={progressionImage} />
    </ImageBackground>
  )
}

export default Duel

const style = StyleSheet.create({
  container: {
    height: '60%'
  },
  answers: {
    width: 395,
    height: 395,
    paddingVertical: 75,
    paddingHorizontal: 50,
    flexShrink: 0,
    borderWidth: 5,
    borderColor: yellow,
    borderRadius: 200
  },
  text: {
    fontSize: 96,
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: -0.96
  }
})