import React from 'react'
import styled from 'styled-components'
import GatsbyImage from '../GatsbyImage'
import Link from '../Link'
import device from '../../utils/devices'

const Showcase = (props) => {
  return (
    <Link to={props.to}>
      <ShowcaseContainer>
        <GatsbyImage src={props.src} />
        <HoverContent>
          <TextTitle>{props.text}</TextTitle>
        </HoverContent>
      </ShowcaseContainer>
    </Link>
  )
};
const TextTitle = styled.p`
    font-size: 18px;
    text-shadow: 0 2px 3px rgba(0,0,0,0.7);
    font-family: 'Roboto Mono', monospace;
    text-align: center;
    position: absolute;
    z-index: 3;
    width: 100%;
    @media ${device.mobile}{
        margin-top: -25px;
    }
`;
const ShowcaseContainer = styled.div`
<<<<<<< HEAD
  width: 320px;
  padding: 16px;
  height: 175px;
=======
  max-width: 325px;
  width:600px;
  height: 200px;
>>>>>>> f1162b7... Project dynamic
  position: relative;
  display: inline-block;
  color: white;
  margin: 16px;
  border: 1px solid rgb(52,120,231);
  box-shadow: 0 6px 0 rgba(52,120,231,0.25),1px 5px 0 rgba(52,120,231,0.25),-1px 5px 0 rgba(52,120,231,0.25);
  border-radius: 12px;
  overflow: hidden;
  z-index: 2;
  .gatsby-image-wrapper, image {
      position: initial !important;
  }
    @media ${device.mobile} {
        margin: 0 0 24px 0;
        padding: 16px 0 16px 0;
        width: -webkit-fill-available;
    }
`;
const HoverContent = styled.div`
    height: 100%;
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
    opacity: 0;
    display: flex;
    align-content: center;
    align-items: center;

    &:hover {
    
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
    @media ${device.mobile} {
        align-items: start;
        margin-top: 175px;
        opacity: 1;
    }
    &:after {
        @media ${device.mobile} {
            margin-top: 180px;
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
