import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Input from './Input'
import { styles } from '../../../assets/style/style'

const Container = () => {
    return (
        <View style={[style.container, styles.flex_075, styles.debug]}>
            <View style={styles.flex_3}>
                <View style={{ height: '45%', justifyContent: 'space-around' }}>
                    <Input placeholder='Email' />
                    <Input placeholder='Mot de passe' />
                </View>
                <View style={[{ alignItems: 'flex-end' }]}>
                    <Text>Mot de passe oublié ?</Text>
                </View>
            </View>
            <View style={[styles.center, styles.flex_1]}>
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
        paddingHorizontal: '10%',
    }
})

export default Container