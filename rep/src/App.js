import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { Route, BrowserRouter } from 'react-router-dom';
import Main from './components/main/main';

function App() {
  const dispatch = useDispatch()
  return (
    <BrowserRouter>
      <div className="container">
        <Route path = "/" component = {Main}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
