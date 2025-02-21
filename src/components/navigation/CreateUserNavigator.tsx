import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from '../../pages/Welcome'
import Home from '../../pages/Home'
import Game from '../../pages/Game'
import Theme from '../../pages/Theme'
import CreateChild from '../../pages/CreateChild'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/type'

export type RootStackParamList = {
  CreateChild: undefined
  Welcome: undefined,
  // Home: undefined,
  // Game: undefined,
  // Theme: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const CreateUserNavigator = () => {

  const user = useSelector((state: RootState) => state.auth.user)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user.children.length > 0 ? 'Welcome' : 'CreateChild'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CreateChild" component={CreateChild} />
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Theme" component={Theme} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default CreateUserNavigator
