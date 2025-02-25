import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/type'
import { logout } from '../store/thunks/authThunks'
import Intro from '../components/createChildren/Intro'
import Confirm_register from '../components/createChildren/Confirm_register'
import Typo from '../components/createChildren/Typo'
import Name from '../components/createChildren/Name'
import Age from '../components/createChildren/Age'
import Avatar from '../components/createChildren/Avatar'
import { svgs } from '../../assets/svg/Avatar'
import { updateTypo } from '../store/actions/typoActions'

const CreateChild = () => {

  const avatarKeys = Object.keys(svgs)
  const dispatch: AppDispatch = useDispatch()
  const [step, setStep] = useState('confirm_register')
  const [avatarKey, setAvatarKey] = useState(avatarKeys[0])
  const [age, setAge] = useState('6')
  const [name, setName] = useState('')

  const handleLogout = () => {
    dispatch(logout())
  }

  const typo = useSelector((state: RootState) => state.typo.typo)

  const handleChangeTypo = () => {
    switch (typo) {
      case 'Verdana':
        dispatch(updateTypo('OpenDyslexic'))
        break
      case 'OpenDyslexic':
        dispatch(updateTypo('Verdana'))
      default:
        break
    }
  }

  const handleChangeName = (newName) => {
    setName(newName)
  }

  const handleChangeAge = (opp) => {
    const intAge = parseInt(age)
    let updatedAge = intAge
    switch (opp) {
      case 'minus':
        updatedAge -= 1
        break
      case 'plus':
        updatedAge += 1
        break
    }
    if (updatedAge < 6)
      updatedAge = 12
    if (updatedAge > 12)
      updatedAge = 6
    setAge(updatedAge.toString())
  }

  const handleChangeAvatar = (direction) => {
    setAvatarKey((prevKey) => {
      const currentIndex = avatarKeys.indexOf(prevKey)
      let newIndex = direction === 'plus' ? currentIndex + 1 : currentIndex - 1

      if (newIndex >= avatarKeys.length) newIndex = 0
      if (newIndex < 0) newIndex = avatarKeys.length - 1

      return avatarKeys[newIndex]
    })
  }

  const handleView = (step) => {
    setStep(step)
  }

  return (
    <>
      {step === 'confirm_register' && <Confirm_register handleLogout={handleLogout} setStep={handleView} />}
      {step === 'intro' && <Intro setStep={handleView} />}
      {step === 'typo' && <Typo setStep={handleView} handleChangeTypo={handleChangeTypo} />}
      {step === 'name' && <Name setStep={handleView} name={name} handleNameChange={handleChangeName} />}
      {step === 'age' && <Age setStep={handleView} age={age} handleChangeAge={handleChangeAge} />}
      {step === 'avatar' && <Avatar setStep={handleView} avatarKey={avatarKey} handleChangeAvatar={handleChangeAvatar} />}
    </>
  )

}

export default CreateChild