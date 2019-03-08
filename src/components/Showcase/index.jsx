import React from 'react'
import styled from 'styled-components'
import { dissapearEffect } from './keyFrames'

const ShowcaseContainer = styled.div`
  position: relative;
  max-width: 900px;
  height: auto;
  padding: 50px;
  display:block;
  color: white;
  margin: 15px;
  border: 1px solid rgb(54, 68, 129);
  border-radius: 8px;
  -webkit-transform: ${props => props.direction === 'left' ? 'skewX(-15deg)' : 'skewX(15deg)'};
  transform: ${props => props.direction === 'left' ? 'skewX(-15deg)' : 'skewX(15deg)'};
  overflow: hidden;
  z-index:2;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: -200px;
        width: 125%;
        height: 125%;
        -webkit-transform: ${props => decideDirection(props)};
        transform: ${props => decideDirection(props)};
        background: rgba(17,17,27,0.1);
        background-image: radial-gradient(rgba(255,255,255,0.5) 5%, transparent 0);
        background-size: 24px 24px;
        animation: ${dissapearEffect} 2s ease-in-out 2s infinite;
    }

`;
const ShowCaseContent = styled.div`
  -webkit-transform: ${props => decideDirection(props)};
  transform: ${props => decideDirection(props)};
`
const decideDirection = (props) => {
    return props.direction === 'left' ? 'skewX(15deg)' : 'skewX(-15deg)';
}

const Showcase = (props) => {
    return (
        <ShowcaseContainer direction={props.direction}>
            <ShowCaseContent direction={props.direction}>
                {props.children}
            </ShowCaseContent>
        </ShowcaseContainer>

    )
}

export default Showcase
