import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from '../../pages/Welcome'
import Home from '../../pages/Home'
import Game from '../../pages/Game'
import Theme from '../../pages/Theme'

export type RootStackParamList = {
  Welcome: undefined,
  Home: undefined,
  Game: undefined,
  Theme: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const CreateUserNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Theme" component={Theme} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default CreateUserNavigator
