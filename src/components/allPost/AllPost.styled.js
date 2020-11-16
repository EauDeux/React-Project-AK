import styled from 'styled-components'

export const StyledH1 = styled.h1`
  text-align: center;
  color: ${props => props.theme.secondary};
  margin-top: 5%;
  margin-bottom: 5%;
  font-weight: bold;
  font-size: 30px;
`

export const StyledH3 = styled.h3`
  text-align: center;
  color: #9fc0c7;
  font-size: 23px;
`

export const Button = styled.button`
  background: ${props => props.theme.secondary};
  border-radius: 3px;
  border: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.white};
  margin: 0.5em 1em;
  padding: 2%;
  width: 25%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
