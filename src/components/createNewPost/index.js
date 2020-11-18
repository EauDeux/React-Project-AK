import React from 'react'
import PropTypes from 'prop-types'
// import AllPost from '../allPost/index.js'
// import Header from '../header'

import {
  StyledForm,
  StyledButton,
  StyledInput,
  StyledTextArea
} from './FormNewPost.styled'

const CreateNewPost = props => {
  return (
    <div>
      <StyledForm onSubmit={props.savePost}>
        <StyledInput
          type='text'
          onChange={props.savePostTitleToState}
          // onChange={e => setTitle(e.target.value)}
          placeholder='Titre'
          // size='39'
          required
          ref={props.getTitle}
        ></StyledInput>
        <br />
        <br />
        <StyledTextArea
          onChange={props.savePostContentToState}
          placeholder='Contenu'
          // rows='8'
          // cols='41'
          required
          ref={props.getContent}
        ></StyledTextArea>
        <br />
        <br />
        <StyledButton>Enregistrer</StyledButton>
      </StyledForm>
    </div>
  )
}

CreateNewPost.propTypes = {
  savePostTitleToState: PropTypes.string,
  savePostContentToState: PropTypes.string,
  getTitle: PropTypes.string,
  getContent: PropTypes.string,
  savePost: PropTypes.savePost
}

export default CreateNewPost
