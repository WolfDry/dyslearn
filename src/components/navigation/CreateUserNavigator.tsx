import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from '../../pages/Welcome'

export type RootStackParamList = {
  Welcome: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const CreateUserNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default CreateUserNavigator
