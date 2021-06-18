import React from 'react'
import TodoItem from "./TodoItem"

const Todos = (props) => {
    return (
        <div className="container"  >
            <h3 className="my-3">Todos List</h3>
            <div style={classes.todoContainer}>
            {props.todos.length===0? "No Todos to display":  
            props.todos.map((todo)=>
            {
                return (<TodoItem todo={todo} />   
                )
            })

              } 
              </div>
        </div>
    )
}

export default Todos

const classes={
    todoContainer:{
        overflow: 'auto',
    height: '50vh'
    }
}

