import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import ScanQR from '../../pages/ScanQR'
import Login from '../../pages/Login'
import Welcome from '../../pages/Welcome'

export type RootStackParamList = {
  Theme: undefined
  Login: undefined
  QrCode: undefined
  Welcome: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const LoginNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="QrCode" component={ScanQR} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LoginNavigator
