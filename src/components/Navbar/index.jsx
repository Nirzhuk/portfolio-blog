import React, { useState } from 'react';
import styled from 'styled-components';
import Link from '../Link'
import BurgerButton from './burgerButton';

const NavLink = styled(Link)`
    margin-right: 10px;
    margin-left: 10px;
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