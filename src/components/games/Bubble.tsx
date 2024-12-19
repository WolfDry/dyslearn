import React, { useEffect, useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
  Easing,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window')

// Créer une version animée de Pressable
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Bubble = () => {
  const [result, setResult] = useState(0)
  const [symbole, setSymbole] = useState('addition')
  const [secondNumber, setSecondNumber] = useState(Math.floor(Math.random() * (10 - 1) + 1))
  // Shared values pour la position Y et X de chaque bulle
  const bubbles = Array.from({ length: 6 }, () => ({
    y: useSharedValue(0),
    x: useSharedValue(Math.random() * (width - 70)),
  }));

  useEffect(() => {
    const correctNumber = Math.floor(Math.random() * (6 - 1) + 1)
    setResult(correctNumber + secondNumber)
  }, [])

  useEffect(() => {
    bubbles.forEach((bubble, index) => {
      bubble.y.value = withDelay(
        index * 800, // Décalage temporel entre les bulles
        withRepeat(
          withTiming(
            height,
            {
              duration: 4000,
              easing: Easing.linear,
            }
          ),
          -1, // Répétition infinie
          false // Pas d'effet "aller-retour"
        )
      );
    });
  }, []);

  const handleBubblePress = (index: number) => {
    switch (symbole) {
      case 'addition':
        if ((index + 1) + secondNumber === result) {
          alert('Bravo tu as réussi')
          resetCalcul()
        }
        else
          alert('Perdu recommence')
        break;

      default:
        break;
    }
    // Déclencher une action ici
  };

  const resetCalcul = () => {
    const sndNumber = Math.floor(Math.random() * (10 - 1) + 1)
    setSecondNumber(sndNumber)
    const correctNumber = Math.floor(Math.random() * (6 - 1) + 1)
    setResult(correctNumber + sndNumber)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: 'white', fontSize: 25 }}>Calcul : {secondNumber} + ... = {result}</Text>
      </View>
      {bubbles.map((bubble, index) => {
        // Style animé pour chaque bulle
        const animatedStyle = useAnimatedStyle(() => ({
          transform: [
            { translateY: bubble.y.value },
            { translateX: bubble.x.value },
          ],
        }));

        return (
          <AnimatedPressable
            key={index}
            onPress={() => handleBubblePress(index)}
            style={[styles.bubble, animatedStyle]}
          >
            <Text style={styles.bubbleText}>{index + 1}</Text>
          </AnimatedPressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  bubble: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35, // Corrigé pour correspondre à la taille
    backgroundColor: 'rgba(0, 150, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubbleText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Bubble