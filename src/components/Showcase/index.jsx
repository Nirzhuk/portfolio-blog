import React from 'react'
import styled from 'styled-components'
import { dissapearEffect } from './keyFrames'
import GatsbyImage from '../GatsbyImage'
import Link from '../Link'

const Showcase = (props) => (
    <Link to={props.to}>
        <ShowcaseContainer>
            <GatsbyImage src={props.src} />
            <HoverContent>
                <TextTitle>{props.text}</TextTitle>
            </HoverContent>
        </ShowcaseContainer>
    </Link>
);
const TextTitle = styled.p`
    font-size: 24px;
    text-shadow: 0 2px 0 rgba(0,);
    font-family: 'Roboto Mono', monospace;
`;
const ShowcaseContainer = styled.div`
  max-width: 300px;
  width: 300px;
  height: 300px;
  position: relative;
  display: inline-block;
  color: white;
  margin: 15px;
  border: 1px solid rgb(54, 68, 129);
  border-radius: 12px;
  overflow: hidden;
  z-index:2;
  .gatsby-image-wrapper {
      position: initial !important;
  }
`;
const HoverContent = styled.div`
    height: 100%;
    line-height: 280px;
    text-align: center;
    width: 100%;
    opacity: 0;

    &:hover {
        position: relative;
        opacity: 1;
        transition: opacity 1.5s;
        
        &:after {
            content: '';
            position: absolute;
            top: -50px;
            width: 150%;
            height: 150%;
            left: -50px;
            background: rgba(17,17,27,0.1);
            background-image: radial-gradient(rgba(255,255,255,0.5) 5%, transparent 0);
            background-size: 24px 24px;
        }
    }
`;

export default Showcase
