import React from 'react'
const UpdatePost = () => {
  return (
    <>
      <form>
        <h1>Modify Post</h1>
        <input type='text' placeholder='Titre' size='39' required></input>
        <br />
        <br />
        <textarea placeholder='Contenu' rows='8' cols='41' required></textarea>
        <br />
        <br />
        <button>Modifier</button>
      </form>
    </>
  )
}
export default UpdatePost
