import React from 'react'

import PropTypes from 'prop-types'

import {
  StyledDeleteButton,
  StyledUpdateButton,
  StyledArticle,
  StyledH3,
  StyledText
} from './Post.styled'

const Post = ({ title, content, editPost, id, deletePost }) => {
  return (
    <>
      <StyledArticle>
        <StyledH3>{title}</StyledH3>
        <StyledText> {content}</StyledText>
        <StyledUpdateButton onClick={() => editPost(id)}>
          Modifier
        </StyledUpdateButton>
        <StyledDeleteButton onClick={() => deletePost(id)}>
          Supprimer
        </StyledDeleteButton>
      </StyledArticle>
    </>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  editPost: PropTypes.any,
  id: PropTypes.id,
  deletePost: PropTypes.any
}
export default Post
