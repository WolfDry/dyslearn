import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from '../../pages/Welcome'
import Home from '../../pages/Home'

export type RootStackParamList = {
  Welcome: undefined,
  Home: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const CreateUserNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default CreateUserNavigator
