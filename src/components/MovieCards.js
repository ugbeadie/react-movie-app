import React, { useRef } from 'react'
import Snackbar from './Snackbar'

const MovieCards = (props) => {

	const FavComponent = props.alterfav
	const snackbarRef = useRef(null)

	return (
		<>
		
			{props.movies.map((movie, index) => {		
				
				return (
					<div key={index}>
						<div className='movie'>					
							<img
							src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
							alt={movie.Title}/>
							<div
							onClick={() => {
								props.handleClick(movie)
								snackbarRef.current.show()
								}}
							className='overlay'>
								<FavComponent/>
								
							</div>
							<Snackbar
								ref={snackbarRef}
							/>
						</div>
						<div className='title_year'>
							<p>{movie.Title}</p>
							<p>{movie.Year}</p>
						</div>
					</div>

			)})}
		</>
	)
}

export default MovieCards;