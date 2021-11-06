import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Main from './components/main/main';
import Card from './components/card/card';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path = "/" component = {Main}/>
          <Route path = "/card/:usename/:reponame" component = {Card}/>
          <Redirect to = "/"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
