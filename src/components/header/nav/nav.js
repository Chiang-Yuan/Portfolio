import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Container, NavItem, NavLink, Navigation, Toggle, Navbox, Hamburger } from './nav.css';

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/project">Projects</NavItem>
            <NavItem to="/publication">Publications</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <a href="https://github.com/Chiang-Yuan"><NavLink>GitHub</NavLink></a>
          </>
        </Navbox>
      ) : (
        <Navbox open>
          <>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/project">Projects</NavItem>
            <NavItem to="/publication">Publications</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <a href="https://github.com/Chiang-Yuan"><NavLink>GitHub</NavLink></a>
          </>
        </Navbox>
      )}
    </Navigation>
  )
}

export default Nav;
