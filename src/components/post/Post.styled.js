import styled from 'styled-components'

export const StyledArticle = styled.article`
  width: 35%;
  margin: 2% 4%;
  padding: 2%;
  background-color: ${props => props.theme.white};
  border-radius: 25px;
  float: left;

  @media screen and (max-width: 500px) {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    float: none;
    margin-top: 4%;
  }
`

export const StyledH3 = styled.h3`
  text-align: center;
`

export const StyledText = styled.p`
  text-align: center;
`

export const StyledDeleteButton = styled.button`
  background: ${props => props.theme.delete};
  border-radius: 3px;
  border: 2px solid ${props => props.theme.delete};
  color: ${props => props.theme.white};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  margin-left: auto;
  margin-right: auto;
  display: block;
`

export const StyledUpdateButton = styled.button`
  background: ${props => props.theme.main};
  border-radius: 3px;
  border: 2px solid ${props => props.theme.main};
  color: ${props => props.theme.white};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  margin-right: auto;
  margin-left: auto;
  display: block;
`
