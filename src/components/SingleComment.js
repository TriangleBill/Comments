import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentDelete, commentUpdate } from './../redux/actions';

export default function SingleComment({ data }) {
  const { text, id } = data
  const [commentText, setCommentText] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (text) {
      setCommentText(text)
    }
  }, [text])

  const handleInput = (e) => {
    setCommentText(e.target.value)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(commentUpdate(commentText, id))
  }

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(commentDelete(id))
  }

  return (
    <form onSubmit={handleUpdate} action="" className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput}/>
      <input type="submit" hidden />
    </form>
  );
}
