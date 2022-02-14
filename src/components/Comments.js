import React, { useEffect, useState } from 'react';
import SingleComment from './SingleComment';
import uniqid from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';
import { changeCommentCreate } from '../redux/actions';
import { commentsLoad } from './../redux/actions';

export default function Comments() {
    const [textComment, setTextComment] = useState('')
    const dispatch = useDispatch()
    const comments = useSelector(state => {
        const { commentsReducer } = state
        return commentsReducer.comments
    })

    const handleInput = (e) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uniqid()
        dispatch(changeCommentCreate(textComment, id))
    }

    useEffect(() => {
        dispatch(commentsLoad())
    }, [dispatch])

    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" value={textComment} onChange={handleInput} />
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(res => {
                return  <SingleComment key={res.id} data={res}/>
            })}
           
        </div>
    );
}
