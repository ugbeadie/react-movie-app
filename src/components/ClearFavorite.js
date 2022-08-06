import React from 'react'

const ClearFavorite = (props) => {
    return (
        <>
            <button 
            onClick={props.onclear}
            className='clear'>clear favorite</button>
        </>
    )
}

export default ClearFavorite;