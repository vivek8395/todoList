import Footer from "./components/Footer"
import Header from "./components/Header"
import Todos from "./components/Todos"
import TodoItem from "./components/TodoItem"
import { AddTodo  } from "./components/AddTodo"
import { About } from "./components/About"
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App=()=> {
  const [todos, settodos] = useState('');

  const addTodo = (title, desc) => {
    
    const myTodo = {
      
      title: title,
      desc: desc,
    }
    settodos([...todos, myTodo]);
    console.log(myTodo);
  }
  

  return ( 
    <> 
    
      <Header /> 
      <AddTodo  addTodo={addTodo} />
      <Todos todos={todos}  /> 
      <Footer />
     
         
        </>
  );
}

export default App;
