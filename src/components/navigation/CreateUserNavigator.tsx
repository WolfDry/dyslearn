import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import CreateChild from '../../pages/CreateChild'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/type'

export type RootStackParamList = {
  CreateChild: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const CreateUserNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'CreateChild'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CreateChild" component={CreateChild} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default CreateUserNavigator
