import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/type'
import { logout } from '../store/thunks/authThunks'

import Intro from '../components/createChildren/Intro'
import Confirm_register from '../components/createChildren/Confirm_register'
import Typo from '../components/createChildren/Typo'
import Name from '../components/createChildren/Name'
import Age from '../components/createChildren/Age'
import Avatar from '../components/createChildren/Avatar'

const CreateChild = () => {

  const dispatch: AppDispatch = useDispatch()
  const [view, setView] = useState(<View></View>)

  useEffect(() => {
    setView(
      <Confirm_register handleLogout={handleLogout} setStep={handleView} />
    )
  }, [])

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleView = (step) => {
    switch (step) {
      case 'intro':
        setView(<Intro setStep={handleView} />)
        break
      case 'confirm_register':
        setView(<Confirm_register handleLogout={handleLogout} setStep={handleView} />)
        break
      case 'typo':
        setView(<Typo setStep={handleView} />)
        break
      case 'name':
        setView(<Name setStep={handleView} />)
        break
      case 'age':
        setView(<Age setStep={handleView} />)
        break
      case 'avatar':
        setView(<Avatar setStep={handleView} />)
        break
      default:
        setView(<Confirm_register handleLogout={handleLogout} setStep={handleView} />)
        break
    }
  }

  return view
}

export default CreateChild