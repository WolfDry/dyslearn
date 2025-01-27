import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { black, styles } from '../../../assets/style/style'

const Frieze = () => {
  const [numberArray, setNumberArray] = useState<object[]>([])
  const [propositions, setPropositions] = useState<number[]>([])
  const [friezeWidth, setFriezeWidth] = useState<number>(0)
  const [findableNumber, setFindableNumber] = useState<number>(0)

  useEffect(() => {
    resetGame()
  }, [friezeWidth])

  const resetGame = () => {
    if (friezeWidth > 0) {
      const newNumbers = []
      for (let index = 0; index <= 10; index++) {
        newNumbers.push({
          index,
          left: (index / 10) * friezeWidth,
          isFindable: true
        })
      }
      let newFindableNumber;
      do {
        newFindableNumber = Math.floor(Math.random() * 11);
      } while (newFindableNumber === findableNumber)
      setFindableNumber(newFindableNumber)
      newNumbers[newFindableNumber].isFindable = false
      setNumberArray(newNumbers)
      const valueArray = newNumbers.map(item => item.index)
      valueArray.splice(newFindableNumber, 1)
      const newPropositions = [newFindableNumber]
      for (let index = 0; index < 2; index++) {
        const newNumber = valueArray.splice(Math.floor(Math.random() * valueArray.length))[0]
        newPropositions.push(newNumber)
      }

      for (var i = newPropositions.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newPropositions[i];
        newPropositions[i] = newPropositions[j];
        newPropositions[j] = temp;
      }
      setPropositions(newPropositions)
    }
  }

  const handlePress = (value) => {
    if (value === findableNumber)
      alert('Bravo tu as réussi !')
    else
      alert('Désolé tu as raté !')
    resetGame()
  }

  return (
    <View style={[styles.full_h, styles.center, styles.padding_50]}>
      <View
        style={[style.frieze, styles.full_w, styles.margin_100]}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout
          setFriezeWidth(width)
        }}
      >
        {numberArray.map((item: { index: number, left: number, isFindable: boolean }, index) => (
          <View key={index} style={[style.tag, { left: item.left }]}>
            <Text style={[style.tagText, styles.textAlign]}>{item.isFindable ? item.index : null}</Text>
          </View>
        ))}
      </View>
      <View style={[styles.center, styles.flexRow]}>
        {
          propositions.map((item, index) => (
            <Pressable key={index} style={[style.button]} onPress={() => handlePress(item)}>
              <Text style={styles.textAlign}>{item}</Text>
            </Pressable>
          ))
        }
      </View>
    </View>
  )
}

export default Frieze

const style = StyleSheet.create({
  frieze: {
    position: 'relative',
    height: 1,
    backgroundColor: black,
    gap: 100,
  },
  tag: {
    position: 'absolute',
    height: 15,
    width: 1,
    backgroundColor: black,
    top: -7,
    gap: 100,
  },
  tagText: {
    position: 'absolute',
    width: 25,
    top: 15,
    left: -12
  },
  button: {
    width: 30,
    paddingVertical: 10,
    fontSize: 12,
    borderWidth: 1
  }
})
