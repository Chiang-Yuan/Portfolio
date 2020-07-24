import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Container, NavItem, NavLink, Navigation, Toggle, Navbox, Hamburger } from './nav.css';

// const Nav = () => (
//   <Container>
//     <ul>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/project">Project</Link>
//       </li>
//       <li>
//         <Link to="/publication">Publication</Link>
//       </li>
//       <li>
//         <Link to="/blog">Blog</Link>
//       </li>
//       <li>
//         <a href="https://github.com/Chiang-Yuan">GitHub</a>
//       </li>
//     </ul>
//   </Container>
// );
//
// export default Nav;



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
            <NavItem to="/about">About</NavItem>
            <NavItem to="/project">Project</NavItem>
            <NavItem to="/publication">Publication</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <a href="https://github.com/Chiang-Yuan"><NavLink>GitHub</NavLink></a>
          </>
        </Navbox>
      ) : (
        <Navbox open>
          <>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/project">Project</NavItem>
            <NavItem to="/publication">Publication</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <a href="https://github.com/Chiang-Yuan"><NavLink>GitHub</NavLink></a>
          </>
        </Navbox>
      )}
    </Navigation>
  )
}

export default Nav;
