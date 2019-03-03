import React from "react";
import Logo from './Logo';
import Navbar from "./Navbar";

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
        <Header/>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
