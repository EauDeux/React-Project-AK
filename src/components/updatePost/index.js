import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledForm,
  StyledButton,
  StyledInput,
  StyledTextArea,
  StyledH1
} from './UpdatePost.styled'

const UpdatePost = props => {
  return (
    <>
      <StyledH1>Modification de l article</StyledH1>
      <StyledForm>
        <StyledInput
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          type='text'
          placeholder='Titre'
          // size='39'
          required
        ></StyledInput>
        <br />
        <br />
        <StyledTextArea
          defaultValue={props.content}
          onChange={props.savePostContentToState}
          placeholder='Contenu'
          rows='8'
          cols='41'
          required
        ></StyledTextArea>
        <br />
        <br />
        <StyledButton onClick={props.updatePost}>Modifier</StyledButton>
      </StyledForm>
    </>
  )
}

UpdatePost.propTypes = {
  savePostTitleToState: PropTypes.string,
  savePostContentToState: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  updatePost: PropTypes.any
}
export default UpdatePost
