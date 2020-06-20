
import React, { Component } from "react";
import * as actionTypes from './Actions/Forimport'
import classes from './Search.module.css';
import {connect} from 'react-redux';
class Search extends Component
{
   

	SetSearch=(e)=>
	{
           
          this.props.onSearch(e.target.value)
	}
  
     onSubmite = e => {
     e.preventDefault();
     this.props.onSubmit(this.props.search);
    
  };
  
 render(){
   
   return(

      <form className={classes.Search}  onSubmit={this.onSubmite}> 
       <input type="text" onChange={this.SetSearch}
            
      placeholder="please enter the title of the movie you want to Search"
           	 />
  <button onClick={this.Submit}>
      Click me!
    </button>
       </form>
   	)

}


}
const mapStateToProps = state => ({
  search: state.movies.search
});



const  mapDispatchToProps=dispatch=>{
return{
  onSearch:(search)=>dispatch(actionTypes.searchMovie(search)),
  onSubmit:(search)=>	dispatch(actionTypes.fetchMovies(search))
    }

}


export default connect(mapStateToProps,mapDispatchToProps) (Search);

