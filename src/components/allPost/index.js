import React, { useState, useEffect, useRef } from 'react'
// import PropTypes from 'prop-types'

import CreateNewPost from '../createNewPost'
import Post from '../post'
import UpdatedPost from '../updatePost'
// import Header from '../header'

const AllPost = () => {
  const [title, setTitle] = useState('') // initial state
  const [content, setContent] = useState('')
  const [allPost, setAllPost] = useState([])
  const [isCreateNewPost, setIsCreateNewPost] = useState(false)
  const [isModifyPost, setIsModifyPost] = useState(false)
  const [editPostId, setEditPostId] = useState('')
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

  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost)
  }

  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost)
  }

  const editPost = id => {
    setEditPostId(id)
    toggleModifyPostComponent()
  }

  const deletePost = id => {
    const modifiedPost = allPost.filter(eachPost => {
      return eachPost.id !== id
    })
    setAllPost(modifiedPost)
  }

  const savePost = event => {
    event.preventDefault()
    const id = Date.now()
    setAllPost([...allPost, { title, content, id }])
    console.log(allPost)
    getTitle.current.value = ''
    getContent.current.value = ''
    toggleCreateNewPost()
  }

  const updatePost = event => {
    event.preventDefault()
    const updatedPost = allPost.map(eachPost => {
      if (eachPost.id === editPostId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content
        }
      }
      return eachPost
    })
    setAllPost(updatedPost)
    toggleModifyPostComponent()
  }

  if (isCreateNewPost) {
    return (
      <>
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
          deletePost={deletePost}
        />
      </>
    )
  } else if (isModifyPost) {
    const post = allPost.find(post => {
      return post.id === editPostId
    })
    return (
      <UpdatedPost
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
      />
    )
  }
  return (
    <>
      <h2>All Posts</h2>
      {!allPost.length ? (
        <div>
          <h3>Il n y a pas encore d articles</h3>
        </div>
      ) : (
        allPost.map(eachPost => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
            />
          )
        })
      )}
      <br />
      <br />
      <button onClick={toggleCreateNewPost}>Create New</button>
    </>
  )
}

export default AllPost
