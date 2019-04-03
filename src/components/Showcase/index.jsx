import React from 'react'
import styled from 'styled-components'
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
    font-size: 18px;
    text-shadow: 0 2px 3px rgba(0,0,0,0.7);
    font-family: 'Roboto Mono', monospace;
    text-align: center;
    position: absolute;
    z-index: 3;
    width: 100%;
`;
const ShowcaseContainer = styled.div`
  max-width: 300px;
  width: 600px;
  padding: 16px;
  height: 175px;
  position: relative;
  display: inline-block;
  color: white;
  margin: 15px;
  border: 1px solid rgb(52,120,231);
  box-shadow: 0 3px 0 rgba(52,120,231,0.25);
  border-radius: 12px;
  overflow: hidden;
  z-index: 2;
  .gatsby-image-wrapper {
      position: initial !important;
  }
`;
const HoverContent = styled.div`
    height: 100%;
    text-align: center;
    width: 100%;
    opacity: 0;
    display: flex;
    align-content: center;
    align-items: center;

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
            background: rgba(17,17,27,0.8);
            background-image: radial-gradient(rgba(255,255,255,0.5) 5%, transparent 0);
            background-size: 24px 24px;
        }
    }
`;

export default Showcase
