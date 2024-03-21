import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Input from './Input'
import { styles } from '../../../assets/style/style'

const FormContainer = () => {
  return (
    <View style={[style.container]}>
        <View style={{height: '45%', justifyContent: 'space-around'}}>
            <Input placeholder='Email' />
            <Input placeholder='Mot de passe' />
        </View>
        <View style={[{alignItems: 'flex-end'}]}>
            <Text>Mot de passe oublié ?</Text>
        </View>
        <View style={styles.center}>
            <Pressable>
                <Text>
                    Se connecter
                </Text>
            </Pressable>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: '10%'
    }
})

export default FormContainer