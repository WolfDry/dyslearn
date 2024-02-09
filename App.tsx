import React, { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'

import Login from './src/pages/Login'

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'glacial-regular': require('./assets/fonts/glacial-indifference.regular.otf'),
    'glacial-bold' : require('./assets/fonts/glacial-indifference.bold.otf'),
  })

  const onLayontRootView = useCallback(async () => {
    if(fontsLoaded || fontError){
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if(!fontsLoaded && !fontError){
    return null
  }

  return (
    <NavigationContainer>
      <Login/>
    </NavigationContainer>
  );
}