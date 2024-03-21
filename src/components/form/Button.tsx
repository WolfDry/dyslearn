import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/style/style'

type InputProps = {
    text: string
}

const Button = (props: InputProps) => {
    return (
        <View>
            <Pressable style={[style.button, styles.bg_orange]}>
                <Text style={[style.text, styles.cream]}>
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
        paddingHorizontal: 60,
    },

    text: {
        fontSize: 15,
    }
})

export default Button