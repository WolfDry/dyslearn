import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../../pages/Home'

export type RootStackParamList = {
  Home: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const LogedNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LogedNavigator
