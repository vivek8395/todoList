import React from 'react'

const TodoItem = ({todo}) => {
    return (
        <div style={{
            border:'2px solid #ccc',
            padding:'5px 15px',  
            marginBottom:'10px'  
        }}>
           
           <h6>Title:  {todo.title}</h6>
           <h6>Description: {todo.desc}</h6><br/>
                 
        </div>
    )
}

export default TodoItem
