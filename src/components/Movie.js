import React,{Component} from "react";
import classes from './Movie.module.css';
import Result from './Result';
import {connect} from 'react-redux';
import Loader from './Loader';

class Movie extends Component {

 render(){
 const{results}=this.props

  return (
    <section className={classes.movie}>
           {
       <ul> 
       {

         results.map(result => (
     <>
      <li> <img src ={result.Poster} /> </li>
        <li> {result.Title} </li> 
     </>
      
      ))}
     </ul>
}

    </section>
  )


};
}
 const mapStateToProps = state => ({
  results: state.movies.Movie,

});



export default connect(mapStateToProps) (Movie);