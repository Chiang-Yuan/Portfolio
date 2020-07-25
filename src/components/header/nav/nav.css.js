import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;


export const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 1.3rem;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 0.5px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    padding: 20px 20px;
    font-size: 1.5rem;
    z-index: 6;
  }
`

export const NavLink = styled.div`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 1.3rem;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 0.5px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    padding: 20px 20px;
    font-size: 1.5rem;
    z-index: 6;
  }
`

export const Navigation = styled.nav`
  /* height: 5vh; */
  float: right;
  display: flex;
  background-color: #fff;
  /* position: relative; */
  justify-content: space-between;
  text-transform: uppercase;
  /* border-bottom: 2px solid #33333320; */
  margin: auto 0;
  /* padding: 0 0; */
  z-index: 2;
  /* align-self: center; */

  @media (max-width: 960px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 960px) {
    display: flex;
  }
`


export const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    /* padding-top: 10vh; */
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 10vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

export const Hamburger = styled.div`
  float: right;
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  /* align-self: center; */
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
