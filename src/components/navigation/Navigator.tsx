import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ScanQR from '../../pages/ScanQR';
import Login from '../../pages/Login';

export type RootStackParamList = {
    Login: undefined;
    QrCode: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="QrCode" component={ScanQR} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
