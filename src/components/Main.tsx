import React, { Component } from 'react';
import Home from './Home';
import Book from './pages/Book';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NavBar from './NavBar';

const Main = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/book'>
            <Book />  
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Main;
