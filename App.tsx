import React, { useEffect } from 'react'

import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import { store } from './src/store/store'

import Navigator from './src/components/navigation/Navigator'

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [fontsLoaded] = useFonts({
    'Verdana': require('./assets/fonts/Verdana/Verdana.ttf'),
    'Verdana Bold': require('./assets/fonts/Verdana/Verdana Bold.ttf'),
    'Verdana Italic': require('./assets/fonts/Verdana/Verdana Italic.ttf'),
    'Verdana Bold Italic': require('./assets/fonts/Verdana/Verdana Bold Italic.ttf'),
    'OpenDyslexic': require('./assets/fonts/OpenDyslexic/OpenDyslexic-Regular.otf'),
    'OpenDyslexic-Bold': require('./assets/fonts/OpenDyslexic/OpenDyslexic-Bold.otf'),
    'OpenDyslexic-Bold-Italic': require('./assets/fonts/OpenDyslexic/OpenDyslexic-BoldItalic.otf'),
    'OpenDyslexic-Italic': require('./assets/fonts/OpenDyslexic/OpenDyslexic-Italic.otf'),
    'OpenDyslexic-Alta-Regular': require('./assets/fonts/OpenDyslexic/OpenDyslexicAlta-Regular.otf'),
    'OpenDyslexic-Alta-Bold': require('./assets/fonts/OpenDyslexic/OpenDyslexicAlta-Bold.otf'),
    'OpenDyslexic-Alta-Bold-Italic': require('./assets/fonts/OpenDyslexic/OpenDyslexicAlta-BoldItalic.otf'),
    'OpenDyslexic-Alta-Italic': require('./assets/fonts/OpenDyslexic/OpenDyslexicAlta-Italic.otf'),
    'OpenDyslexic-Mono-Regular': require('./assets/fonts/OpenDyslexic/OpenDyslexicMono-Regular.otf'),
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
      <Navigator />
    </Provider>
  );
} 