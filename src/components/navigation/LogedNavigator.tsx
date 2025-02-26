import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../../pages/Home'
import Theme from '../../pages/Theme'
import Game from '../../pages/Game'

export type RootStackParamList = {
  Home: undefined
  Theme: undefined
  Game: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const LogedNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LogedNavigator
