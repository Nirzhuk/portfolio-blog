import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import device from "../../utils/devices";

const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  if (to) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};
const CustomLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  box-shadow: 0 0 0;
  font-family: "Roboto Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: ${(props) => props.size || "24px"};
  transition: text-shadow 0.4s;

  &:hover {
    text-shadow: -3px -2px 0px blue, 3px 2px 0px red;
  }
`;
export default CustomLink;
