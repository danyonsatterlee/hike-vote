import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
//this gets the thing that makes the store
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
//this gets the reducer to handle state
import reducers from "./reducers";
import Home from './containers/home.js'
import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component{
    render(){
        return(
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
       
  
        </Switch>
      </BrowserRouter>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

