import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/pages/Login'

export default function App() {
  return (
    <NavigationContainer>
      <Login/>
    </NavigationContainer>
  );
}