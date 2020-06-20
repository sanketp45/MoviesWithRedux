import * as actionTypes from './Actions/actiontypes'

const Initialstate={
search:'',
Movies:[],
loading:false,
Movie:[],
loadMovie:false,
errorMessage:false

}


const Searchreducer=(state=Initialstate,action) =>
{
  switch(action.type)
  {

   case actionTypes.SEARCH_MOVIE:
       return{
                 ...state,
                 search:action.payload,
                 loading:true,
                 errorMessage:false   
                      }

   


case actionTypes.FETCH_MOVIES:
console.log("inside of reducer")

return{
  ...state,
  Movie:action.payload,
  loading:false,
  loadMovie:true,

}
case actionTypes.FAILED_SEARCH:
return{

errorMessage:true,
loading:false

}
default:
       return state;

  }



}
export default Searchreducer;