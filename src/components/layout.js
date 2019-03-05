import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from './Footer';
import styled from 'styled-components';

const HeaderDiv  = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
` 
const Header = () => {
  return (
    <HeaderDiv>
      <Logo />
      <Navbar />
    </HeaderDiv>
  )
}
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </div>
    )
  }
}

export default Layout
