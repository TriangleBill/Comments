import React from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';

export default function Spin(props) {
    const spinner = useSelector(state => state.appReducer.loading)

    return (
        <div className="loader-styles">
            <Loader
                heigth="100"
                width="100"
                color='grey'
                ariaLabel='loading'
                visible={spinner}
            />
        </div>
    )
}
