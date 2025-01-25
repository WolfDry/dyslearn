import React, { useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'

import { styles } from '../../../assets/style/style'

const Duel = () => {

  const [values, setValues] = React.useState<number[]>([1, 2])
  const [correctValue, setCorrectValue] = useState(1)

  useEffect(() => {
    setNumbers()
  }, [])

  const handlePress = (value: number) => {
    if (value === correctValue)
      alert('Bravo tu as réussi')
    else
      alert('Dommage tu as perdu')
    setNumbers()
  }

  const setNumbers = () => {
    const firstNumber = Math.floor(Math.random() * 9) + 1
    let secondNumber

    do {
      secondNumber = Math.floor(Math.random() * 9) + 1
    } while (secondNumber === firstNumber)

    const tempValues = [firstNumber, secondNumber];
    setValues(tempValues);
    setCorrectValue(getSmallestValue(tempValues));
  };

  const getSmallestValue = (values: number[]): number => {
    return Math.min(...values);
  };

  return (
    <View style={styles.center}>
      <Text>Quel chiffre est le plus petit ?</Text>
      <View style={[styles.center, styles.flexRow]}>
        <Pressable onPress={() => handlePress(values[0])}>
          <Text>{values[0]}</Text>
        </Pressable>
        <Text> ou </Text>
        <Pressable onPress={() => handlePress(values[1])}>
          <Text>{values[1]}</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Duel