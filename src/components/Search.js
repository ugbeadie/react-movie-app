import React from 'react'

const Search = (props) => {
    return (
        <div className='search-box'>
            <input className='search-field'
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                placeholder='start typing to search' />
        </div>
    )
}

export default Search;