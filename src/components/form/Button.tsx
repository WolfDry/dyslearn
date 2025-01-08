import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/style/style'
import Icon from 'react-native-vector-icons/Ionicons'

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
      styles.flexRow,
      styles.alignItems,
      styles.justifyContentBetween,
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
      <Icon style={style.icon} name={props.iconName} />
    </Pressable>
  )
}

const style = StyleSheet.create({

  button: {
    borderRadius: 50,
    paddingVertical: 35,
    paddingHorizontal: 100,
    gap: 20,
  },

  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 700,
  },

  icon: {
    fontSize: 40,
    color: 'white',
  }
})

export default Button