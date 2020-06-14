
import React, { useState } from "react";

import classes from './Search.module.css';
const Search=({handleinput,onsearch,searched}) =>
{

   return(

      <form className={classes.Search} > 
       <input type="text" onChange={handleinput}
            onKeyPress={onsearch}
placeholder="please enter the title of the movie you want to Search"
           value={searched} />

       

       </form>
   	)

}

export default Search;

