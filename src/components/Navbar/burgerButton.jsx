import React from 'react';
import styled from 'styled-components';

const Button = styled.button``;
const BurgerSVG = styled.svg`
path{
    stroke: #fff;
    stroke-width: 6px;
    color: #fff;
    stroke-linecap: round;
}
line{
    stroke: #fff;
    stroke-width: 6px;
    color: #fff;
    stroke-linecap: round;
}

`;
const BurgerButton = () => {
    return (
        <Button>
            <BurgerSVG width="32px" height="32px">
            <path id="first" d="M 30 40 L 70 40 C 90 40 90 75 60 85 A 40 40 0 0 1 20 20 L 80 80"></path>
    <path id="middle" d="M 30 50 L 70 50"></path>
     <path id="second" d="M 70 60 L 30 60 C 10 60 10 20 40 15 A 40 38 0 1 1 20 80 L 80 20"></path>
            </BurgerSVG>
        </Button>
    );
}
export default BurgerButton;