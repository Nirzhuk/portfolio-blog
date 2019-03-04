import React from 'react';
import { Link } from "gatsby";
const SmartLink = styled.span`
    text-decoration: none;
    color: #fff;
    box-shadow: 0 0 0;
    font-family: 'Roboto Mono', monospace;
    text-transform: uppercase;
`
export default function Header() {
    return (
        <div>
            <SmartLink>
                <Link to='blog'>
                    Blog
                </Link>
            </SmartLink>

        </div>
    )
}
