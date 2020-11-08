import React from 'react'

import './index.css'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from '../../config/router'

// eslint-disable-next-line no-unused-vars
const Header = props => {
  return (
    <header className='App-header'>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Articles</Link>
            </li>
            <li>
              <Link to='/articles'>Poster un article</Link>
            </li>
          </ul>
        </nav>

        <Routes></Routes>
      </Router>
    </header>
  )
}

export default Header
