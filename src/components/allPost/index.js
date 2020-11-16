import React, { useState, useEffect, useRef } from 'react'
// import PropTypes from 'prop-types'

import CreateNewPost from '../createNewPost'
import Post from '../post'
import UpdatedPost from '../updatePost'
// import Header from '../header'

import { StyledH1, StyledH3, Button } from './AllPost.styled'

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
        <h1>Poster un nouvel article</h1>
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
      <StyledH1>Tous les articles</StyledH1>
      {!allPost.length ? (
        <div>
          <StyledH3>Il n y a pas encore d articles</StyledH3>
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
      <Button onClick={toggleCreateNewPost}>Ajouter un article</Button>
    </>
  )
}

export default AllPost
