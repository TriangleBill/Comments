import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeInputText } from '../redux/actions';

export default function Title(props) {
    const dispatch = useDispatch()
    const text = useSelector(state => {
        const { inputReducer } = state
        return inputReducer.text
    })

    const handleChange = (e) => {
        dispatch(changeInputText(e.target.value))
    }

    return (
        <div className='card-title'>
            <div className="card-title-top">
                <input type="text" onChange={handleChange} />
            </div>
            <p>{text}</p>
        </div>
    )
}
