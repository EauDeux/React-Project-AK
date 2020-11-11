import React from 'react'
import PropTypes from 'prop-types'

const UpdatePost = props => {
  return (
    <>
      <form>
        <h1>Modification de l article</h1>
        <input
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          type='text'
          placeholder='Titre'
          size='39'
          required
        ></input>
        <br />
        <br />
        <textarea
          defaultValue={props.content}
          onChange={props.savePostContentToState}
          placeholder='Contenu'
          rows='8'
          cols='41'
          required
        ></textarea>
        <br />
        <br />
        <button onClick={props.updatePost}>Modifier</button>
      </form>
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
