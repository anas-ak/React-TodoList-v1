import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';
import TodoList from './TodoList.js';

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <img src={logo} className="App-logo" alt="logo" />
    <h2>To Do List</h2>
     <TodoList />
     <footer> Coded by: Anas Ahmed</footer>
  </div>, destination);