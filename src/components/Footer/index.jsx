import React from 'react';
import styled from 'styled-components'
import Link from '../Link'
import { GitHub } from 'react-feather'

const FooterContainer = styled.footer`
    display:flex;
    justify-content:center;
    justify-items: center;
    text-align: center;
    width: 100%;
    bottom: 0;
    position: absolute;
    padding: 30px 0 30px 0;
    color: gold;
    font-family: 'Roboto Mono', monospace;
    background: rgb(23, 33, 43);
    line-height:32px;
`

export default function Footer() {
    return (
        <FooterContainer>
            © {new Date().getFullYear()} Nirzhuk -
            <Link href="https://github.com/Nirzhuk"><GitHub color="gold" /></Link>
        </FooterContainer>
    )
}
