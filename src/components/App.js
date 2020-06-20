import React,{Component} from "react";
import Navbar from './Navbar';
import Home from './Home';

import store from './Store'

import { Provider } from 'react-redux';
class App extends Component{
render(){
 return(
  <>

   <Provider store={store}>  
       <Navbar />
       <Home />
    </Provider>

   </>
)
 }

}

export default App