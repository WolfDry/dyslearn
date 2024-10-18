import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Loading from '../../pages/Loading';

export type RootStackParamList = {
  Loading: undefined
};

const Stack = createStackNavigator<RootStackParamList>()

const LoadingNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={Loading} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LoadingNavigator
