import React from 'react';
import Link from '../Link'
import styled from 'styled-components';

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
            <NavLink to='blog'>Blog</NavLink>
            <NavLink to='work'>Work</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='contact'>Contact</NavLink>
        </NavbarContainer>
    )
}
export default Navbar;