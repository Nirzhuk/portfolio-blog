import React from 'react'
import styled from 'styled-components'
import { dissapearEffect } from './keyFrames'

const ShowcaseContainer = styled.div`
  position: relative;
  width: 400px;
  height: auto;
  padding: 50px;
  display:block;
  color: white;
  margin: 15px;
  border: 1px solid rgb(54, 68, 129);
  border-radius: 8px;
  -webkit-transform: skewX(-15deg);
  transform: skewX(-15deg);
  overflow: hidden;
  z-index:2;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
        -webkit-transform: skewX(15deg);
        transform: skewX(15deg);
        background: rgba(17,17,27,0.1);
        background-image: radial-gradient(rgba(255,255,255,0.5) 5%, transparent 0);
        background-size: 24px 24px;
        animation: ${dissapearEffect} 2s ease-in-out 2s infinite;
    }
`;
const ShowCaseContent = styled.div`
  -webkit-transform: skewX(15deg);
  transform: skewX(15deg);
`

const Showcase = () => {
    return (
        <ShowcaseContainer>
            <ShowCaseContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sapiente est vitae blanditiis vero amet molestias ipsum aliquam, fuga enim, labore autem iusto. Repellat unde pariatur distinctio. Praesentium, temporibus perspiciatis!
            </ShowCaseContent>
        </ShowcaseContainer>

    )
}

export default Showcase
