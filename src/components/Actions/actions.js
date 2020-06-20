import * as actionTypes from './actiontypes';
import axios from 'axios';


export const searchMovie = search => dispatch => {
	console.log("inside of search",search)
  dispatch({
    type: actionTypes.SEARCH_MOVIE,
    payload: search
  });
};

export const setMovies=data=>dispatch=>{
console.log("setMovies",data)
    dispatch({
       type:actionTypes.FETCH_MOVIES,
         payload:data,
         

      });



};

export const failedsearch =data =>dispatch=>{
 console.log("failedsearch")
  dispatch({
  
   type:actionTypes.FAILED_SEARCH
   

  })


}


export const fetchMovies = search => dispatch => {
 
console.log("inside of fetch movies",search)
 
 


fetch(`https://www.omdbapi.com/?s=${search}&apikey=8d641397`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
         dispatch(setMovies(jsonResponse.Search))
         

        } else {
          
           dispatch(failedsearch("error"))
                 }
      });




}





















 