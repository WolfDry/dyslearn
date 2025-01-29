import { Text, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { darkBlue, styles } from '../../../assets/style/style'
import Svg, { Path } from 'react-native-svg'
import { Shadow } from 'react-native-shadow-2'

type InputProps = {
  text: string
  color: string
  isReturn?: boolean
  action?: () => any
}

const Button = (props: InputProps) => {

  const [color, setColor] = useState(null)

  useEffect(() => {
    switch (props.color) {
      case 'lightBlue':
        setColor({ background: styles.bg_lightBlue })
        break
      case 'orange':
        setColor({ background: styles.bg_orange })
        break
      case 'darkBlue':
        setColor({ background: styles.bg_darkBlue })
        break
      case 'white':
        setColor({ background: styles.bg_white })
        break
      default:
        setColor({ background: styles.bg_cream })
        break
    }
  }, [])

  if (props.isReturn)
    return (
      <Shadow distance={15} startColor='rgba(2, 52, 54, 0.20)' offset={[10, 10]}>
        <Pressable style={[styles.center, styles.bg_cream, styles.flexRow, styles.bg_white, style.returnButton]}
          onPress={props.action}
        >
          <Svg width="33" height="34" viewBox="0 0 33 34" fill="none">
            <Path d="M0 15L11.5256 0V8.33333C31.2065 8.33333 33.477 24.4633 32.9304 33.3333C32.1038 28.8583 31.7202 21.6667 11.5256 21.6667V30L0 15Z" fill="#FD9830" />
          </Svg>
          <Text style={[style.returnText, styles.cream, styles.glacialBold, styles.black]}>
            {props.text}
          </Text>
        </Pressable>
      </Shadow>
    )

  return (
    // <Shadow distance={15} startColor='rgba(2, 52, 54, 0.20)' offset={[10, 10]}>
    <Pressable style={[
      style.button,
      styles.center,
      color ? color.background : null,
    ]}
      onPress={props.action}
    >
      <Text style={[style.text, styles.cream, styles.glacialBold, styles.black]}>
        {props.text}
      </Text>
    </Pressable>
    // </Shadow>
  )
}

const style = StyleSheet.create({

  button: {
    height: 100,
    paddingHorizontal: 40,
    gap: 40,
    flexShrink: 0,
    alignSelf: 'stretch',
    borderRadius: 30
  },

  returnButton: {
    padding: 30,
    gap: 10,
    borderRadius: 30,
  },

  returnText: {
    fontSize: 24,
    fontWeight: 400,
    letterSpacing: 0.48,

  },

  text: {
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: 1.2,
  },

  icon: {
    fontSize: 40,
    color: 'white',
  }
})

export default Button