import React from 'react'

const MovieCards = (props) => {
    
    const FavComponent = props.alterfav

    return (
        <>
            {props.movies.map((movie, index) => (
            <div key={index} className='movie'>
                <img src={movie.Poster !== 'N/A' ? 
                movie.Poster : 'https://via.placeholder.com/400'}
                alt={movie.title}   
                />
                <div 
                onClick={() => props.handleClick(movie)}
                className='overlay'>
                    <FavComponent/>
                </div>
            </div>
            ))}
        </>
    )
}

export default MovieCards;
// import React from 'react'

// const MovieCards = (props) => {

// 	const FavComponent = props.alterfav
// 	// const index = props.key

// 	return (
// 		<>
// 			{props.movies.map((movie, index) => {
// 				return (
// 					<div key={index}>
// 						<div className='movie'>					
// 							<img				
// 							src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
// 							alt={movie.Title}/>
// 							<div
// 							onClick={() => props.handleClick(movie)}
// 							className='overlay'>
// 								<FavComponent/>
// 							</div>
// 						</div>
// 						<div className='title_year'>
// 							<p>{movie.Title}</p>
// 							<p>{movie.Year}</p>
// 						</div>
// 					</div>

// 			)})}
// 		</>
// 	)
// }

// export default MovieCards;