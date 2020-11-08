import React, { useState } from 'React'
// import PropTypes from 'prop-types'

import CreateNewPost from '../createNewPost'
// import Header from '../header'

const AllPost = () => {
  const [title, setTitle] = useState('')

  const [content, setContent] = useState('')

  const savePostTitleToState = event => {
    setTitle(event.target.value)
    console.log(title)
  }

  const savePostContentToState = event => {
    setContent(event.target.value)
    console.log(content)
  }

  return (
    <>
      <CreateNewPost
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
      />
    </>
  )
}

// CreateNewPost.propTypes = {
//   savePostTitleToState: PropTypes.string,
//   savePostContentToState: PropTypes.string
// }
export default AllPost
