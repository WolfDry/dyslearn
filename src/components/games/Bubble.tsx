import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Button, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
  Easing,
} from 'react-native-reanimated';
import { RootStackParamList } from '../navigation/CreateUserNavigator';

const { width, height } = Dimensions.get('window');

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type BubbleScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Game'>;

const Bubble = () => {
  const [result, setResult] = useState(0);
  const [symbole, setSymbole] = useState('addition');
  const [secondNumber, setSecondNumber] = useState(Math.floor(Math.random() * 9) + 1);
  const navigation = useNavigation<BubbleScreenNavigationProp>();

  const bubbles = Array.from({ length: 6 }, () => ({
    y: useSharedValue(0),
    x: useSharedValue(Math.random() * (width - 70)),
  }));

  useEffect(() => {
    const correctNumber = Math.floor(Math.random() * 6) + 1;
    setResult(correctNumber + secondNumber);
  }, [secondNumber]);

  useEffect(() => {
    bubbles.forEach((bubble, index) => {
      bubble.y.value = withDelay(
        index * 800,
        withRepeat(
          withTiming(height, {
            duration: 1000,
            easing: Easing.linear,
          }),
          -1,
          false
        )
      );
    });
  }, [bubbles]);

  const handleBubblePress = (index: number) => {
    if (symbole === 'addition' && index + 1 + secondNumber === result) {
      alert('Bravo tu as réussi');
      resetCalcul();
    } else {
      alert('Perdu recommence');
    }
    resetBubbles();
  };

  const resetCalcul = () => {
    const newSecondNumber = Math.floor(Math.random() * 9) + 1;
    setSecondNumber(newSecondNumber);
    const correctNumber = Math.floor(Math.random() * 6) + 1;
    setResult(correctNumber + newSecondNumber);
  };

  const resetBubbles = () => {
    bubbles.forEach(bubble => {
      bubble.y.value = 0;
      bubble.x.value = Math.random() * (width - 70);
    });
  };

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
});

export default Bubble;
