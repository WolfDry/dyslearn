import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { black, styles } from '../../../assets/style/style'
import Button from '../form/Button';
import CustomText from '../CustomText';
const { width, height } = Dimensions.get('window');

const bg = require('../../../assets/images/background/illustration-salle-de-jeu.png')
const redd = require('../../../assets/images/character/t-shirt.png')

const Intro = ({ setStep }) => {
  return (
    <ImageBackground source={bg} style={[styles.justifyContentCenter, styles.alignItems, style.bg]}>
      <View style={[styles.full_h, styles.full_w, styles.justifyContentBetween, styles.padding_50]}>
        <Button isStrech={false} text='Retour' isReturn action={() => setStep('confirm_register')} />
        <View style={[styles.alignSelfStrech, style.container]}>
          <View style={[styles.flexRow, styles.justifyContentCenter, styles.alignSelfStrech, styles.alignItemsStart]}>
            <View style={[styles.alignItems, styles.gap_20]}>
              <Image style={[styles.flex_1, styles.alignSelfStrech, style.image]} source={redd} />
            </View>
            <View style={[styles.flex_1, styles.alignItems, styles.gap_50, styles.padding_50, styles.bg_cream, style.bulle]}>
              <View style={[styles.alignItems, styles.alignSelfStrech, styles.gap_50]}>
                <CustomText style={[styles.darkBlue, style.title]}>Bonjour ! je m'appelle Reed.</CustomText>
              </View>
              <CustomText style={[styles.darkBlue, style.text]}>
                Bonjour, toi ! Je suis <CustomText style={{ fontWeight: 700 }}>Redd</CustomText> ! Je suis super content que tu sois là, parce que j’ai une grande mission et j’ai besoin d’un ami comme toi pour m’aider ! Je suis à la recherche du <CustomText style={{ fontWeight: 700 }}>Nombre d’Or</CustomText> et je suis sûr qu’ensemble, on pourra le trouver !
              </CustomText>
            </View>
          </View>
          <Button isStrech={false} text="On commence l'aventure" color='orange' action={() => setStep('typo')} />
        </View>
      </View>
    </ImageBackground>
  )
}

export default Intro

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
    borderRadius: 50,
    borderWidth: 1,
    borderColor: black,
  },
  title: {
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 48.6,
    letterSpacing: 1.8
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
  }
})