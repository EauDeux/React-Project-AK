import React from 'react'
import { StyledNav, StyledUl, StyledLink } from './Nav.styled'
import Logout from '../logout'

// import './index.css'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from '../../config/router'

// eslint-disable-next-line no-unused-vars
const Header = props => {
  return (
    <header className='App-header'>
      <Router>
        <StyledNav>
          <StyledUl>
            <StyledLink>
              <Link to='/'>Home</Link>
            </StyledLink>
            <StyledLink>
              <Link to='/articles'>Poster un article</Link>
            </StyledLink>
            <StyledLink>
              <Link to='/about'>A propos de nous</Link>
            </StyledLink>
          </StyledUl>
          <StyledLink>
            <Logout></Logout>
          </StyledLink>
        </StyledNav>

        <Routes></Routes>
      </Router>
    </header>
  )
}

export default Header
