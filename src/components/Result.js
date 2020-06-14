import React from 'react';
import Loader from './Loader';
import classes from './Result.module.css';
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
const Result=({ results})=> {

	 const poster =
    results.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : results.Poster;
	return (
		<div className={classes.results}>
			<img src={poster} />	
			<h3>{results.Title}</h3> 
		</div>
	)
}

export default Result