import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { black, styles, white } from '../../../assets/style/style';

type InputProps = {
  placeholder: string,
  password: boolean,
  setValue: (value: string) => void,
};

const Input = (props: InputProps) => {
  const [hidePassword, setHidePassword] = useState(props.password);

  return (
    <View style={[style.inputContainer, styles.center]}>
      <TextInput
        style={[style.input, styles.full_w]}
        placeholder={props.placeholder}
        placeholderTextColor={black}
        secureTextEntry={hidePassword}
        onChangeText={props.setValue}
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
  );
};

const style = StyleSheet.create({
  inputContainer: {
    height: 100,
    paddingHorizontal: 40,
    gap: 10,
    alignSelf: 'stretch',
    borderRadius: 50,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: black
  },
  input: {
    fontSize: 24,
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
