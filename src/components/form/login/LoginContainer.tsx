import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import Input from '../Input';
import { styles } from '../../../../assets/style/style';
import Button from '../Button';
import { useAuth } from '../../../context/AuthContext'; // Assurez-vous que le chemin vers AuthContext est correct
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator'

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginContainer = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { error, login } = useAuth();
    const navigation = useNavigation<LoginScreenNavigationProp>()

    const navigateToQrCode = async () => {
        navigation.navigate('QrCode');
    };

    const handleLogin = async () => {
        await login(email, password);
    };

    return (
        <View style={[style.container, styles.flex_075]}>
            <View style={[styles.flex_075]}>
                <View style={style.inputContainer}>
                    <Input placeholder='Email' password={false} setValue={setEmail} />
                    <Input placeholder='Mot de passe' password={true} setValue={setPassword} />
                </View>
                {error && <Text style={style.errorText}>{error}</Text>}
                <View style={style.forgotContainer}>
                    <Text style={[style.forgotText, styles.blue, styles.glacialRegular]}>Mot de passe oublié ?</Text>
                </View>
                <View style={[styles.flex_075, styles.alignItems, styles.justifyContentAround, style.buttonContainer]}>
                    <Button text='Se connecter' color='orange' action={handleLogin} />
                </View>
            </View>
            <View style={[styles.flex_05, styles.alignItems, styles.justifyContentAround]}>
                <View>
                    <Svg width="94" height="93" viewBox="0 0 94 93" fill="none">
                        <Path d="M60.7872 42.0857H83.6386C90.0672 42.0857 93.23 38.8714 93.23 32.2436V9.79286C93.23 3.16286 90.0672 0 83.6386 0H60.7872C54.4079 0 51.1936 3.16286 51.1936 9.79286V32.2436C51.1936 38.8714 54.4079 42.0857 60.7872 42.0857ZM10.3614 42.0857H33.2643C39.6415 42.0857 42.8557 38.8714 42.8557 32.2436V9.79286C42.8557 3.16286 39.6415 0 33.2643 0H10.3614C3.98431 0 0.77002 3.16286 0.77002 9.79286V32.2436C0.77002 38.8714 3.98431 42.0857 10.3614 42.0857ZM10.4622 35.0057C8.70502 35.0057 7.85002 34.1014 7.85002 32.2414V9.795C7.85002 7.98643 8.70502 7.08214 10.4643 7.08214H33.1143C34.8715 7.08214 35.7757 7.98643 35.7757 9.795V32.2457C35.7757 34.1036 34.8715 35.0079 33.1143 35.0079L10.4622 35.0057ZM60.8857 35.0057C59.1286 35.0057 58.2757 34.1014 58.2757 32.2414V9.795C58.2757 7.98643 59.1286 7.08214 60.8857 7.08214H83.5872C85.295 7.08214 86.15 7.98643 86.15 9.795V32.2457C86.15 34.1036 85.295 35.0079 83.5872 35.0079L60.8857 35.0057ZM17.4929 26.3164H26.0815C26.8357 26.3164 27.1357 26.0164 27.1357 25.1614V16.8257C27.1357 16.02 26.8357 15.72 26.0815 15.72H17.4929C16.7407 15.72 16.5393 16.02 16.5393 16.8236V25.1614C16.5393 26.0143 16.7407 26.3164 17.4929 26.3164ZM68.2186 26.3186H76.7579C77.51 26.3186 77.8122 26.0186 77.8122 25.1636V16.8279C77.8122 16.0221 77.5122 15.7221 76.7579 15.7221H68.2186C67.4665 15.7221 67.2157 16.0221 67.2157 16.8257V25.1636C67.2157 26.0164 67.4665 26.3186 68.2186 26.3186ZM10.3614 92.4643H33.2643C39.6415 92.4643 42.8557 89.3014 42.8557 82.6714V60.1714C42.8557 53.5929 39.6415 50.3786 33.2643 50.3786H10.3614C3.98431 50.3786 0.77002 53.5929 0.77002 60.1714V82.6714C0.77002 89.3014 3.98431 92.4643 10.3614 92.4643ZM54.5579 63.3857H63.1465C63.9007 63.3857 64.2007 63.0857 64.2007 62.2286V53.8929C64.2007 53.0893 63.9007 52.7893 63.1465 52.7893H54.5579C53.8057 52.7893 53.6043 53.0893 53.6043 53.8929V62.2286C53.6043 63.0857 53.8057 63.3857 54.5579 63.3857ZM10.4622 85.38C8.70502 85.38 7.85002 84.4757 7.85002 82.6671V60.2164C7.85002 58.3586 8.70502 57.4543 10.4643 57.4543H33.1143C34.8715 57.4543 35.7757 58.3586 35.7757 60.2186V82.6671C35.7757 84.4757 34.8715 85.38 33.1143 85.38H10.4622ZM17.4929 76.74H26.0815C26.8357 76.74 27.1357 76.44 27.1357 75.5357V67.2493C27.1357 66.4457 26.8357 66.1436 26.0815 66.1436H17.4929C16.7407 66.1436 16.5393 66.4436 16.5393 67.2493V75.5357C16.5393 76.44 16.7407 76.74 17.4929 76.74ZM68.0193 76.74H76.6057C77.36 76.74 77.66 76.44 77.66 75.5357V67.2493C77.66 66.4457 77.36 66.1436 76.6057 66.1436H68.0172C67.265 66.1436 67.0636 66.4436 67.0636 67.2493V75.5357C67.0636 76.44 67.265 76.74 68.0193 76.74ZM54.5579 90.0493H63.1465C63.9007 90.0493 64.2007 89.7493 64.2007 88.8943V80.5586C64.2007 79.7529 63.9007 79.4529 63.1465 79.4529H54.5579C53.8057 79.4529 53.6043 79.7529 53.6043 80.5586V88.8943C53.6043 89.7493 53.8057 90.0493 54.5579 90.0493ZM81.2279 90.0514H89.8143C90.5686 90.0514 90.8707 89.7514 90.8707 88.8964V80.5607C90.8707 79.755 90.5686 79.455 89.8143 79.455H81.2279C80.4736 79.455 80.2207 79.755 80.2207 80.5607V88.8964C80.2207 89.7514 80.4736 90.0514 81.2279 90.0514Z" fill="#023436" />
                    </Svg>
                </View>
                <View>
                    <Button text='Connexion par QR code' color='yellow' action={navigateToQrCode}/>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: '10%',
    },

    inputContainer: {
        height: '50%',
        justifyContent: 'space-around',
    },

    forgotContainer: {
        alignItems: 'flex-end',
    },

    forgotText: {
        fontSize: 12,
    },

    buttonContainer: {
        // justifyContent: 'space-around',
    },

    errorText: {
        color: 'red',
        textAlign: 'center',
        marginVertical: 10,
    },
})

export default LoginContainer;
