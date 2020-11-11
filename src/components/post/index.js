import React from 'react'

import PropTypes from 'prop-types'

const Post = ({ title, content, editPost, id, deletePost }) => {
  return (
    <>
      <section>
        <h3>{title}</h3>
        <p> {content}</p>
        <button onClick={() => editPost(id)}>Modifier</button>
        <button onClick={() => deletePost(id)}>Supprimer</button>
      </section>
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
