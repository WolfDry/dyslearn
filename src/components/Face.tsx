import React from 'react'
import Svg, { Circle, Ellipse } from 'react-native-svg'

interface Props {
  border: string,
  bg: string
}

const Face: React.FC<Props> = ({ border, bg }) => {
  return (
    <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <Circle cx="50" cy="50" r="50" fill={border} />
      <Circle cx="49.5901" cy="49.5903" r="43.8525" fill={bg} />
      <Circle cx="56.6652" cy="55.1122" r="23.0802" fill="white" />
      <Circle cx="27.8149" cy="40.1101" r="19.1182" stroke="#F56004" />
      <Circle cx="71.6673" cy="44.7261" r="19.1182" stroke="#F56004" />
      <Ellipse cx="28.9689" cy="48.1883" rx="2.30802" ry="4.61605" fill="#023436" />
      <Ellipse cx="68.2052" cy="52.8043" rx="2.30802" ry="4.61605" fill="#023436" />
    </Svg>
  )
}

export default Face