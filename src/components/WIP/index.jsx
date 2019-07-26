import React from 'react'
import styled from 'styled-components';
import { textShadow } from './keyframes'

const WIPComponent = ({ children }) => {
  return (
    <WIPComponentContainer>
      <TextWIP>{children}</TextWIP>
    </WIPComponentContainer>
  )
}

const WIPComponentContainer = styled.div`
  animation: ${textShadow} 1.6s infinite;

  text-align: center;
  width:100%;
  height: 300px;
  justify-content: center;
  display: flex;
  align-items: center;
`
const TextWIP = styled.p`
  font-size: 72px;
  color: #18164e;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
`


export default WIPComponent
