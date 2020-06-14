import React,{useState, useEffect} from 'react';
import Header from './Header';
import Search from './Search';
import './App.css';
import Loader from './Loader';
import Movie from './Movie';
import axios from 'axios';
const App =()=> {
  const [results,setResult]=useState([])
  const[errorMessage,setErrorMessage]=useState()
	const [searchvalue,setSearchValue]=useState() 
  const [message,setMessage]=useState()
  const [loading,setloading]=useState(false)
 
  const movieApi="http://www.omdbapi.com/?apikey=8d641397";
  const search = (e) => {
 
      setloading(true)
      if (e.key === "Enter") {
     e.preventDefault();
      fetch(`https://www.omdbapi.com/?s=${searchvalue}&apikey=8d641397`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setResult(jsonResponse.Search);
          setSearchValue('')   
           resetInput()
           setloading(false)
        } else {
          setErrorMessage(jsonResponse.Error);
          setMessage("movie does not  found")
          e.preventDefault()         

                 }
      });
    };

  }
const resetInput=()=>
{
  setSearchValue('')


}
 const handlesearchInputChanges=(e) =>
 {
  setSearchValue(e.target.value)
  
 }

   return (
    <div className="App">
        
<div>
       <Header text="The movie search app" />
       <Search handleinput={handlesearchInputChanges} onsearch={search} />

{errorMessage ?<div><p>{message}</p>
        </div>:null}

      {loading?<div><Loader /></div> : <Movie results={results} searched={searchvalue} />}

</div>


    </div>
  );

}
export default App;
