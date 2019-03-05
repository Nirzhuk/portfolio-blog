import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from './Footer';
import styled from 'styled-components';


const Header = () => {
  return (
    <div>
      <Logo />
      <Navbar />
    </div>
  )
}
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
