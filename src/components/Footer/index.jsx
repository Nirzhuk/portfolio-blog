import React from 'react';
import styled from 'styled-components'
import Link from '../Link'
const FooterContainer = styled.footer`
    width: 100%;
    text-align: center;
    margin-top: 45px;
    padding: 30px 0 30px 0;
    display:flex;
    justify-content:center;
    justify-items: center;
    color: goldenrod;
    font-family: 'Roboto Mono', monospace;
    background: rgb(26, 36, 46);
`

export default function Footer() {
    return (
        <FooterContainer>
            <div>
                © {new Date().getFullYear()} Nirzhuk
            </div>
        </FooterContainer>
    )
}
