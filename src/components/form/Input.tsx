import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { styles } from '../../../assets/style/style'
import Icon from 'react-native-vector-icons/Ionicons'

type InputProps = {
    placeholder: string,
    password: boolean,
    setValue: (value: string) => void
}

const Input = (props: InputProps) => {

    const [hidePassword, setHidePassword] = useState(props.password)

    return (
        <View style={[style.inputContainer, styles.justifyContentCenter, styles.bg_blue, styles.alignItems]}>
            <TextInput
                style={[style.input, styles.glacialBold, styles.cream, styles.flex_1]}
                placeholder={props.placeholder}
                placeholderTextColor={'rgba(255, 250, 239, 0.53)'}
                secureTextEntry={hidePassword}
                onChangeText={props.setValue}
            />
            {props.password && (
                <Icon
                style={style.icon}
                    onPress={() => {
                        setHidePassword(!hidePassword)
                    }}
                    name={hidePassword ? "eye-outline" : "eye-off-outline"}
                />
            )}
        </View>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 38,
        paddingHorizontal: '10%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 125,
        borderBottomRightRadius: 125,
        borderBottomLeftRadius: 150,
    },

    input: {
        fontSize: 15,
    },

    icon: {
        fontSize: 20,
        color: 'rgba(255, 250, 239, 0.53)',
    }
})

export default Input