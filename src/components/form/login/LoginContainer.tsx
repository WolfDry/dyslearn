import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Input from '../Input'
import { styles } from '../../../../assets/style/style'
import Button from '../Button'

const LoginContainer = () => {
    return (
        <View style={[style.container, styles.flex_075]}>
            <View style={styles.flex_1}>
                <View style={style.inputContainer}>
                    <Input placeholder='Email' password={false} />
                    <Input placeholder='Mot de passe' password={true} />
                </View>
                <View style={style.forgotContainer}>
                    <Text style={[style.forgotText, styles.blue, styles.glacialRegular]}>Mot de passe oublié ?</Text>
                </View>
            </View>
            <View style={[styles.alignItems, styles.flex_1, style.buttonContainer]}>
                <Button text='Se connecter' />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: '10%',
    },

    inputContainer: {
        height: '75%',
        justifyContent: 'space-around'
    },

    forgotContainer: {
        alignItems: 'flex-end',
        padding: 10
    },

    forgotText:{
        fontSize: 12,
    },

    buttonContainer: {
        paddingTop: '10%'
    }
})

export default LoginContainer