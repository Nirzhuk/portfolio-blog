import React, { useState } from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import Link from '../Link'
import BurgerButton from './burgerButton';
=======
import device from '../../utils/devices';
>>>>>>> f1162b7... Project dynamic

const NavLink = styled(Link)`
    margin-right: 10px;
    margin-left: 10px;
    @media ${device.mobile} {
      font-size: 14px;
      &:before {
      content: ' ';
      width: 16px;
      background: #fff;
      height: 3px;
      position: absolute;
      margin-top: 20px;
    }
    }
`;

const NavbarContainer = styled.div`
    width: 100%;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <BurgerButton />
            <NavLink to='blog'>Blog</NavLink>
            <NavLink to='work'>Work</NavLink>
            <NavLink to='games'>Games</NavLink>
            <NavLink to='contact'>Contact</NavLink>
        </NavbarContainer>
    )
}
export default Navbar;