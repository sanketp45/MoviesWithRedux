import React from "react";
import classes from './Movie.module.css';
import Result from './Result'
import Loader from './Loader';
const Movie = ({ results}) => {




return (
    <section className={classes.movie}>
       {
       	results.map(results => (
        <Result key={results.imdbID} results={results} />
      ))





       }
    </section>
  )


};


export default Movie;