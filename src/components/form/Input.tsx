import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/style/style'

type InputProps = {
    placeholder: string,
    password: boolean
}

const Input = (props: InputProps) => {
    return (
        <View style={style.inputContainer}>
            <TextInput style={[style.input, styles.glacialBold]} placeholder={props.placeholder} placeholderTextColor={'rgba(255, 250, 239, 0.53)'} secureTextEntry={props.password} />
        </View>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 125,
        borderBottomRightRadius: 125,
        borderBottomLeftRadius: 150,
        backgroundColor: '#29BADA',
    },

    input: {
        fontSize: 15,
    }
})

export default Input