import React, { useEffect, useState } from 'react'
import { Pressable, View } from 'react-native'

import { styles } from '../../../assets/style/style'
import CustomText from '../CustomText'

const Duel = ({ addReport }) => {

  const [values, setValues] = React.useState<number[]>([1, 2])
  const [correctValue, setCorrectValue] = useState(1)

  useEffect(() => {
    setNumbers()
  }, [])

  const handlePress = (value: number) => {
    if (value === correctValue) {
      alert('Bravo tu as réussi')
      addReport(true)
    }
    else {
      alert('Dommage tu as perdu')
      addReport(false)
    }
    setNumbers()
  }

  const setNumbers = () => {
    const firstNumber = Math.floor(Math.random() * 9) + 1
    let secondNumber

    do {
      secondNumber = Math.floor(Math.random() * 9) + 1
    } while (secondNumber === firstNumber)

    const tempValues = [firstNumber, secondNumber]
    setValues(tempValues)
    setCorrectValue(getSmallestValue(tempValues))
  }

  const getSmallestValue = (values: number[]): number => {
    return Math.min(...values)
  }

  return (
    <View style={styles.center}>
      <CustomText style={null}>Quel chiffre est le plus petit ?</CustomText>
      <View style={[styles.center, styles.flexRow]}>
        <Pressable onPress={() => handlePress(values[0])}>
          <CustomText style={null}>{values[0]}</CustomText>
        </Pressable>
        <CustomText style={null}> ou </CustomText>
        <Pressable onPress={() => handlePress(values[1])}>
          <CustomText style={null}>{values[1]}</CustomText>
        </Pressable>
      </View>
    </View>
  )
}

export default Duel