import React from 'react'
import PropTypes from 'prop-types'
// import Header from '../header'

const CreateNewPost = props => {
  return (
    <div>
      <form>
        <input
          type='text'
          onChange={props.savePostTitleToState}
          placeHolder='title'
          size='39'
          required
        ></input>
        <br />
        <br />
        <textarea
          onChange={props.savePostContentToState}
          placeHolder='content'
          rows='8'
          cols='41'
          required
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
  savePostContentToState: PropTypes.string
}

export default CreateNewPost
