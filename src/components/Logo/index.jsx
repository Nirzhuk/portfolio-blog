import React, { Component } from "react";
import styled from "styled-components";
import anime from "animejs";
import device from "../../utils/devices";
import { blinkEffect } from "./keyFrames";
import Link from "../Link";

const AsciiTitle = styled.p`
  font-family: "Share Tech Mono", monospace;
  text-transform: uppercase;
  font-size: 2em;
  color: #f9f9f9;
  letter-spacing: 10px;
  margin: 0;
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15),
    1px 2px 0px rgba(255, 255, 255, 0.15), 2px 3px 0px rgba(255, 255, 255, 0.15);
  @media ${device.mobile} {
    font-size: 1em;
  }
`;
const LogoSVG = styled.svg`
  width: 750px;
  @media ${device.mobile} {
    width: auto;
  }
`;
const LogoContainer = styled.div`
  height: 200px;
  width: 50vw;
  margin-top: 50px;
  svg {
    fill: none;
    path {
      transition: fill 2s ease-in-out;
      fill: transparent;
      stroke-width: 1px;
    }
  }

  &.completed {
    svg {
      filter: drop-shadow(0 -2px 3px rgba(255, 215, 0, 0.1))
        drop-shadow(0 0 2px rgba(255, 215, 0, 0.2))
        drop-shadow(0 0 0.3em rgba(255, 215, 0, 0.3))
        drop-shadow(0 0 0.5em rgba(255, 68, 68, 0.7))
        drop-shadow(0 0 0.1em rgba(255, 68, 68, 0.5));
      animation: ${blinkEffect} linear infinite 5s;
      path {
        transition: fill 2s ease-in-out;
        fill: gold;
        stroke: none;
      }
    }
  }
`;
export default class Logo extends Component {
  componentDidMount() {
    anime({
      targets: ".logo",
      duration: 400,
      loop: false,
    }).finished.then(() => {
      document.querySelector(".logo").classList.add("completed");
    });
  }
  render() {
    return (
      <React.Fragment>
        <Link to="">
          <LogoContainer className="logo">
            <AsciiTitle>John R. Serrano Perez</AsciiTitle>
            <LogoSVG viewBox="0 0 400 50">
              <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeWidth="0.5"
              >
                <path
                  d="M18.2,4.9l4.7,0.3c0,0.5-0.6,0.9-1.3,0.9v7.5h12.7l0.7-0.3l2.9,1.3c-0.1,0.2-0.3,0.4-0.5,0.5c-2.2,16.6-9.1,26.3-24.1,31.5
                c-0.4-0.7-1.4-2-2.2-2.8c14.1-4.8,20.6-13.7,22.2-27H6.5v11.8H3.2v-15h15V4.9z"
                />
                <path d="M71.8,18.5v2.8H60.2v18.7h14.3v2.8H42.8v-2.8h14.3V21.3H45.5v-2.8H71.8z" />
                <path
                  d="M114.7,10.8c-1.4-1.8-3.2-3.8-4.6-5l1.7-1.3c2.1,1.8,4.7,4.8,6.1,6.8l-0.9,0.7l0.4,0.2c-0.1,0.2-0.4,0.4-0.7,0.5
                c-3.7,17.9-12.9,28.6-28.4,34c-0.6-0.9-1.5-2.1-2.2-2.8c14.9-4.9,23.7-15.3,26.5-29.6H82.2v-3.2h31.5l0.6-0.4L114.7,10.8z M122,10.5
                c-1.2-2-3.8-5.2-5.8-6.8l1.8-1.4c2.2,1.8,4.6,4.7,5.9,6.8L122,10.5z"
                />
                <path
                  d="M165.7,23.8H150l0.8,0.2c0,0.3-0.4,0.5-1,0.6c-1.2,8.6-5.1,17.1-14.7,21.9c-0.5-0.6-1.8-1.7-2.6-2.3
                c9.4-4.7,12.6-11.9,13.7-20.4h-18.1v-3.2h37.5V23.8z M158.7,10.9h-26.4V7.7h26.4V10.9z M159.3,3.9c1.9,2,4.1,5.3,5.2,7.5l-1.9,1.3
                c-1-2.2-3.3-5.6-5.2-7.5L159.3,3.9z M164.9,2.3c1.9,2,4.2,5.3,5.4,7.5l-1.9,1.2c-1-2.1-3.4-5.5-5.2-7.4L164.9,2.3z"
                />
                <path
                  d="M172,28.6c3.6-3.8,11.1-12.2,13.8-15.1c1.2-1.2,2.5-1.8,3.7-1.8c1.3,0,2.6,0.7,3.8,1.8c6.1,5.6,16,16.6,23.2,25.9l-2.8,2.6
                c-6.7-9.4-16.7-20.6-22-25.5c-0.8-0.8-1.4-1.2-2-1.2c-0.6,0-1.2,0.5-1.9,1.2c-2.2,2.4-9.2,10.4-12.3,13.8c0,0.1,0,0.2,0,0.3
                c0,0.4-0.2,0.8-0.5,1L172,28.6z M203.5,8.9c2.2,1.9,4.6,4.8,6,6.9l-1.8,1.4c-1.4-2.1-3.9-5.2-5.9-6.9L203.5,8.9z M209.1,4.7
                c2.2,1.9,4.7,4.8,6,6.9l-1.8,1.4c-1.4-2.1-3.9-5.1-5.9-6.9L209.1,4.7z"
                />
                <path d="M257.2,11.7V43h-3.4v-3h-26.2v3.1h-3.3V11.7H257.2z M253.8,36.8v-22h-26.2v22H253.8z" />
                <path
                  d="M270.5,17.9c1.4,2.9,3,7.5,3.6,10.2l-2.7,0.7c-0.6-2.8-2-7.1-3.5-10.1L270.5,17.9z M298.8,18.2c-0.1,0.4-0.6,0.5-1,0.5
                c-3.7,13.9-10.7,22.4-22.2,27c-0.4-0.6-1.2-1.7-1.9-2.2c11.3-4.5,17.9-12.2,21.3-26.4L298.8,18.2z M282,15.6c1,3.2,1.9,7.7,2.2,10.8
                l-2.8,0.5c-0.3-3-1.2-7.4-2.2-10.7L282,15.6z"
                />
                <path
                  d="M320.8,12.6c-0.1,0.4-0.5,0.7-1.2,0.7c-1.9,11.4-5.8,23.4-11.4,30.4c-0.9-0.7-2.1-1.3-3.2-1.7c5.3-6.5,9.5-18.5,11-30.4
                L320.8,12.6z M344.7,43.4c-2.2-8.3-7.7-21.8-12.6-30.6l3.1-1.5c5,8.5,10.5,21.9,13,30.7L344.7,43.4z M344,3.1c2.9,0,5.3,2.4,5.3,5.4
                c0,2.9-2.4,5.3-5.3,5.3c-2.9,0-5.3-2.4-5.3-5.3C338.7,5.4,341.2,3.1,344,3.1z M347.8,8.4c0-2.1-1.7-3.8-3.7-3.8
                c-2.1,0-3.8,1.7-3.8,3.8c0,2,1.7,3.8,3.8,3.8C346.2,12.2,347.8,10.4,347.8,8.4z"
                />
                <path d="M353.6,23.4h39.6v3.4h-37.8c-0.3,0.5-0.9,0.8-1.5,0.9L353.6,23.4z" />
              </g>
            </LogoSVG>
          </LogoContainer>
        </Link>
      </React.Fragment>
    );
  }
}
