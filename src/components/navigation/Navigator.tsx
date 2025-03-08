import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/type'
import LoadingNavigator from './LoadingNavigator'
import LoginNavigator from './LoginNavigator'
import CreateUserNavigator from './CreateUserNavigator'
import LogedNavigator from './LogedNavigator'

const Navigator = () => {
  const { user, loading } = useSelector((state: RootState) => state.auth)

  let screen;
  if (!user) {
    screen = <LoginNavigator />
  } else if (user.children.length < 1) {
    screen = <CreateUserNavigator />
  } else {
    screen = <LogedNavigator />
  }

  return (
    <>
      {loading && <LoadingNavigator />}
      {screen}
    </>
  )
};

export default Navigator
