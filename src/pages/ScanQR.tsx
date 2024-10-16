import React, { useState } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { Svg, Path } from 'react-native-svg'
import JWT from 'expo-jwt'
import { JWT_SECRET } from '@env'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/type'
import { login } from '../store/thunks/authThunks'

import { styles } from '../../assets/style/style'
import { blue } from '../../assets/style/style'


const ScanQR = () => {
  const [permission, requestPermission] = useCameraPermissions()
  const [scanned, setScanned] = useState(false)
  const { error } = useSelector((state: RootState) => state.auth)
  const dispatch: AppDispatch = useDispatch()

  if (!permission) {
    return <View />
  }

  if (!permission.granted) {
    return (
      <View style={style.container}>
        <Text style={style.message}>Nous avons besoins de votre permission pour ustiliser la caméra</Text>
        <Button onPress={requestPermission} title="Donner l'accès" />
      </View>
    )
  }

  const handleBarCodeScan = async ({ data }: { type: string, data: string }) => {
    console.log('scan')
    setScanned(true)
    if (!scanned) {
      const jsonToken = data
      const secretKey = JWT_SECRET

      try {
        const decoded = JWT.decode(jsonToken, secretKey)
        console.log(decoded)
        dispatch(login(decoded.email, decoded.password))
      } catch (error) {
        console.error('erreur de déchiffrement', error)
      }
    }
  }

  return (
    <View style={[styles.justifyContentCenter, styles.flex_1, styles.center]}>
      <View style={[styles.center, style.container]}>
        <Text style={styles.title}>Scanner le QR code</Text>
        <View style={[styles.flex_1, styles.full, style.cameraContainer]}>
          <View style={[style.blueBorderTopLeft]} >
            <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <Path d="M47.5 2.5H2.5V47.5" stroke={blue} strokeWidth={5} strokeLinecap={"round"} strokeLinejoin={"round"} />
            </Svg>
          </View>
          <View style={[style.blueBorderTopRight]} >
            <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <Path d="M2.5 2.5H47.5V47.5" stroke={blue} strokeWidth={5} strokeLinecap={"round"} strokeLinejoin={"round"} />
            </Svg>
          </View>
          <View style={[style.blueBorderBottomLeft]} >
            <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <Path d="M47.5 47.5H2.5V2.5" stroke={blue} strokeWidth={5} strokeLinecap={"round"} strokeLinejoin={"round"} />
            </Svg>
          </View>
          <View style={[style.blueBorderBottomRight]} >
            <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <Path d="M2.5 47.5H47.5V2.5" stroke={blue} strokeWidth={5} strokeLinecap={"round"} strokeLinejoin={"round"} />
            </Svg>
          </View>
          <CameraView style={style.camera} facing={'back'} autofocus='on' barcodeScannerSettings={{ barcodeTypes: ['qr'] }} onBarcodeScanned={handleBarCodeScan} />
        </View>
        {error && <Text>{error}</Text>}
      </View>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    width: 287,
    height: 455,
    gap: 20,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  cameraContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#023436',
    zIndex: 1,
  },
  blueBorderTopLeft: {
    position: 'absolute',
    top: -3,
    left: -3.5,
    zIndex: 10,
  },
  blueBorderTopRight: {
    position: 'absolute',
    top: -3,
    right: -3.5,
    zIndex: 10,
  },
  blueBorderBottomLeft: {
    position: 'absolute',
    bottom: -3,
    left: -3.5,
    zIndex: 10,
  },
  blueBorderBottomRight: {
    position: 'absolute',
    bottom: -3,
    right: -3.5,
    zIndex: 10,
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
})

export default ScanQR