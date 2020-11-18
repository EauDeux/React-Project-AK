import styled from 'styled-components'

export const StyledSpan = styled.span`
  color: white;
  margin-top: 5px;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 25px;
`

export const StyledForm = styled.form`
  border-style: solid;
  border-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #476883; */
  width: 40%;
  padding: 5%;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8%;
`

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  /* border-bottom: solid 2px #d9d2c2; */
  background-color: #476883;
  width: 50%;
  padding: 4%;
  color: white;
  border-radius: 10px;
`

export const StyledInput = styled.input`
  /* color: blue; */
  justify-content: center;
  width: 50%;
  border: none;
  border-radius: 10px;
`

export const StyledTextArea = styled.textarea`
  border: none;
  border-radius: 10px;
  justify-content: center;
  width: 100%;
  height: 150px;
`
