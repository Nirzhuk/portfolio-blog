import React from 'react'
import { Link } from "gatsby";
import './style.scss'
export default function Header() {
    return (
        <div className="navbar">
            <Link className="smart-link" to='blog'>Blog</Link>
        </div>
    )
}
