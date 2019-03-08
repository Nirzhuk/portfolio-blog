import React from 'react';
import styled from 'styled-components'
import Link from '../Link'
import { GitHub } from 'react-feather'
const FooterContainer = styled.footer`
    width: 100%;
    text-align: center;
    margin-top: 45px;
    padding: 30px 0 30px 0;
    display:flex;
    justify-content:center;
    justify-items: center;
    color: gold;
    font-family: 'Roboto Mono', monospace;
    background: rgb(26, 36, 46);
`

export default function Footer() {
    return (
        <FooterContainer>
            © {new Date().getFullYear()} Nirzhuk -
            <Link href="https://github.com/Nirzhuk"><GitHub color="gold" /></Link>
        </FooterContainer>
    )
}
