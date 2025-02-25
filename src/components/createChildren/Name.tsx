import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native'
import { darkBlue, styles } from '../../../assets/style/style'
import Button from '../form/Button'
import CustomText from '../CustomText'
import Input from '../form/Input'
const { width, height } = Dimensions.get('window');

const bg = require('../../../assets/images/background/illustration-salle-de-jeu.png')
const redd = require('../../../assets/images/character/t-shirt.png')

const Name = ({ setStep, name, handleNameChange }) => {

  return (
    <ImageBackground source={bg} style={[styles.justifyContentCenter, styles.alignItems, style.bg]}>
      <View style={[styles.full_h, styles.full_w, styles.justifyContentBetween, styles.padding_50]}>
        <Button isStrech={false} text='Retour' isReturn action={() => setStep('typo')} />
        <View style={[styles.alignSelfStrech, style.container]}>
          <View style={[styles.flexRow, styles.justifyContentCenter, styles.alignSelfStrech, styles.alignItemsStart]}>
            <View style={[styles.alignItems, styles.gap_20]}>
              <Image style={[styles.flex_1, styles.alignSelfStrech, style.image]} source={redd} />
            </View>
            <View style={[styles.padding_50, styles.alignItems, styles.gap_50, styles.bg_cream, style.bulle]}>
              <View style={[styles.alignItems, styles.alignSelfStrech, styles.gap_50]}>
                <CustomText style={[styles.darkBlue, styles.title]}>Quel est ton nom ?</CustomText>
              </View>
              <CustomText style={[styles.darkBlue, style.text]}>
                Au fait, je ne connais pas ton prénom ! Comment est-ce que tu t’appelles ?
              </CustomText>
              <Input value={name} setValue={handleNameChange} placeholder='Exemple : Jean' password={false} />
            </View>
          </View>
          <Button isStrech={false} text="Ravi de faire ta connaissance" color='orange' action={() => setStep('age')} />
        </View>
      </View>
    </ImageBackground>
  )
}

export default Name

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

