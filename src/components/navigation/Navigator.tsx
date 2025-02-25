import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/type'
import LoadingNavigator from './LoadingNavigator'
import LoginNavigator from './LoginNavigator'
import CreateUserNavigator from './CreateUserNavigator'
import LogedNavigator from './LogedNavigator'

const Navigator = () => {

  const { user, loading } = useSelector((state: RootState) => state.auth)

  if (loading)
    return (
      <LoadingNavigator />
    )

  if (!user)
    return (
      <LoginNavigator />
    )

  if (user.children.length < 1)
    return (
      <CreateUserNavigator />
    )

  return (
    <LogedNavigator />
  )
};

export default Navigator;
