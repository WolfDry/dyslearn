import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { black, darkBlue, styles, white } from '../../../assets/style/style';
import CustomText from '../CustomText';

type InputProps = {
  placeholder: string
  password: boolean
  setValue: (value: string) => void
  value: string
  error?: string
}

const Input = (props: InputProps) => {
  const [hidePassword, setHidePassword] = useState(props.password);

  return (
    <View style={styles.full_w}>
      <View style={[style.inputContainer, styles.alignItems, styles.justifyContentBetween, props.error && { borderColor: 'red' }]}>
        <TextInput
          style={[style.input, styles.full_w]}
          placeholder={props.placeholder}
          placeholderTextColor={'rgba(32, 23, 38, 0.75)'}
          secureTextEntry={hidePassword}
          onChangeText={props.setValue}
          value={props.value}
        />
        {props.password && (
          <Icon
            style={style.icon}
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
          />
        )}
      </View>
      {props.error && (
        <View style={{ marginTop: 5 }}>
          <CustomText style={{ color: 'red', fontSize: 14 }}>{props.error}</CustomText>
        </View>
      )}
    </View>
  )
}

const style = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 50,
    paddingVertical: 35.5,
    alignSelf: 'stretch',
    borderRadius: 15,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: 'rgba(32, 23, 38, 0.75)'
  },
  input: {
    textAlign: 'center',
    fontSize: 24,
    fontStyle: 'normal',
    letterSpacing: 0.48
  },
  icon: {
    position: 'absolute',
    right: 10,
    fontSize: 20,
    color: 'black',
  },
});

export default Input;
