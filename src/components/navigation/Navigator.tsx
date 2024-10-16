import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/type'
import LoadingNavigator from './LoadingNavigator'
import LoginNavigator from './LoginNavigator'
import { Text, View } from 'react-native'
import { styles } from '../../../assets/style/style'
import ConnectedNavigator from './ConnectedNavigator'

const Navigator = () => {

    const {user, loading} = useSelector((state: RootState) => state.auth)

    if(loading)
        return (
            <LoadingNavigator/>
        )

    if(!user)
        return(
            <LoginNavigator/>
        )

    if(user)
        return(
            <ConnectedNavigator/>
        )
};

export default Navigator;
