import React from "react";
import TodoItem from "./TodoItem"

const TodoList = (props) => {

    return(
        <ul>
            {props.todos.map(todo => (
                <TodoItem  key={todo.id} todo={todo} handleChangeProps={props.handleChangeProps} delTodoProps={props.delTodoProps} editTodoProps={props.editTodoProps}/>
            ))}
        </ul>
    )
}


export default TodoList