import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import ScanQR from '../../pages/ScanQR'
import Login from '../../pages/Login'
import Welcome from '../../pages/Welcome'
import Register from '../../pages/Register'

export type RootStackParamList = {
  Login: undefined
  Register: undefined
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
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LoginNavigator
