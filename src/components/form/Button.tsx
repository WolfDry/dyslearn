import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { darkBlue, styles } from '../../../assets/style/style'

type InputProps = {
  text: string,
  color: string,
  iconName: string,
  action?: () => Promise<void>
}

const Button = (props: InputProps) => {
  return (
    <Pressable style={[
      style.button,
      styles.center,
      props.color == 'lightBlue' ? styles.bg_lightBlue :
        props.color == 'orange' ? styles.bg_orange :
          props.color == 'darkBlue' ? styles.bg_darkBlue :
            styles.bg_cream
    ]}
      onPress={props.action}
    >
      <Text style={[style.text, styles.cream, styles.glacialBold, styles.black]}>
        {props.text}
      </Text>
    </Pressable>
  )
}

const style = StyleSheet.create({

  button: {
    flexGrow: 1,
    height: 110,
    borderRadius: 30,
    paddingHorizontal: 40,
    gap: 40,
    shadowColor: darkBlue,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 5
  },

  text: {
    textAlign: 'center',
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