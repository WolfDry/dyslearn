import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { black, styles } from '../../../assets/style/style'

const Frieze = () => {
  const [numberArray, setNumberArray] = useState<object[]>([])
  const [friezeWidth, setFriezeWidth] = useState<number>(0)

  useEffect(() => {
    if (friezeWidth > 0) {
      const newArray = []
      for (let index = 0; index <= 10; index++) {
        newArray.push({
          index,
          left: (index / 10) * friezeWidth,
        })
      }
      setNumberArray(newArray)
    }
  }, [friezeWidth])

  return (
    <View style={[styles.full_h, styles.center, styles.padding_50]}>
      <View
        style={[style.frieze, styles.full_w]}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout
          setFriezeWidth(width)
        }}
      >
        {numberArray.map((item: { index: number, left: number }, index) => (
          <View key={index} style={[style.tag, { left: item.left }]}>
            <Text style={[style.tagText, styles.textAlign]}>{item.index}</Text>
          </View>
        ))}
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
})
