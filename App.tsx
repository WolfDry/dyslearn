import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'

import { AuthProvider } from './src/context/AuthContext'
import Login from './src/pages/Login'
import QrCode from './src/pages/QrCode'

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
      <NavigationContainer>
        <Login />
        {/* <QrCode/> */}
      </NavigationContainer>
    </AuthProvider>
  );
}