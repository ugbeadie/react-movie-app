import React from 'react'

const MovieHead = (props) => {
    return (
        <div className='heading'>
            <h1 style={{color: '#8789a8'}}>{props.heading}</h1>
        </div>
    )
}

export default MovieHead;