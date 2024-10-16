import React, { useEffect } from 'react'

import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import { store } from './src/store/store'

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
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
} 