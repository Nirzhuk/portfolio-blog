import styled from 'styled-components'
import { glitchEffect } from './keyFrames';

const primaryColor = '#fff';

const GlitchText = styled.p`
    color: ${primaryColor};
    font-size: ${props => props.size || '24px'};
    font-family: 'Roboto Mono', monospace;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    transform: scale3d(1,1,1);

    &::before,
    &::after {
        content: '${props => props.children}';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        color: ${primaryColor};
        clip: rect(0, 900px, 0, 0);
    }

    &::before {
        left: 7px;
        text-shadow: 2px 0 blue;
        animation: ${glitchEffect} 3s infinite linear alternate-reverse;
    }

    &::after {
        left: 3px;
        text-shadow: -2px 0 red;
        animation: ${glitchEffect} 2s infinite linear alternate-reverse;
    }
`;

export default GlitchText;
