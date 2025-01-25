import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
  Easing,
} from 'react-native-reanimated'
import { RootStackParamList } from '../navigation/CreateUserNavigator'

const { width, height } = Dimensions.get('window')

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

type BubbleScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Game'>

const Bubble = () => {
  const [result, setResult] = useState(0)
  const [symbole, setSymbole] = useState('addition')
  const [secondNumber, setSecondNumber] = useState(Math.floor(Math.random() * 9) + 1)
  const navigation = useNavigation<BubbleScreenNavigationProp>()

  const numBubbles = 6
  const bubbleSpacing = width / numBubbles // Divisez la largeur par le nombre de bulles

  const bubbles = Array.from({ length: numBubbles }, (_, index) => ({
    y: useSharedValue(0),
    x: useSharedValue(0), // Initialisez la position `x` ici
  }))

  useEffect(() => {
    const correctNumber = Math.floor(Math.random() * 6) + 1
    setResult(correctNumber + secondNumber)
  }, [secondNumber])

  useEffect(() => {
    resetBubbles()
    bubbles.forEach((bubble) => {
      bubble.y.value =
        withRepeat(
          withTiming(height, {
            duration: Math.floor(Math.random() * (6000 - 2000 + 1)) + 2000,
            easing: Easing.linear,
          }),
          -1,
          false
        )
    })
  }, [bubbles])

  const handleBubblePress = (index: number) => {
    if (symbole === 'addition' && index + 1 + secondNumber === result) {
      alert('Bravo tu as réussi')
      resetCalcul()
    } else {
      alert('Perdu recommence')
      resetCalcul()
    }
    resetBubbles()
  }

  const resetCalcul = () => {
    const newSecondNumber = Math.floor(Math.random() * 9) + 1
    setSecondNumber(newSecondNumber)
    const correctNumber = Math.floor(Math.random() * 6) + 1
    setResult(correctNumber + newSecondNumber)
  }

  const resetBubbles = () => {
    // Créez une liste de positions `x` possibles
    let possibleXPositions: Array<number> = []
    for (let i = 0; i < numBubbles; i++) {
      let xPos = bubbleSpacing * i + Math.random() * 30 - 15 // Décalage aléatoire
      possibleXPositions.push(xPos)
    }

    // Mélangez les positions pour les rendre aléatoires
    possibleXPositions = possibleXPositions.sort(() => Math.random() - 0.5)

    // Attribuez les positions `x` à chaque bulle
    bubbles.forEach((bubble, index) => {
      bubble.y.value = 0
      bubble.x.value = possibleXPositions[index] // Utilisez les positions mélangées
    })
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Retour" />
      <View>
        <Text style={{ color: 'white', fontSize: 25 }}>
          Calcul : {secondNumber} + ... = {result}
        </Text>
      </View>
      {bubbles.map((bubble, index) => {
        const animatedStyle = useAnimatedStyle(() => ({
          transform: [{ translateY: bubble.y.value }, { translateX: bubble.x.value }],
        }))

        return (
          <AnimatedPressable
            key={index}
            onPress={() => handleBubblePress(index)}
            style={[styles.bubble, animatedStyle]}
          >
            <Text style={styles.bubbleText}>{index + 1}</Text>
          </AnimatedPressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  bubble: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(0, 150, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubbleText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default Bubble
