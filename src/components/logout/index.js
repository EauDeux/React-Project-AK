import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Logout = () => {
  const history = useHistory()
  const isToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  const handleSignIn = () => {
    history.push('/login')
  }

  return (
    <Container>
      {isToken ? (
        <LogoutButton onClick={handleLogout}>Déconnexion</LogoutButton>
      ) : (
        <button onClick={handleSignIn}>Login</button>
      )}
    </Container>
  )
}

const LogoutButton = styled.button`
  padding: 12px;
  background-color: green;
`

const Container = styled.div`
  background-color: red;
`

export default Logout
