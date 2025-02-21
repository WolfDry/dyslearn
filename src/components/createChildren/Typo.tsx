import React from 'react'
import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, View } from 'react-native'
import { darkBlue, styles } from '../../../assets/style/style'
import Button from '../form/Button';
import Svg, { Circle, G, Path } from 'react-native-svg';
import CustomText from '../CustomText';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/type';
import { updateTypo } from '../../store/actions/typoActions';
const { width, height } = Dimensions.get('window');

const bg = require('../../../assets/images/background/illustration-salle-de-jeu.png')
const redd = require('../../../assets/images/character/t-shirt.png')

const Typo = ({ setStep }) => {

  const dispatch: AppDispatch = useDispatch()
  const typo = useSelector((state: RootState) => state.typo.typo)

  const handleChangeTypo = () => {
    switch (typo) {
      case 'Verdana':
        dispatch(updateTypo('OpenDyslexic'))
        break
      case 'OpenDyslexic':
        dispatch(updateTypo('Verdana'))
      default:
        break
    }
  }

  return (
    <ImageBackground source={bg} style={[styles.justifyContentCenter, styles.alignItems, style.bg]}>
      <View style={[styles.full_h, styles.full_w, styles.justifyContentBetween, styles.padding_50]}>
        <Button isStrech={false} text='Retour' isReturn action={() => setStep('intro')} />
        <View style={[styles.alignSelfStrech, style.container]}>
          <View style={[styles.flexRow, styles.justifyContentCenter, styles.alignSelfStrech, styles.alignItemsStart]}>
            <View style={[styles.alignItems, styles.gap_20]}>
              <Image style={[styles.flex_1, styles.alignSelfStrech, style.image]} source={redd} />
            </View>
            <View style={[styles.padding_50, styles.alignItems, styles.gap_50, styles.bg_cream, style.bulle]}>
              <View style={[styles.alignItems, styles.alignSelfStrech, styles.gap_50]}>
                <CustomText style={[styles.darkBlue, styles.title]}>Que préfères-tu ?</CustomText>
              </View>
              <CustomText style={[styles.darkBlue, style.text]}>
                Au cours de cette aventure, il y aura des textes pour savoir comment atteindre le trésor. Pour ton confort, quelle écriture te correspond le mieux ?
              </CustomText>
              <View style={[styles.center, styles.gap_20, styles.flexRow]}>
                <Pressable onPress={() => handleChangeTypo()}>
                  <Svg width="80" height="80" viewBox="0 0 111 111" fill="none">
                    <G filter="url(#filter0_d_2340_1371)">
                      <Circle cx="45.5" cy="43.9814" r="23" fill="white" />
                      <Path d="M5.5 45.9814C5.5 68.0614 23.42 85.9814 45.5 85.9814C67.58 85.9814 85.5 68.0614 85.5 45.9814C85.5 23.9014 67.58 5.98145 45.5 5.98145C23.42 5.98145 5.5 23.9014 5.5 45.9814ZM45.5 41.9814H61.5V49.9814H45.5V61.9814L29.5 45.9814L45.5 29.9814V41.9814Z" fill="#FD9830" />
                    </G>
                  </Svg>
                </Pressable>
                <View style={[styles.center, styles.gap_10, styles.bg_white, style.inputTypo]}>
                  <CustomText style={[styles.darkBlue, style.textTypo]}>Je préfère cette écriture</CustomText>
                </View>
                <Pressable onPress={() => handleChangeTypo()}>
                  <Svg width="80" height="80" viewBox="0 0 111 111" fill="none">
                    <G>
                      <Path d="M68.5 46.9814C68.5 59.684 58.2025 69.9814 45.5 69.9814C32.7975 69.9814 22.5 59.684 22.5 46.9814C22.5 34.2789 32.7975 23.9814 45.5 23.9814C58.2025 23.9814 68.5 34.2789 68.5 46.9814Z" fill="white" />
                      <Path d="M85.5 45.9814C85.5 23.9014 67.58 5.98145 45.5 5.98145C23.42 5.98145 5.5 23.9014 5.5 45.9814C5.5 68.0614 23.42 85.9814 45.5 85.9814C67.58 85.9814 85.5 68.0614 85.5 45.9814ZM45.5 49.9814H29.5V41.9814H45.5V29.9814L61.5 45.9814L45.5 61.9814V49.9814Z" fill="#FD9830" />
                    </G>
                  </Svg>
                </Pressable>
              </View>
            </View>
          </View>
          <Button isStrech={false} text="On commence l'aventure" color='orange' action={() => setStep('name')} />
        </View>
      </View>
    </ImageBackground>
  )
}

export default Typo

const style = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
    paddingBottom: 50
  },
  view: {
    alignItems: 'flex-start'
  },
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 40
  },
  content: {
    alignItems: 'flex-start',
    alignSelf: 'stretch'
  },
  image: {
    display: "flex",
    width: width * 0.3,
    alignItems: "center",
    gap: 20,
    resizeMode: 'contain'
  },
  bulle: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    maxWidth: width * 0.65,
    maxHeight: height * 0.65,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#FFFAEF",
    shadowColor: darkBlue,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },
  text: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 50,
    letterSpacing: 0.64
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  inputTypo: {
    paddingHorizontal: 50,
    borderRadius: 15,
    borderWidth: 1
  },
  textTypo: {
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 48.6,
    letterSpacing: 1.8
  }
})

