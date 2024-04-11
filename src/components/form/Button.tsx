import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/style/style'

type InputProps = {
    text: string,
    color: string,
}

const Button = (props: InputProps) => {
    console.log(props.color)
    return (
        <View>
            <Pressable style={[
                style.button,
                props.color == 'yellow' ? styles.bg_yellow : 
                props.color == 'orange' ? styles.bg_orange :
                props.color == 'blue' ? styles.bg_blue :
                styles.bg_cream
            ]}>
                <Text style={[style.text, styles.cream, styles.glacialBold]}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({

    button: {
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 50,
    },

    text: {
        width: '100%',
        textAlign: 'center',
        fontSize: 15,
    }
})

export default Button