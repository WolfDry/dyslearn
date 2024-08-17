import React, { useEffect } from 'react';

import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'

import { AuthProvider } from './src/context/AuthContext'
import Navigator from './src/components/navigation/Navigator'

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [fontsLoaded] = useFonts({
    'glacial-regular': require('./assets/fonts/glacial-indifference-regular.otf'),
    'glacial-bold': require('./assets/fonts/glacial-indifference-bold.otf'),
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])

  if (!fontsLoaded) {
    return undefined
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <AuthProvider>
      <Navigator/>
    </AuthProvider>
  );
}