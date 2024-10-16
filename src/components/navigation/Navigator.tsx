import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/type'
import LoadingNavigator from './LoadingNavigator'
import LoginNavigator from './LoginNavigator'
import { Text } from 'react-native'

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
    <Text>Coucou</Text>
            )
};

export default Navigator;
