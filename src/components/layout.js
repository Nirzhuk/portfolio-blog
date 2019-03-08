import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from './Footer';

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
    const { children } = this.props
    return (
      <React.Fragment>
        <Header />
        {children}
        <Footer />
      </React.Fragment>
    )
  }
}

export default Layout
