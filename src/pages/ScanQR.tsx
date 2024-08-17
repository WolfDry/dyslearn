import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useAuth } from '../context/AuthContext';
import JWT from 'expo-jwt'

const ScanQR: React.FC = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const { error, login } = useAuth()

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Nous avons besoins de votre permission pour ustiliser la caméra</Text>
        <Button onPress={requestPermission} title="Donné l'accès" />
      </View>
    );
  }

  function rescan() {
    setScanned(false)
  }

  const handleBarCodeScan = async ({ data }: { type: string, data: string }) => {
    console.log('scan')
    setScanned(true);
    if (!scanned) {
      const jsonToken = data
      const secretKey = 'r/E2q-6S9iuL^P4~q9D92d)p4;Qg5zN}(EMd2J4Ayqx!5*?7Y@'

      try {
        const decoded = JWT.decode(jsonToken, secretKey)
        console.log(decoded)
        const loginResult = await login(decoded.email, decoded.password)    
        console.log(loginResult)
      } catch (error) {
        console.error('erreur de déchiffrement', error)
      }
    }
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={'back'} autofocus='on' barcodeScannerSettings={{ barcodeTypes: ['qr'] }} onBarcodeScanned={handleBarCodeScan}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={rescan}>
            <Text style={styles.text}>Rescanner le QrCode</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default ScanQR