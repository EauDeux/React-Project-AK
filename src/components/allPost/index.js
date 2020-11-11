import React, { useState, useEffect, useRef } from 'react'
// import PropTypes from 'prop-types'

import CreateNewPost from '../createNewPost'
// import Header from '../header'

const AllPost = () => {
  const [title, setTitle] = useState('') // initial state
  const [content, setContent] = useState('')
  const [allPost, setAllPost] = useState([])
  const getTitle = useRef()
  const getContent = useRef()
  // useEffect(() => {
  //   console.log(title)
  //   console.log(content)
  // })
  useEffect(() => console.log(title), [title])
  useEffect(() => console.log(content), [content])

  const savePostTitleToState = event => {
    setTitle(event.target.value)
    // console.log(title)
  }

  const savePostContentToState = event => {
    setContent(event.target.value)
    // console.log(content)
  }

  // const savePost = () => {
  //   const id = Date.now()
  //   setAllPost([...allPost, { title, content, id }])
  //   console.log(allPost)
  // }
  const savePost = event => {
    event.preventDefault()
    setAllPost([...allPost, { title, content }])
    console.log(allPost)
    getTitle.current.value = ''
    getContent.current.value = ''
  }

  return (
    <>
      <CreateNewPost
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
        getTitle={getTitle}
        getContent={getContent}
        savePost={savePost}
      />
    </>
  )
}

// CreateNewPost.propTypes = {
//   savePostTitleToState: PropTypes.string,
//   savePostContentToState: PropTypes.string
// }
export default AllPost
