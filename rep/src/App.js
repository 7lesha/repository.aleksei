import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Main from './components/main/main';
import Card from './components/card/card';

function App() {
  const dispatch = useDispatch()
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
