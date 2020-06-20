import React, { Component } from 'react';
import Movie from './Movie';
import Loader from './Loader';
import { connect } from 'react-redux';
import Search from './Search';
export class Home extends Component {
  render() {
   return (
      <div className="container">
        <Search />
          {this.props.loadingState ? <Loader /> : null}
        <div>
          {this.props.movie ? <Movie /> :null }
        </div>
         <div>
               {this.props.error?<div>Movie does not found </div>:null}
         </div> 
        </div>
    );
  }
}
const mapStateToProps=state =>
{

  return{

    loadingState:state.movies.loading,
     movie:state.movies.loadMovie,
     error:state.movies.errorMessage
 
  }
}


export default connect(mapStateToProps) (Home);