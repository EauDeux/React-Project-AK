import React from 'react'
import PropTypes from 'prop-types'
// import AllPost from '../allPost/index.js'
// import Header from '../header'

const CreateNewPost = props => {
  return (
    <div>
      <form onSubmit={props.savePost}>
        <input
          type='text'
          onChange={props.savePostTitleToState}
          // onChange={e => setTitle(e.target.value)}
          placeholder='Titre'
          size='39'
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <textarea
          onChange={props.savePostContentToState}
          placeholder='Contenu'
          rows='8'
          cols='41'
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <button>Enregistrer</button>
      </form>
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
